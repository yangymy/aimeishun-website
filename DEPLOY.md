# 爱美舜品牌官网部署指南

## 🚀 快速部署步骤

### 1. Vercel 一键部署

点击以下按钮直接部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yangymy/aimeishun-website&project-name=aimeishun-website&repository-name=aimeishun-website)

或者手动步骤：

1. 访问 https://vercel.com/new
2. 导入 GitHub 仓库 `yangymy/aimeishun-website`
3. 框架选择 **Next.js**
4. 点击 **Deploy**

---

## 🌐 自定义域名配置

### 步骤 1: 在 Vercel 添加域名

1. 部署完成后，进入项目控制台
2. 点击 **Settings** → **Domains**
3. 输入域名：`www.aimeishun.cn`
4. 点击 **Add**

### 步骤 2: DNS 配置（阿里云/腾讯云）

在您的域名服务商控制台添加以下记录：

| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| CNAME | www | cname.vercel-dns.com | 默认 |

**阿里云配置步骤：**
1. 登录阿里云控制台 → 域名 → 域名列表
2. 找到 `aimeishun.cn` → 点击 **解析**
3. 点击 **添加记录**
4. 按上表填写并保存

**腾讯云配置步骤：**
1. 登录腾讯云控制台 → 域名注册 → 我的域名
2. 找到 `aimeishun.cn` → 点击 **解析**
3. 点击 **添加记录**
4. 按上表填写并保存

### 步骤 3: 等待 DNS 生效

- 通常需要 **5 分钟 - 48 小时**
- 可通过 https://www.whatsmydns.net 查询传播状态

---

## 🔧 自动部署配置（可选）

### 获取 Vercel Token

1. 访问 https://vercel.com/account/tokens
2. 点击 **Create Token**
3. 名称：`GitHub Actions Deploy`
4. 复制 Token

### 配置 GitHub Secrets

1. 访问 https://github.com/yangymy/aimeishun-website/settings/secrets/actions
2. 点击 **New repository secret**
3. 添加以下 Secrets：

| Secret Name | Value |
|-------------|-------|
| `VERCEL_TOKEN` | 上一步复制的 Token |
| `VERCEL_ORG_ID` | 从 Vercel 项目设置获取 |
| `VERCEL_PROJECT_ID` | 从 Vercel 项目设置获取 |

获取 ORG_ID 和 PROJECT_ID：
- 进入 Vercel 项目 → Settings → General
- 找到 **Project ID** 和 **Team ID** (ORG_ID)

### 自动部署触发

配置完成后，每次推送到 `main` 分支将自动部署。

---

## 📋 验证清单

- [ ] GitHub 仓库可访问: https://github.com/yangymy/aimeishun-website
- [ ] Vercel 项目部署成功
- [ ] Vercel 临时域名可访问
- [ ] 自定义域名 www.aimeishun.cn 已添加
- [ ] DNS CNAME 记录已配置
- [ ] HTTPS 证书自动配置 (Vercel 自动处理)
- [ ] www.aimeishun.cn 可正常访问

---

## 🔗 重要链接

| 资源 | 链接 |
|------|------|
| GitHub 仓库 | https://github.com/yangymy/aimeishun-website |
| Vercel 部署 | https://vercel.com/new |
| Vercel Tokens | https://vercel.com/account/tokens |
| DNS 检测 | https://www.whatsmydns.net |

---

## ⚠️ 常见问题

### 1. 部署失败
- 检查 Node.js 版本是否为 18+
- 检查 `next.config.ts` 中 `output: 'export'` 配置

### 2. 域名无法访问
- 确认 DNS 记录类型为 CNAME
- 等待 DNS 传播（最长 48 小时）
- 检查 Vercel 域名验证状态

### 3. HTTPS 证书问题
- Vercel 自动配置 HTTPS
- 确保证书状态为 **Active**
- 如未生效，尝试重新添加域名
