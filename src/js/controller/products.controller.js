import { getAllProducts } from "../data";
import { getAllAbrigos } from "../data/abrigo.model";

export class Products {

    async getAll() {
        return await getAllProducts()
    }

    async getAbrigos(){
        return await getAllAbrigos()
    }
}
