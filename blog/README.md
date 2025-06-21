This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

URL:
 [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## ディレクトリ構成

```
├──blog
    ├── src
    |    ├── app
    |    |    ├── page.js・・・ここに全てのコンポーネントを統合
    |    |    └──_components・・・コンポーネントの置き場。フォルダを作成
    |    ├── components
    |    │       └── ui
    |    │       ├── Footer・・・フッターコンポーネント
    |    │       ├── Header・・・ヘッダーコンポーネント
    |    │       ├── Heading・・・
    |    │       └──SmoothScrollButton・・・まだ未定。mobileで作るかもしれません。
    |    └──  styles
    |           ├──globals.css・・・
    |           └──variables.css・・・色やサイズ共有すべき値を定義
    └── public・・・写真、フォントなどを配置
```

## ブランチに関して
今あるブランチはmasterブランチとdevelopブランチとdevelop-2ブランチがあります。
基本的にはdevelopブランチにプルリクをお願いします。
そして振ったタスクのブランチはここから切るようにお願いします。

じゃこの2のほうは何かというと今回お二人ともにロゴを制作頂いたのでこのようにブランチを分けました。
サイトのコードは同じようにし、header・footerのロゴを入れ替えようかと思います。
一応切っただけで基本は無視して下さい。
作業は通常のdevelopで行い、最終的に完成したものをmergeさせ差別化させます。

## 出来ない部分に関して
メンターにも今回僕らがやっていることはお話して、石井さん、渡邉さん、中川さんにはお話しています。
チャットで聞いたら多分答えてくれるかと思うので聞いても大丈夫だと思います。多分！

## 制作について
今回、PC版とmobile版で担当者が違います。
PC版の人は特にレスポンシブしやすいだろうなというのを思いながら作ると後の人が楽です。
経験談です。
がんば。

後は研修の時に言われたpadding、marginの使い方を特に意識して作るといいと思いますかな。
期限を設けるのでそれを目標に作っていきましょう。
（私もmobile版のデザインはまだなので頑張ります…！）

それでは宜しくお願い致します。