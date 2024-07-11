// Reactのエントリーポイント
import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactApp from './react/App';

// Vueのエントリーポイント
import { createApp } from 'vue';
import VueApp from './vue/App.vue';

// Web Componentsのエントリーポイント
import './web-components/index.js';

// Reactのレンダリング
const reactRoot = document.getElementById('react-app');
if (reactRoot) {
  const root = ReactDOM.createRoot(reactRoot);
  root.render(<ReactApp />);
}

// Vueのレンダリング
const vueRoot = document.getElementById('vue-app');
if (vueRoot) {
  createApp(VueApp).mount(vueRoot);
}
