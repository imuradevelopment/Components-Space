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
