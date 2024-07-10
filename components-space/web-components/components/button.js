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
    this.handleClick = this.handleClick.bind(this); // イベントハンドラをバインド
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
