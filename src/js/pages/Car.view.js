import { CarBuysContainer } from "../components/CarBuyContainer.js"

export async function showBuyProducts(products){
    const main = document.getElementById('main')
    const container = document.querySelector('cards-container')
    if(container) {
        main.removeChild(container)
    }

    const carBuyContainer = new CarBuysContainer()
    carBuyContainer.setProducts(await products)
    main.insertAdjacentElement('beforeend', carBuyContainer)
}