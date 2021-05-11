# README
## 図
```
[switch] -- [PC] -- [internet] -- [redis] -- [rails(this)] -- [browser]
```

* https://github.com/jiikko/splatoon_enemy_visualizer のフロントです

* herokuで動いています

## 必要
* rails
* redis
* MySQL

## 動作確認メモ
### websocketで受信する方法
GameSession, Matchingを作成したのち、rails c上で`ActionCable.server.broadcast "matching_channel_1", { action: "respawn", event: { enemy_no: 2 } }` を実行する

## TODO
* eventをhookに生存時間・復帰中時間を表示する
* webページにリポジトリURLを貼る
* websocketからの受信を視覚的にわかるようなコンポーネントを表示する
  * console.log的なの？
* サンプル動画を貼る
* 表示しているデータがどのくらい遅延しているかをwebで表示する
