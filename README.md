# Components-Space

このREADME.mdには、プロジェクトの目的、構成、セットアップ手順、使用技術、コンポーネントの詳細、デプロイ方法、ライセンス情報が含まれています。  
Components-Spaceは、React、Vue、Web Componentsを使用して、UIコンポーネントを集約し、それらを操作・説明するためのプロジェクトです。このプロジェクトは、コンポーネントのデモ、説明、コードブロックからのコードのコピーを可能にし、GitHub Pagesでホスティングされています。

## プロジェクトURL
[Components-Space](https://imuradevelopment.github.io/Components-Space/)

## プロジェクトの目的
- React、Vue、Web Componentsを使用して、共通のUIコンポーネントライブラリを作成する。
- 各コンポーネントの使い方や説明を提供し、コードブロックからコードのコピーができるようにする。
- ダークモードとライトモードの切り替え機能を提供する。
- GitHub Pagesを使用してプロジェクトをホスティングし、自動デプロイを設定する。

## プロジェクト構成
```
Components-Space/
├── components-space/
│   ├── react/
│   │   ├── components/
│   │   │   └── Button.jsx
│   │   ├── App.js
│   │   └── index.js
│   ├── vue/
│   │   ├── components/
│   │   │   └── Button.vue
│   │   ├── App.vue
│   │   └── main.js
│   ├── web-components/
│   │   ├── components/
│   │   │   └── button.js
│   │   └── index.js
│   ├── public/
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── package-lock.json
└── README.md
```

## セットアップ手順

### 1. リポジトリのクローン
```sh
git clone https://github.com/imuradevelopment/Components-Space.git
cd Components-Space
```

### 2. パッケージのインストール
```sh
npm install
```

### 3. ローカルサーバーの起動
```sh
npm start
```

### 4. ビルド
```sh
npm run build
```

### 5. デプロイ
```sh
npm run deploy
```

## 使用技術
- **React**: v18
- **Vue**: v3
- **Web Components**: Custom Elements
- **Webpack**: バンドルツール
- **Babel**: トランスパイラ
- **ESLint**: コードリントツール
- **GitHub Actions**: CI/CDツール
- **GitHub Pages**: ホスティングサービス

## コンポーネントの詳細

### Reactコンポーネント

**Button.jsx**
```javascript
import React from 'react';

const Button = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
```

**App.js**
```javascript
import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>React Component</h1>
      <Button label="Click Me" onClick={() => alert('Button clicked!')} />
    </div>
  );
};

export default App;
```

### Vueコンポーネント

**Button.vue**
```vue
<template>
  <button @click="$emit('click')">{{ label }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    label: {
      type: String,
      required: true
    }
  }
};
</script>
```

**App.vue**
```vue
<template>
  <div>
    <h1>Vue Component</h1>
    <Button label="Click Me" @click="handleClick" />
  </div>
</template>

<script>
import Button from './components/Button.vue';

export default {
  name: 'App',
  components: {
    Button
  },
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
};
</script>
```

### Web Components

**button.js**
```javascript
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 10px;
          font-size: 16px;
        }
      </style>
      <button id="button"><slot></slot></button>
    `;
    this.handleClick = this.handleClick.bind(this);
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click', this.handleClick);
  }

  handleClick() {
    alert('Button clicked!');
  }
}

if (!customElements.get('my-button')) {
  customElements.define('my-button', MyButton);
}
```

**index.js**
```javascript
import './components/button';

// 既存のMyComponentクラス
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Web Component</h1>`;
  }
}

if (!customElements.get('my-component')) {
  customElements.define('my-component', MyComponent);
}
```

## デプロイ方法

GitHub Actionsを使用して、自動デプロイを設定しています。以下は、`.github/workflows/deploy.yml`の内容です。

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## ライセンス
このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。