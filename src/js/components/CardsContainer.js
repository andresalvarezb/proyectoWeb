import { LitElement, css, html} from "lit";

export class CardsContainer extends LitElement {
    static properties = {
        name: {
            typeof: String,
            require: true
        }
    }

    constructor() {
        super();
        this.name = ''
    }

    static styles = css`
        .main__cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-flow: row;
            height: calc(100vh - 140px);
            overflow-y: scroll;
            gap: 1.5rem;
            background-color: red;
        }
    `;
    
    render() {
        return html`
            <div class="main__cards-container" id="container-cards">
                <slot name="${this.name}"></slot>
                <h1>hola</h1>
            </div>
        `;
    }
}

// customElements.define('cards-container', CardsContainer)