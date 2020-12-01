package main

import(
  "github.com/gin-gonic/gin"
) 


func main() {
  //API結果呼び出し処理
  router := gin.Default()
    // ルーター設定
    // ブラウザで「/」 にアクセスしたら「Hello Gin!」と表示される設定です
    router.GET("/", func(c *gin.Context) {
        c.String(200, "")
    })
    router.Run(":3000") 
}