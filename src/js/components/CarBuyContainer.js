const styles = /*html */ `
    <link rel="stylesheet" href="../../css/normalize.css" />
    <style>
        :root {
            --color-one: #8CB9BD;
            --color-two: #FEFBF6;
            --color-three: #ECB159;
            --color-four: #B67352;
            --color-text: #52575D;
        }
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: var(--color-text);
        }

        body {
            background-color: var(--color-two);
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: #000;
        }
        .main__cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            grid-auto-flow: row;
            height: calc(100vh - 140px);
            overflow-y: scroll;
            gap: 1.5rem;
        }

        .card {
            max-height: 400px;
            transition: all 300ms linear;
            border-radius: 10px;
            padding: 1rem;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
        }
        .card:hover {
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        }

        .card__figure {
            margin: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .card__img {
            height: 70%;
        }
        .card__name {
            font-size: 1rem;
            margin: 0.5rem 0;
            font-weight: 500;
        }

        .card__content {
            padding-inline: 1rem;
        }

        .card__content div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card__btn {
            background-color: var(--color-one);
            padding: 0.5rem 1rem;
            color: var(--color-two);
            border-radius: 5px;
            cursor: pointer;
        }

        .card__btn:hover {
            background-color: var(--color-three);
        }
        ::-webkit-scrollbar {
            display: none;
        }
    </style>
`;

export class CarBuysContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = /*html*/ `
            ${styles}
            <h1 class="main__title">Carrito</h1>
        `;
        this.products;
    }

    setProducts(newProducts) {
        this.products = newProducts;
    }

    render(products) {
        console.log(products);
        this.shadowRoot.innerHTML += /*html */ `
        <div class="main__cards-container" id="container-cards">
            ${products
                .map((product) => {
                    return /*html */ `
                    <div class="product">
                        <div>
                            <div class="product__img">
                                <img src=${product.imagen} alt="" />
                            </div>
                            <div class="product__description">
                                <h6 class="product__name">Nombre</h6>
                                <p>${product.nombre}</p>
                            </div>
                        </div>
                        <div>
                            <div class="product__quantity">
                                <h6 class="quantity">Cantidad</h6>
                                <p>${product.cantidad}</p>
                            </div>
                            <div class="product__price">
                                <h6 class="price">Precio</h6>
                                <p>$${product.precio}</p>
                            </div>
                            <div class="product__subtotal">
                                <h6 class="subtotal">Subtotal</h6>
                                <p>$${product.total}</p>
                            </div>
                        </div>
                    </div>
                `;
                })
                .join("")}
        </div>
        `;
    }

    connectedCallback() {
        this.render(this.products);
    }

    static get observedAttributes() {
        return ["products"];
    }

    attributeChangedCallback(name, old, now) {
        this.render(now);
    }
}
customElements.define("car-container", CarBuysContainer);
