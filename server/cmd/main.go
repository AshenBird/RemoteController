package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-vgo/robotgo"
	"github.com/gorilla/websocket"
)

func test() {
	robotgo.MoveMouse(50, 50)
}

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     checkOrigin,
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
	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
