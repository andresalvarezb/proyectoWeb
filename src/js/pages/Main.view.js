import { CardsContainer } from "../components/CardsContainer.js"

export async function showProducts(products) {
    // console.log(await products);
    const main = document.getElementById('main')
    const container = document.querySelector('cards-container')
    const carContainer = document.querySelector('car-container')
    if(container) {
        main.removeChild(container)
    }
    if(carContainer)(
        main.removeChild(carContainer)
    )


    const cardsContainer = new CardsContainer()
    cardsContainer.setProducts(await products)
    main.insertAdjacentElement('beforeend', cardsContainer)
}
