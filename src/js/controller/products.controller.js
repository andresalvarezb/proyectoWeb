import { getAllCarProducts, getAllProducts } from "../data";
import { getAllAbrigos } from "../data/abrigo.model";
import { getAllCamisetas } from "../data/camiseta.model";
import { getAllPantalones } from "../data/pantalon.model";
export class Products {

    async getAll() {
        return await getAllProducts()
    }

    async getAbrigos(){
        return await getAllAbrigos()
    }

    async getCamisetas(){
        return await getAllCamisetas()
    }

    async getPantalones(){
        return await getAllPantalones()
    }

    async getCarProduct(){
        return await getAllCarProducts()
    }
}
