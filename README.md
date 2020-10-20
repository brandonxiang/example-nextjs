# 基于next.js的ssr，csr，ssg

最新版本的nextjs可以同时支持ssr，csr，ssg这三种模式。

- index.js (ssr模式)
- index_csr.js (csr模式)
- index_ssg.js (ssg模式)

### ssr模式

ssr的部署采用以下命令，访问链接http://localhost:3000/?_limits=6

url参数会传递到页面中

```
npm run build:ssr
npm run start
```

### csr模式

csr的部署采用以下命令，访问链接http://localhost:3000/index_csr?_limits=6

url参数会传递到页面中

```
npm run build:csr
```

### ssg模式

ssg的部署采用以下命令，访问链接http://localhost:3000/index_ssg

```
LIMTS=15 npm run build:ssg
```

### 开发模式

同时执行ssr模式，csr模式，ssg模式

```
LIMITS=15 npm run dev
```
