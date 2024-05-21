const styles = /*html */ `
    <style>
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
    </style>
`

export class CardProduct extends HTMLElement {
    constructor() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = styles
    }

    render() {
        const data = this.getAttribute('products')
        console.log(data)
        this.shadowRoot.innerHTML += /*html */`
            <div class="card">
                <figure class="card__figure">
                    <div class="card__img">
                        <img src="${data.imagen}" />
                    </div>
                    <figcaption class="card__content">
                        <h6 class="card__name">${data.nombre}</h6>
                        <div>
                            <span class="card__price"
                                >$${data.precio}</span
                            >
                            <span class="card__btn">Add</span>
                        </div>
                    </figcaption>
                </figure>
            </div>
        `;
    }

    connectedCallback(){
        this.render()
    }


    // static get observedAttributes(){
    //     return ['data']
    // }

    // attributeChangedCallback(name, old, now) {
    //     if(name == )
    // }
}

// customElements.define("card-product", CardProduct);