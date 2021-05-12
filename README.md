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
GameSession, Matchingを作成したのち、rails c上で
```
ActionCable.server.broadcast "matching_channel_1", { action: "respawn", enemy_no: 2,broadcasts_at: Time.zone.now.to_s, event_created_at: 3.seconds.ago.to_s  }
```
を実行する

## TODO
* eventをhookに生存時間・復帰中時間を表示する
* webページにリポジトリURLを貼る
* サンプル動画を貼る
* 音声の再生がかぶらないように直列で再生する
