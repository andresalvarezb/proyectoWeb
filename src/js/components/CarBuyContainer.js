const styles = /*html */ `
<link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
    />
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
        .main__cards-container--car {
            display: initial;

        }

        .product {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-inline: 2rem;
            margin-bottom: 2rem;
        }

        .product__img {
            height: 150px;
        width: 150px;
        }

        .product__img img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
        }


        .product > div{
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .product > div:last-child{
            text-align: center;
        }


        .product h6 {
            font-size: 1.2rem;
            text-transform: capitalize;
            margin-bottom: 1rem;
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
        <div class="main__cards-container--car" id="container-cards">
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
