import { html, css, LitElement } from "lit";

export class IconElement extends LitElement {
  static styles = css`
    div {
      position: relative;

      width: 200px;
      height: 200px;
    }

    .icon {
      position: absolute;
      left: 50px;
      top: 50px;

      width: 100px;
      height: 100px;
    }

    .icon-text {
      position: absolute;
      left: 0px;
      top: 0px;

      width: 200px;
      height: 200px;

      animation: rotating 10s linear infinite;
    }

    @keyframes rotating {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  static properties = {
    icon: { type: String },
    link: { type: String },
  };

  constructor() {
    super();
    this.icon = "icon01";
    this.link = "#";
  }

  render() {
    return html`
      <link-element href=${this.link}>
        <div>
          <img
            class="icon"
            src="https://raw.githubusercontent.com/Riki1312/startlab-website/main/src/assets/icons/${this
              .icon}.svg"
          />
          <img
            class="icon-text"
            src="https://raw.githubusercontent.com/Riki1312/startlab-website/main/src/assets/icons/${this
              .icon}_text.svg"
          />
        </div>
      </link-element>
    `;
  }
}

window.customElements.define("icon-element", IconElement);
