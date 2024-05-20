import { DB } from "../../data/db.js"
import { cardProduct } from "./card.js"

const data = [...DB.pantalon]

let content = data.map((e) => {
    return cardProduct(e.imagen, e.nombre, e.precio)
})

const pantalonesContent =  content.join('')

export {pantalonesContent}