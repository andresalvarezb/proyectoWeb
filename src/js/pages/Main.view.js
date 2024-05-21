import { CardsContainer } from "../components/CardsContainer"

export async function showProducts(products) {
    console.log(products);
    const main = document.getElementById('main')
    const container = document.querySelector('cards-container')
    if(container) {
        main.removeChild(container)
    }

    const cardsContainer = new CardsContainer()
    cardsContainer.setProducts(await products)
    main.insertAdjacentElement('beforeend', cardsContainer)
}