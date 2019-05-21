# vue-cli_express_firebase-database

## app概要
- 簡易な運動記録appです
  - 毎日運動しているかをチェックできる
  - 運動レポートがリアルタイムで読める

## 利用技術
- front-end：`vue-cli`
- back-end：`express`（`nodejs`）
- database：`firebase realtime database`
- memo
  - frontとbackの処理は完全に分離された
  - frontとbackの間はapi（`axios`）で通信する
  - frontとdatabaseはノータッチ（全部back経由で）
  - ついでに`date-picker`と`moment`のライブラリを使ってみた

## screen shot
- homepage
<img width="353" alt="屏幕快照 2019-05-22 上午2 31 59" src="https://user-images.githubusercontent.com/37993440/58120462-43472d00-7c40-11e9-96b8-e70c44121ba0.png">

- date picker
<img width="353" alt="屏幕快照 2019-05-22 上午2 32 09" src="https://user-images.githubusercontent.com/37993440/58120464-45a98700-7c40-11e9-8617-10da3ae8007b.png">

- report
<img width="354" alt="屏幕快照 2019-05-22 上午2 31 47" src="https://user-images.githubusercontent.com/37993440/58120457-404c3c80-7c40-11e9-8b7f-69e3e723cab7.png">

## 補足
- nodejs：知識が全然足りないので、frameworkを使わずに一から静的なサーバーを立ててみたい
- vue-cli：componentの間の通信がややこしいので、vuexを使ってみたい
- ↑こちら何とかできたら次はnuxt.jsにチャレンジしたい
