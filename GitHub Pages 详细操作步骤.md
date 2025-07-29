# GitHub Pages 详细操作步骤（图文版）

## 📋 准备工作

### 需要准备的文件
确保您有以下文件准备上传：
```
网站文件/
├── index.html          # 主页面
├── mobile.html         # 移动端页面
├── styles.css          # 样式文件
├── script.js           # 脚本文件
├── config.js           # 配置文件
├── jx.jpg              # 图片文件
├── images/             # 图片文件夹
│   ├── bg1.jpg
│   ├── bg2.jpg
│   ├── logo.png
│   └── ... (其他图片)
├── *.pdf              # PDF文档
└── 其他HTML文件
```

## 🎯 第一步：注册GitHub账号

### 1.1 访问GitHub
- 打开浏览器，访问：https://github.com
- 点击右上角的 "Sign up" 按钮

### 1.2 填写注册信息
```
Username: zmr666 (或您喜欢的用户名)
Email: 您的QQ邮箱
Password: 设置一个强密码（包含字母、数字、符号）
```

### 1.3 验证邮箱
- 检查您的QQ邮箱
- 找到GitHub发送的验证邮件
- 点击验证链接

## 🏗️ 第二步：创建仓库

### 2.1 创建新仓库
- 登录GitHub后，点击右上角的 "+" 号
- 选择 "New repository"

### 2.2 填写仓库信息
```
Repository name: zmr666-website
Description: 青径研学设计能力培养平台
Visibility: Public (选择公开)
✅ Add a README file (勾选)
```

### 2.3 创建仓库
- 点击 "Create repository" 按钮

## 📤 第三步：上传网站文件

### 3.1 进入仓库
- 创建完成后，您会看到仓库页面
- 点击 "uploading an existing file" 链接

### 3.2 上传文件
- 将您的网站文件拖拽到上传区域
- 或者点击 "choose your files" 选择文件

### 3.3 选择要上传的文件
```
选择以下所有文件：
✅ index.html
✅ mobile.html
✅ styles.css
✅ script.js
✅ config.js
✅ jx.jpg
✅ images/ (整个文件夹)
✅ *.pdf (所有PDF文件)
✅ 其他HTML文件
```

### 3.4 提交上传
```
Commit changes:
- 在下方文本框输入：Initial website upload
- 点击 "Commit changes" 按钮
```

## ⚙️ 第四步：启用GitHub Pages

### 4.1 进入设置
- 在仓库页面，点击 "Settings" 标签

### 4.2 找到Pages设置
- 左侧菜单滚动找到 "Pages"
- 点击进入

### 4.3 配置Pages
```
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

### 4.4 保存设置
- 点击 "Save" 按钮

### 4.5 等待部署
- 系统会显示 "Your site is being built"
- 等待1-2分钟，状态变为 "Your site is live at..."

## 🌐 第五步：访问您的网站

### 5.1 获取网站地址
- 部署完成后，您会看到：
- `Your site is live at https://您的用户名.github.io/zmr666-website`

### 5.2 测试网站功能
```
测试以下功能：
✅ 页面正常显示
✅ 导航菜单正常
✅ 搜索功能正常
✅ 联系表单发送
✅ 注册表单发送
✅ 移动端显示
✅ 所有链接正常
✅ PDF文件下载
```

## 🔧 第六步：自定义域名（可选）

### 6.1 购买域名
- 在阿里云、腾讯云等平台购买域名
- 如：zmr666.com

### 6.2 配置DNS
- 在域名管理平台添加CNAME记录
- 指向：您的用户名.github.io

### 6.3 在GitHub设置域名
- 回到GitHub Pages设置
- 在 "Custom domain" 输入您的域名
- 点击 "Save"

## 📱 第七步：移动端测试

### 7.1 手机测试
- 用手机浏览器访问您的网站
- 测试所有功能

### 7.2 平板测试
- 用平板电脑测试
- 检查响应式设计

## 🎉 完成！

您的网站现在已经成功上线！
- 网址：https://您的用户名.github.io/zmr666-website
- 可以分享给客户和合作伙伴
- 开始接收咨询和注册

## 🚨 常见问题解决

### 问题1：上传文件失败
**解决方案：**
- 检查文件大小（单个文件不超过100MB）
- 确保文件名不包含特殊字符
- 尝试分批上传

### 问题2：网站显示不正常
**解决方案：**
- 检查文件路径是否正确
- 确保所有文件都已上传
- 清除浏览器缓存

### 问题3：表单无法发送
**解决方案：**
- 检查EmailJS配置
- 确认网络连接正常
- 查看浏览器控制台错误信息

## 📞 技术支持

如果遇到问题：
1. 查看GitHub帮助文档
2. 检查浏览器控制台错误
3. 确认所有文件都已正确上传

祝您网站发布成功！🎊 