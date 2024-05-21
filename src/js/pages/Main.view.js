import { CardsContainer } from "../components/CardsContainer"

export async function showAllProducts(products) {
    const cardsContainer = new CardsContainer(await products.getAll())
    document.getElementById('main').insertAdjacentElement('beforeend', cardsContainer)
}