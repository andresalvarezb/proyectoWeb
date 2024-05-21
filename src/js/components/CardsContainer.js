import { CardProduct } from "./CardProduct.js";

const styles = /*html */ `
    <style>
        .main__cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-flow: row;
            height: calc(100vh - 140px);
            overflow-y: scroll;
            gap: 1.5rem;
            background-color: red;
        }
    </style>
`;
export class CardsContainer extends HTMLElement {
    constructor(products) {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = styles
        this.products = products;
    }

    connectedCallback() {
        this.shadowRoot.innerHTML += /*html */ `
            <div class="main__cards-container" id="container-cards">
                ${this.products.forEach(product => `<card-product products=${product}></card-product>`)}
            </div>
        `;
    }
}
customElements.define("card-product", CardProduct);
customElements.define("cards-container", CardsContainer);