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
    |    |　  ├── page.js・・・ここに全てのコンポーネントを統合
    |    |    └──_components・・・コンポーネントの置き場。フォルダを作成
    |    ├── components
    |    │ 　    └── ui
    |    │       ├── Footer・・・フッターコンポーネント
    |    │       ├── Header・・・ヘッダーコンポーネント
    |    │       ├── Heading・・・
    |    │       └──SmoothScrollButton
    |    └──  styles
    |           ├──globals.css・・・
    |           └──variables.css・・・色やサイズ共有すべき値を定義
    └── public・・・写真、フォントなどを配置
```

