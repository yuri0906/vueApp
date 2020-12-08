package main

import(
  "github.com/gin-gonic/gin"
)


//一旦ここですべての処理させてみる

func greetings() int{
  object := map[string]string{"hoge": "ホゲホゲほーげ", "fuga": "フガフガふーが"}
  return len(object)
}


//実行コマンド go run main.go

func main() {
  //API結果呼び出し処理
  router := gin.Default()
    // ルーター設定
    // ブラウザで「/」 にアクセスしたら「Hello Gin!」と表示される設定です
    router.GET("/", func(c *gin.Context) { //第二引数をメソッドに
        c.JSON(200,gin.H{
          "message": greetings(),
      })
    })
    router.Run(":3000") 
}

/*
app.post('/', async(req, res) => {
  const ranking = await convertToRankingdata(req.body.text)
    .then(result => {
      return result;
    })
    .catch(err =>{
      return err;
    })
  res.send(ranking);
})
*/