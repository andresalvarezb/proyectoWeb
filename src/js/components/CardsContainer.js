import { Products } from '../controller/products.controller.js';
import './CardProduct.js'

import { LitElement, css, html} from "lit";

export class CardsContainer extends LitElement {
    static properties = {
        products:{
            type: Array
        }
    }

    constructor() {
        super();
        this.products = new Products().getProducts()
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
                ${this.products.map(product => `<card-product .data=${product}></card-product>`)}
            </div>
        `;
    }
}

customElements.define('cards-container', CardsContainer)