import { html, css, LitElement } from "lit";

export class Heading01 extends LitElement {
  static styles = css`
    h1 {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: clamp(20px, 4vw, 40px);
      font-weight: 500;
      letter-spacing: 0px;

      margin: 0px;
    }
  `;

  render() {
    return html` <h1><slot></slot></h1> `;
  }
}

window.customElements.define("heading-01", Heading01);
