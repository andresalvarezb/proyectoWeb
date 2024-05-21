import { getAllProducts } from "../data";

export class Products {

    async getAll() {
        return await getAllProducts()
    }
}
