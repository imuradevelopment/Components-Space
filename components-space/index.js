// Reactのエントリーポイント
import './react/index';

// Vueのエントリーポイント
import { createApp } from 'vue';
import VueApp from './vue/App.vue';

// Web Componentsのエントリーポイント
import './web-components/index.js';

// Vueのレンダリング
const vueRoot = document.getElementById('app');
if (vueRoot) {
  createApp(VueApp).mount(vueRoot);
}
