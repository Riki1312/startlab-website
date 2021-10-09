import { html, css, LitElement } from "lit";

export class GridElement extends LitElement {
  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 500px));
      grid-auto-rows: max-content;

      column-gap: 100px;
      row-gap: 40px;
    }
  `;

  render() {
    return html`
      <div class="grid">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define("grid-element", GridElement);
