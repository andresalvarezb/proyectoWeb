import { DB } from "../../data/db.js"
import { cardProduct } from "./card.js"

const data = [...DB.abrigo]

let content = data.map((e) => {
    return cardProduct(e.imagen, e.nombre, e.precio)
})

const abrigosContent =  content.join('')

export {abrigosContent}