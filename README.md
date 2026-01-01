# 株式会社偶成舎 ポートフォリオサイト

このプロジェクトは、株式会社偶成舎の公式ポートフォリオサイトのソースコードです。
React (v19) と Tailwind CSS (v4) を使用したモダンな静的サイト構成になっています。

## 🛠 技術スタック

*   **フレームワーク:** [React 19](https://react.dev/)
*   **ビルドツール:** [Vite](https://vitejs.dev/)
*   **スタイリング:** [Tailwind CSS 4](https://tailwindcss.com/)
*   **UIコンポーネント:** [shadcn/ui](https://ui.shadcn.com/) (Radix UIベース)
*   **ルーティング:** [wouter](https://github.com/molefrog/wouter) (軽量ルーター)
*   **アイコン:** [Lucide React](https://lucide.dev/)

## 📂 ディレクトリ構造

プロジェクトの主要なファイルとフォルダの役割は以下の通りです。

```
guseisya-portfolio/
├── client/                 # フロントエンドのソースコード
│   ├── public/             # 静的ファイル（画像、アイコンなど）
│   │   ├── .htaccess       # Xserver用ルーティング設定ファイル
│   │   ├── hero-bg.jpg     # トップページの背景画像
│   │   └── ...             # その他の画像ファイル
│   ├── src/                # Reactコンポーネントとロジック
│   │   ├── components/     # 再利用可能なUI部品（ボタン、カードなど）
│   │   │   ├── ui/         # shadcn/uiの基本コンポーネント
│   │   │   ├── Footer.tsx  # フッター
│   │   │   └── Navigation.tsx # ヘッダーナビゲーション
│   │   ├── pages/          # 各ページのメインコンポーネント
│   │   │   ├── Home.tsx    # トップページ
│   │   │   ├── Profile.tsx # プロフィール・代表挨拶ページ
│   │   │   └── Services.tsx # サービス紹介ページ
│   │   ├── App.tsx         # ルーティング定義（ページ遷移の設定）
│   │   ├── index.css       # グローバルスタイルとTailwind設定
│   │   └── main.tsx        # エントリーポイント
│   └── index.html          # ベースとなるHTMLファイル
├── dist/                   # ビルド後の出力先（デプロイ用ファイル）
├── package.json            # 依存パッケージとスクリプト定義
└── README.md               # 本ファイル
```

## 🚀 開発環境のセットアップ

ローカル環境（ご自身のPC）で開発を始めるための手順です。

### 前提条件
*   [Node.js](https://nodejs.org/) (v18以上推奨) がインストールされていること。
*   パッケージマネージャーとして `npm` または `pnpm` が使えること。

### 手順

1.  **リポジトリのクローン**
    ```bash
    git clone <リポジトリURL>
    cd guseisya-portfolio
    ```

2.  **依存パッケージのインストール**
    ```bash
    npm install
    # または
    pnpm install
    ```

3.  **開発サーバーの起動**
    ```bash
    npm run dev
    # または
    pnpm dev
    ```
    ブラウザで `http://localhost:5173` (または表示されたURL) にアクセスすると、サイトが表示されます。

## 📝 カスタマイズ方法

### ページの文章を変更したい
*   **トップページ:** `client/src/pages/Home.tsx` を編集
*   **プロフィール:** `client/src/pages/Profile.tsx` を編集
*   **サービス:** `client/src/pages/Services.tsx` を編集

### 画像を差し替えたい
1.  新しい画像を `client/public/` フォルダに保存します。
2.  各ページファイル（`.tsx`）内の `img` タグの `src` 属性を新しいファイル名に変更します。
    *   例: `src="/new-image.jpg"`
    *   **注意:** ブラウザのキャッシュ対策として、画像を更新する際はファイル名を変更することをお勧めします（例: `image-v2.jpg`）。

### 新しいページを追加したい
1.  `client/src/pages/` に新しいファイル（例: `NewPage.tsx`）を作成します。
2.  `client/src/App.tsx` を開き、新しいルートを追加します。
    ```tsx
    import NewPage from "@/pages/NewPage";
    
    // Switchコンポーネント内に以下を追加
    <Route path="/new-page" component={NewPage} />
    ```

## 🚢 デプロイ（本番公開）手順

Xserverなどのレンタルサーバーにアップロードする手順です。

1.  **ビルドコマンドの実行**
    ```bash
    npm run build
    # または
    pnpm build
    ```
    このコマンドを実行すると、`dist/public` フォルダ内に最適化されたファイルが生成されます。

2.  **ファイルのアップロード**
    *   `dist/public` フォルダの中身（`index.html`, `assets`フォルダ, 画像ファイル, `.htaccess` などすべて）を、サーバーの公開ディレクトリ（例: `public_html`）にアップロードしてください。

### ⚠️ 重要: .htaccess について
このサイトはSPA（シングルページアプリケーション）として動作するため、トップページ以外でリロードした際に404エラーにならないよう、サーバー側での設定が必要です。
`client/public/.htaccess` ファイルには、すべてのリクエストを `index.html` に転送する設定が記述されています。**このファイルも必ずアップロードしてください。**

## 🔧 運用・保守

*   **バージョン管理:** GitHubを使用し、変更を加えるたびにコミット・プッシュすることをお勧めします。
*   **バックアップ:** 大きな変更を行う前には、必ず現状のコードをGitにコミットするか、バックアップを取ってください。

---
© 2025 株式会社偶成舎
