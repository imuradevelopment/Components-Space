if (!customElements.get('my-button')) {
  class MyButton extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      const button = document.createElement('button');

      // Get the display attribute
      const display = this.getAttribute('display') || 'inline-block';

      // Apply styles to the button
      const style = document.createElement('style');
      style.textContent = `
        button {
          background-color: ${this.getAttribute('color') || '#007bff'};
          padding: ${this.getAttribute('size') === 'small' ? '5px 10px' : this.getAttribute('size') === 'medium' ? '10px 20px' : '15px 30px'};
          margin: 5px;
          border: none;
          border-radius: 4px;
          color: white;
          font-size: ${this.getAttribute('size') === 'small' ? '12px' : this.getAttribute('size') === 'medium' ? '14px' : '16px'};
          cursor: pointer;
          display: ${display};
          box-sizing: border-box;
        }
      `;
      shadow.appendChild(style);
      button.textContent = this.getAttribute('label');
      shadow.appendChild(button);
    }
  }

  customElements.define('my-button', MyButton);
}
