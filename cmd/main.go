package main

import (
	"github.com/gin-gonic/gin"
	"github.com/go-vgo/robotgo"
)

func test() {
	robotgo.MoveMouse(50, 50)
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
