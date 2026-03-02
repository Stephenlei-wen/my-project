# 简单 React 网站（Vite + JS）

这是一个使用 React + Vite 搭建的超简单单页网站示例，已经为你创建在：

`/Users/wen/Desktop/my_project`

构建后会生成 `dist` 目录，你只需要把 `dist` 上传到服务器并用 Nginx/Apache 等指向该目录即可对外访问。

## 一、安装依赖

在项目根目录执行：

```bash
cd /Users/wen/Desktop/my_project
npm install
```

## 二、本地开发预览（可选）

```bash
npm run dev
```

默认会在 `http://localhost:5173` 打开，修改 `src/App.jsx` 即可实时看到效果。

## 三、打包构建

```bash
npm run build
```

执行完成后，会在项目根目录生成 `dist` 文件夹，这就是要上传到服务器的静态文件。

你可以使用任意静态服务器（Nginx、Apache、Caddy、Node 静态服务等）把网站根目录指向 `dist`。

### Nginx 简单示例（仅供参考）

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/dist;   # 改成你服务器上的 dist 路径
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

重载 Nginx 配置后，即可通过 `http://your-domain.com` 访问你的网站。

