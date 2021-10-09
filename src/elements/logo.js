import { html, css, LitElement } from "lit";

export class LogoElement extends LitElement {
  static styles = css`
    svg {
      width: 100%;
      height: 20px;
    }

    /* lg */
    @media (min-width: 1024px) {
      svg {
        height: 40px;
      }
    }
  `;

  render() {
    return html`
      <div>
        <svg
          width="144"
          height="40"
          viewBox="0 0 144 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73.5001 23.6214L73.5 40.0002L70.5 40.0002L70.5001 23.6212L59.0607 35.0607L56.9393 32.9393L68.3786 21.5001L52 21.5L52 18.5L68.3788 18.5001L56.9393 7.06067L59.0607 4.93935L70.5001 16.3788L70.5002 0L73.5002 1.67369e-05L73.5001 16.3786L84.9393 4.93935L87.0607 7.06067L75.6212 18.5001L92.0002 18.5002L92.0002 21.5002L75.6215 21.5001L87.0607 32.9393L84.9393 35.0607L73.5001 23.6214Z"
            fill="black"
          />
          <path
            d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.95431 8.9543 8.36845e-06 20 8.36845e-06C31.0457 8.36845e-06 40 8.95431 40 20Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M104 8.36845e-06H144V40H104V8.36845e-06ZM142 20C142 29.9411 133.941 38 124 38C114.059 38 106 29.9411 106 20C106 10.0589 114.059 2.00001 124 2.00001C133.941 2.00001 142 10.0589 142 20Z"
            fill="black"
          />
        </svg>
      </div>
    `;
  }
}

window.customElements.define("logo-element", LogoElement);
