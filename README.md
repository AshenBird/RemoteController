# RemoteController

<!-- TOC -->

- [RemoteController](#remotecontroller)
  - [依赖](#依赖)
    - [环境依赖](#环境依赖)
    - [包依赖](#包依赖)
  - [运行](#运行)
    - [关于 websocket 的一些说明](#关于-websocket-的一些说明)
    - [关于已知情况的说明](#关于已知情况的说明)

<!-- /TOC -->

## 依赖

### 环境依赖

- [Golang](https://golang.org/dl/)
- Gcc [(mingw-w64)](http://mingw-w64.org/doku.php), (Linux)

### 包依赖

- robotgo: 系统 GUI 操作库
  - `import ( github.com/go-vgo/robotgo )`
  - [DOC](https://github.com/go-vgo/robotgo/blob/master/README_zh.md)
- gorilla: Websocket 支持库
  - `imort (github.com/gorilla/websocket)`
  - [DOC](https://pkg.go.dev/github.com/gorilla/websocket)

## 运行

```shell
username: /path/to/项目目录$ go run ./cmd/
```

or

```shell
npm run server
```

### 关于 websocket 的一些说明

1. 新增一个 web 页面，启动服务后，访问 `/page`页面可以看到一个聊天框。该聊天框会自动建立 ws 服务

2. 在 `/page` 中可以发送如下数据调整鼠标位置

```json
{
  "ActionType": 1, // 鼠标移动类型 1,相对移动 2,绝对移动
  "Top": 10, // 纵向移动的坐标
  "Left": 10 // 横向移动的坐标
}
```

3. 关于屏幕的坐标系的说明。以屏幕的最左上角为原点（0，0），向右为 Left 增加，向下为 Top 增加。对于 1080p 的屏幕来说，右下角为 （1920，1080）

### 关于已知情况的说明

- 如果有两个显示器，一个显示器使用原生分辨率，一个显示使用缩放。那么「获取鼠标当前坐标」「获取屏幕缩放」等方法会出问题。会出现鼠标异常漂移的问题。

- 如果两个显示器都使用原生分辨率则不会发生上述问题。
