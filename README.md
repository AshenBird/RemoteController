# RemoteController

<!-- TOC -->

- [RemoteController](#remotecontroller)
  - [依赖](#依赖)
    - [环境依赖](#环境依赖)
    - [包依赖](#包依赖)
  - [运行](#运行)

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
username: /path/to/项目目录$ go run ./cmd/main.go
```
