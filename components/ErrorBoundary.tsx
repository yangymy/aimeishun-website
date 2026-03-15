"use client";

/**
 * Error Boundary Component
 * 
 * 捕获React组件树中的错误，防止整个应用崩溃
 * 支持错误上报到监控服务
 * 
 * 使用方法:
 *   <ErrorBoundary>
 *     <YourComponent />
 *   </ErrorBoundary>
 */

import React, { Component, ErrorInfo, ReactNode } from "react";

// 错误信息接口
interface ErrorInfoData {
  componentStack: string;
}

// 组件状态接口
interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

// 组件属性接口
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  resetKeys?: Array<string | number>;
}

class ErrorBoundary extends Component<Props, State> {
  private resetTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    // 更新状态，下次渲染时显示降级UI
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 可以在这里将错误日志上报到服务器
    this.setState({
      error,
      errorInfo,
    });

    // 调用自定义错误处理回调
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // 上报到监控服务
    this.reportError(error, errorInfo);
  }

  componentDidUpdate(prevProps: Props) {
    // 如果resetKeys发生变化，重置错误状态
    if (
      this.state.hasError &&
      this.props.resetKeys &&
      prevProps.resetKeys
    ) {
      const hasResetKeyChanged = this.props.resetKeys.some(
        (key, index) => key !== prevProps.resetKeys?.[index]
      );

      if (hasResetKeyChanged) {
        this.resetErrorBoundary();
      }
    }
  }

  componentWillUnmount() {
    // 清理定时器
    if (this.resetTimeoutId) {
      clearTimeout(this.resetTimeoutId);
    }
  }

  // 重置错误边界
  resetErrorBoundary = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }

    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  // 上报错误到监控服务
  private reportError(error: Error, errorInfo: ErrorInfo) {
    const errorData = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      url: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof window !== "undefined" ? navigator.userAgent : "",
    };

    // 1. 控制台输出（开发环境）
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", errorData);
    }

    // 2. 上报到 Google Analytics（如果配置了 gtag）
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "exception", {
        description: `${error.message} | ${errorInfo.componentStack}`,
        fatal: true,
      });
    }

    // 3. 上报到 Sentry（如果配置了 Sentry）
    if (typeof window !== "undefined" && (window as any).Sentry) {
      (window as any).Sentry.captureException(error, {
        extra: {
          componentStack: errorInfo.componentStack,
        },
      });
    }

    // 4. 上报到自定义错误监控服务
    this.sendToErrorTrackingService(errorData);
  }

  // 发送到自定义错误监控服务
  private async sendToErrorTrackingService(errorData: object) {
    try {
      // 这里可以配置你自己的错误监控服务
      const ERROR_TRACKING_ENDPOINT = process.env.NEXT_PUBLIC_ERROR_TRACKING_URL;
      
      if (!ERROR_TRACKING_ENDPOINT) {
        return;
      }

      // 使用 Beacon API 确保数据在页面关闭时也能发送
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(errorData)], {
          type: "application/json",
        });
        navigator.sendBeacon(ERROR_TRACKING_ENDPOINT, blob);
      } else {
        // 降级到 fetch
        await fetch(ERROR_TRACKING_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(errorData),
          // 使用 keepalive 确保请求完成
          keepalive: true,
        });
      }
    } catch (e) {
      // 静默处理上报失败，避免循环错误
      console.error("Failed to send error report:", e);
    }
  }

  render() {
    if (this.state.hasError) {
      // 渲染自定义 fallback UI 或默认错误页面
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
            {/* 错误图标 */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
              <svg
                className="h-8 w-8 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            {/* 标题 */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              页面出现错误
            </h2>

            {/* 错误信息（仅在开发环境显示） */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-6 text-left">
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                  <p className="text-sm font-mono text-red-800 break-all">
                    {this.state.error.toString()}
                  </p>
                </div>
                {this.state.errorInfo && (
                  <details className="text-left">
                    <summary className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                      查看组件堆栈
                    </summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-4 rounded overflow-auto max-h-48 text-gray-700">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  </details>
                )}
              </div>
            )}

            {/* 用户友好提示 */}
            <p className="text-gray-600 mb-6">
              抱歉，页面加载出现了问题。请尝试刷新页面或返回首页。
            </p>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.resetErrorBoundary}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C9A961] hover:bg-[#B89850] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A961] transition-colors"
              >
                <svg
                  className="mr-2 -ml-1 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                重试
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A961] transition-colors"
              >
                返回首页
              </a>
            </div>

            {/* 联系支持 */}
            <p className="mt-6 text-sm text-gray-500">
              问题持续存在？请联系{" "}
              <a
                href="mailto:support@aimeishun.cn"
                className="text-[#C9A961] hover:underline"
              >
                客服支持
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

// Hook 版本（用于函数组件）
export function useErrorHandler() {
  const handleError = React.useCallback((error: Error) => {
    // 可以将错误抛出到最近的 Error Boundary
    throw error;
  }, []);

  return handleError;
}

// 错误报告 Hook
export function useErrorReporter() {
  const reportError = React.useCallback(
    async (error: Error, context?: Record<string, unknown>) => {
      const errorData = {
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
        url: typeof window !== "undefined" ? window.location.href : "",
        userAgent: typeof window !== "undefined" ? navigator.userAgent : "",
      };

      // 控制台输出
      console.error("Reported error:", errorData);

      // 上报到 Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "exception", {
          description: error.message,
          fatal: false,
        });
      }

      // 发送到监控服务
      const endpoint = process.env.NEXT_PUBLIC_ERROR_TRACKING_URL;
      if (endpoint) {
        try {
          await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(errorData),
            keepalive: true,
          });
        } catch (e) {
          console.error("Failed to report error:", e);
        }
      }
    },
    []
  );

  return reportError;
}
