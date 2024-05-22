const styles = /*html*/`
    <link
    rel="stylesheet"
    href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
    />
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

        .sidebar__car  {
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: var(--color-text);
            padding: 0.5em;
            border-radius: 5px;
            color: var(--color-two);
            cursor: pointer;
        }

        .sidebar__car:hover {
            background-color: #52575dcb;
        }

        .sidebar__car div {
            display: flex;
            gap: 1rem;
        }

        #counter {
            background-color: var(--color-one);
            padding: 0.3em;
            border-radius: 50%;
            width: 28px;
            height:28px;
            display: flex;
            justify-content: center;
            align-item: center
        }

    </style>
`

export class CarButton extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML = styles
        this.cantidad = 0
    }

    setCantidad(newCantidad) {
        this.cantidad = newCantidad
    }

    render(value) {
        this.shadowRoot.innerHTML += /*html */`
            <div class="sidebar__car" >
                <div id="car" >
                    <i class="bx bx-cart-alt"></i>
                    <p>Car</p>
                </div>
                <span id="counter">${value}</span>
            </div>
        `
    }
    connectedCallback(){
        this.render(this.cantidad)
    }

    static get observedAttributes(){
        return ['cantidad']
    }

    attributeChangedCallback(name, old, now) {
        this.render(now)
    }
}

customElements.define('car-button', CarButton)