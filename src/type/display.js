import { html, css, LitElement } from "lit";

/* display-01 */

export class Display01 extends LitElement {
  static styles = css`
    h1 {
      font-family: "Inter", sans-serif;
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 500;
      letter-spacing: 0px;

      margin: 0px;
    }
  `;

  render() {
    return html` <h1><slot></slot></h1> `;
  }
}

window.customElements.define("display-01", Display01);

/* display-02 */

export class Display02 extends LitElement {
  static styles = css`
    h1 {
      font-family: "IBM Plex Sans", sans-serif;
      font-size: 42px;
      line-height: 50px;
      font-weight: 300;
      letter-spacing: 0px;
    }

    /* md */
    @media (min-width: 768px) {
      h1 {
        font-size: 54px;
        line-height: 64px;
      }
    }
    /* lg */
    @media (min-width: 1024px) {
      h1 {
        font-size: 60px;
        line-height: 70px;
      }
    }
    /* xl */
    @media (min-width: 1280px) {
      h1 {
        font-size: 76px;
        line-height: 86px;
      }
    }
  `;

  render() {
    return html` <h1><slot></slot></h1> `;
  }
}

window.customElements.define("display-02", Display02);
