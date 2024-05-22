import { CarBuysContainer } from "../components/CarBuyContainer.js"

export async function showBuyProducts(products){
    const main = document.getElementById('main')
    const container = document.querySelector('cards-container')
    const carContainer = document.querySelector('car-container')
    if(container) {
        main.removeChild(container)
    }
    if(carContainer)(
        main.removeChild(container)
    )

    const carBuyContainer = new CarBuysContainer()
    carBuyContainer.setProducts(await products)
    main.insertAdjacentElement('beforeend', carBuyContainer)
}