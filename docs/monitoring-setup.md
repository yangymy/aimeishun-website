# 网站监控和分析系统设置文档

> **项目**: 爱美舜官网  
> **创建时间**: 2026-03-15  
> **最后更新**: 2026-03-15

---

## 📊 已配置的监控系统

### 1. Google Analytics 4 (GA4)

#### 配置概览
- **Tracking ID**: `G-XXXXXXXXXX` (占位符，实际部署时需替换)
- **集成位置**: `app/layout.tsx`
- **加载策略**: `afterInteractive` (页面交互后加载，不阻塞渲染)

#### 已配置事件

| 事件类型 | 事件名称 | 触发条件 | 配置状态 |
|---------|---------|---------|---------|
| 页面浏览 | `page_view` | 用户访问任意页面 | ✅ 自动追踪 |
| 咨询点击 | `consultation_click` | 点击咨询按钮 | ⏳ 需手动配置 |

#### GA4 代码位置

```tsx
// app/layout.tsx
<head>
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `}
  </Script>
</head>
```

#### 转化事件配置步骤

如需追踪咨询按钮点击，需在按钮组件中添加事件代码：

```tsx
// 在 FloatContact 或其他咨询按钮组件中
const handleConsultClick = () => {
  // 发送 GA 事件
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'consultation_click', {
      event_category: 'engagement',
      event_label: 'float_button',
      value: 1
    });
  }
  // ... 原有逻辑
};
```

---

### 2. Vercel Analytics

#### 当前状态
- **状态**: ❌ 未安装
- **推荐操作**: 安装 `@vercel/analytics` 包以获取性能指标

#### 安装步骤

```bash
npm install @vercel/analytics
```

在 `app/layout.tsx` 中添加：

```tsx
import { Analytics } from '@vercel/analytics/react';

// 在 body 中添加 Analytics 组件
<body>
  {children}
  <Analytics />
</body>
```

#### Vercel Analytics 提供的数据

| 指标 | 说明 |
|-----|------|
| Web Vitals | LCP, FID, CLS, TTFB, FCP |
| 访问量 | 页面浏览量、独立访客 |
| 来源 | 流量来源分析 |
| 地理位置 | 访客地域分布 |

---

## 📋 事件追踪清单

### 页面浏览事件
- [x] 首页 (`/`)
- [x] 关于我们 (`/about`)
- [x] 产品页 (`/products`)
- [x] 案例页 (`/cases`)
- [x] 联系页 (`/contact`)

### 转化事件（待配置）
- [ ] 咨询按钮点击
- [ ] 表单提交
- [ ] 电话拨打
- [ ] 微信扫码
- [ ] 产品详情页查看

---

## 📈 监控指标说明

### Google Analytics 4 核心指标

| 指标 | 说明 | 目标值 |
|-----|------|-------|
| 活跃用户 | 选定时间段内的活跃用户 | 月活 > 1000 |
| 平均参与时长 | 用户平均停留时间 | > 2分钟 |
| 跳出率 | 单页访问后离开的比例 | < 60% |
| 转化率 | 完成目标行为的用户比例 | > 3% |

### Web Vitals 性能指标

| 指标 | 说明 | 良好 | 需改进 | 差 |
|-----|------|-----|-------|-----|
| LCP | 最大内容绘制 | ≤2.5s | ≤4s | >4s |
| FID | 首次输入延迟 | ≤100ms | ≤300ms | >300ms |
| CLS | 累积布局偏移 | ≤0.1 | ≤0.25 | >0.25 |
| TTFB | 首字节时间 | ≤800ms | ≤1800ms | >1800ms |
| FCP | 首次内容绘制 | ≤1.8s | ≤3s | >3s |

---

## 🔧 配置修改记录

### 2026-03-15
- ✅ 在 `app/layout.tsx` 中添加 Google Analytics 4 基础代码
- ✅ 配置 `afterInteractive` 加载策略
- ⏳ 等待替换实际 GA Tracking ID
- ⏳ 配置转化事件追踪
- ⏳ 安装 Vercel Analytics

---

## 📚 相关链接

- [Google Analytics 控制台](https://analytics.google.com/)
- [Vercel Analytics 文档](https://vercel.com/docs/analytics)
- [GA4 事件参考](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)

---

## 📝 后续行动项

1. **替换 GA Tracking ID**
   - 在 Google Analytics 创建新属性
   - 替换 `G-XXXXXXXXXX` 为实际 Tracking ID
   - 验证数据是否正常接收

2. **配置转化事件**
   - 在 FloatContact 组件添加咨询点击追踪
   - 在表单组件添加提交追踪
   - 在 GA4 中标记关键事件为转化

3. **安装 Vercel Analytics**
   - 运行 `npm install @vercel/analytics`
   - 在 layout.tsx 导入并添加 Analytics 组件
   - 在 Vercel Dashboard 查看数据

4. **设置监控告警**
   - 在 GA4 中配置异常流量告警
   - 在 Vercel 中配置性能下降告警

5. **定期检查**
   - 每周查看流量报告
   - 每月检查转化漏斗
   - 每季度评估事件追踪完整性
