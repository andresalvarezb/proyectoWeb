import { DB } from "../../data/db.js"
import { cardProduct } from "./card.js"

const data = [...DB.camiseta]

let content = data.map((e) => {
    return cardProduct(e.imagen, e.nombre, e.precio)
})

const camisetasContent =  content.join('')

export {camisetasContent}