import { html, css, LitElement } from "lit";

/* body-long-01 */

export class BodyLong01 extends LitElement {
  static styles = css`
    p {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      letter-spacing: 0.16px;

      margin: 0px;
    }
  `;

  render() {
    return html` <p><slot></slot></p> `;
  }
}

window.customElements.define("body-long-01", BodyLong01);

/* body-long-02 */

export class BodyLong02 extends LitElement {
  static styles = css`
    p {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: clamp(14px, 3vw, 24px);
      font-weight: 400;
      letter-spacing: 0px;

      margin: 0px;
    }
  `;

  render() {
    return html` <p><slot></slot></p> `;
  }
}

window.customElements.define("body-long-02", BodyLong02);
