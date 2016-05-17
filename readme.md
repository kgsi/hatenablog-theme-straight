##hatenablog-theme-straight
[Straight - テーマ ストア - はてなブログ](http://blog.hatena.ne.jp/-/store/theme/6653812171396210945)


##開発時の注意
  * gulp.jsを使用してlessのコンパイル,監視を行っている。コマンドはdefaultのみ。
  * Theme(less格納フォルダ)に合わせてgulp.srcとgulp.destのパス書き換えが必要。

##gulp.js初期構築手順メモ
    sudo npm init//package.jsonの作成
    sudo npm install gulp --save-dev//gulp install
    sudo npm install gulp-less --save-dev//lessのコンパイル
    sudo npm install browser-sync --save-dev//browser-sync
    sudo npm install gulp-plumber --save-dev//gulp-plumber エラーハンドリング用
