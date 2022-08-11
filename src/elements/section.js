import { html, css, LitElement } from "lit";

export class SectionElement extends LitElement {
  static styles = css`
    .container {
      background-image: var(--section-background-image);
      background-repeat: no-repeat;
      background-position: center;

      height: calc(100vh - 20px);
      padding: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .footer {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 80px;
    }

    .line {
      background-color: var(--text-01);
      width: 100%;
      height: 2px;
    }

    /* lg */
    @media (min-width: 1024px) {
      .footer {
        flex-direction: row;
        align-items: flex-end;
      }
    }
  `;

  static properties = {
    title: { type: String },
    logo: { type: Boolean },
    links: { type: Boolean },
  };

  constructor() {
    super();
    this.title = "STARTLAB©2021";
    this.logo = false;
    this.links = false;
  }

  render() {
    return html`
      <div class="container">
        <div class="header">
          <heading-01>${this.title}</heading-01>
          ${this.logo ? html`<logo-element></logo-element>` : ``}
        </div>

        <slot></slot>

        <div>
          ${this.links
            ? html`<div class="footer">
                <body-long-02>STARTLAB©2022 — Riccardo Brero</body-long-02>
                <body-long-02>
                  <link-element href="#">IG</link-element>,&nbsp;
                  <link-element href="#">TW</link-element>,&nbsp;
                  <link-element href="#">LI</link-element>&nbsp;and&nbsp;
                  <link-element href="#">DI</link-element>
                </body-long-02>
              </div>`
            : ``}

          <div class="line"></div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("section-element", SectionElement);
