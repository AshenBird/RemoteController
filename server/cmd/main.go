package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-vgo/robotgo"
	"github.com/gorilla/websocket"
)

func test() {
	robotgo.MoveMouse(50, 50)
}

//UpdateMouse 关于ws传递参数的处理
type UpdateMouse struct {
	ActionType int
	Top        int
	Left       int
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     checkOrigin,
}

func wsHandler(w http.ResponseWriter, r *http.Request) {
	var (
		wbsCon *websocket.Conn
		err    error
		data   []byte
	)
	// 完成http应答，在httpheader中放下如下参数
	if wbsCon, err = upgrader.Upgrade(w, r, nil); err != nil {
		return // 获取连接失败直接返回
	}

	for {
		// 只能发送Text, Binary 类型的数据,下划线意思是忽略这个变量.
		if _, data, err = wbsCon.ReadMessage(); err != nil {
			goto ERR // 跳转到关闭连接
		}
		if err = wbsCon.WriteMessage(websocket.TextMessage, data); err != nil {
			goto ERR // 发送消息失败，关闭连接
		}
		var updateMouse UpdateMouse
		err := json.Unmarshal(data, &updateMouse)
		if err != nil {
			fmt.Println(err)
		} else {
			handlerMouse(updateMouse)
		}
	}

ERR:
	// 关闭连接
	wbsCon.Close()
}
func handlerMouse(updateMouse UpdateMouse) {
	switch updateMouse.ActionType {
	case 1: // 相对运动
		// 关于屏幕尺寸和屏幕缩放的一些参数
		posX, posY := robotgo.GetMousePos()
		sizeX, sizeY := robotgo.GetScreenSize()
		scale := robotgo.Scale()
		fmt.Println(posX, posY, sizeX, sizeY, scale)
		robotgo.MoveMouse(posX+updateMouse.Left, posY+updateMouse.Top)
		break
	case 2: // 绝对运动
		robotgo.MoveMouse(updateMouse.Left, updateMouse.Top)
		break
	}
}

func checkOrigin(r *http.Request) bool {
	return true
}

func main() {
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.GET("/test", func(c *gin.Context) {
		test()
	})
	r.LoadHTMLFiles("cmd/index.html")
	r.GET("/page", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{})
	})
	r.GET("/ws", func(c *gin.Context) {
		wsHandler(c.Writer, c.Request)
	})
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")

}
