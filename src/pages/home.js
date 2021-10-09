import { html, css, LitElement } from "lit";

export class HomePage extends LitElement {
  static styles = css`
    .space {
      height: 20%;
    }

    .section-a {
      --section-background-image: url("/src/assets/bg.svg");
    }

    .icons-list {
      display: none;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }

    @media (min-width: 1024px) {
      .icons-list {
        display: flex;
      }
    }
  `;

  render() {
    return html`
      <contact-element></contact-element>

      <section-element
        class="section-a"
        title="STARTLAB©2021 — Riccardo Brero"
        logo
      >
        <display-01>
          Freelance <u>DESIGNER</u> & DEVELOPER with a focus on WEBSITES,
          EXPERIENCES and INTERFACES. Based in <u>ITALY</u>, working REMOTELY.
        </display-01>

        <div class="space"></div>
      </section-element>

      <section-element title="SOME WORDS">
        <grid-element>
          <body-long-02>
            → Hello <br />
            I'm a computer science student with a passion for technology and
            design. I create applications and websites for companies and
            individuals all over the world. Focused on creating beautiful
            digital experiences through the most innovative technologies.
          </body-long-02>

          <body-long-02>
            → Education <br />
            I graduated in computer science at the G. Vallauri Institute of
            Higher Education in Fossano. I am currently continuing my studies at
            the University of Turin.
          </body-long-02>

          <body-long-02>
            → Experience <br />
            I worked as an intern at Alstom Ferroviaria and at Etinet.it in
            Savigliano.
          </body-long-02>
        </grid-element>

        <grid-element>
          <body-long-02>
            <link-element href="https://bewond.com/">Bewond.com</link-element>
            <br />
            Fantastic new startup that I founded and am working on.
          </body-long-02>

          <body-long-02>
            <link-element href="https://codeframe.org/"
              >Codeframe.org</link-element
            >
            <br />
            Innovative project currently under development.
          </body-long-02>
        </grid-element>
      </section-element>

      <section-element title="CONTACT" links>
        <display-01>
          <link-element href="mailto:hello@startlab.dev">
            hello@startlab.dev
          </link-element>
          <br />
          +39 373508XXXX — @startlab
        </display-01>

        <div class="icons-list">
          <icon-element
            icon="icon01"
            link="mailto:hello@startlab.dev"
          ></icon-element>
          <icon-element
            icon="icon02"
            link="mailto:hello@startlab.dev"
          ></icon-element>
          <icon-element
            icon="icon03"
            link="mailto:hello@startlab.dev"
          ></icon-element>
          <icon-element
            icon="icon04"
            link="mailto:hello@startlab.dev"
          ></icon-element>
        </div>
      </section-element>
    `;
  }
}

window.customElements.define("home-page", HomePage);
