import { html, css, LitElement } from "lit";

export class LinkElement extends LitElement {
  static styles = css`
    a {
      color: var(--text-01);
    }

    a:hover {
      color: var(--ui-background);
      background: var(--text-01);
    }
  `;

  static properties = {
    href: { type: String },
  };

  constructor() {
    super();
    this.href = "#";
  }

  render() {
    return html`
      <a href=${this.href}>
        <slot></slot>
      </a>
    `;
  }
}

window.customElements.define("link-element", LinkElement);
