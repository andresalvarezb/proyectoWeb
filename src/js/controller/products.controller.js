import { DB } from "../data/db";

export class Products {
    getProducts() {
        const {abrigo, camiseta, pantalon} = DB
        return [...abrigo, ...camiseta, ...pantalon]
    }
}

// const products = new Products()
// console.log(products.getProducts());