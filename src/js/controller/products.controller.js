import { getAllCarProducts, getAllProducts } from "../data";
import { getAllAbrigos } from "../data/abrigo.model";
import { getAllCamisetas } from "../data/camiseta.model";
import { getAllPantalones } from "../data/pantalon.model";
export class Products {
    async getAll() {
        return await getAllProducts();
    }

    async getAbrigos() {
        return await getAllAbrigos();
    }

    async getCamisetas() {
        return await getAllCamisetas();
    }

    async getPantalones() {
        return await getAllPantalones();
    }

    async getCarProduct() {
        const productosUnicos = [];

        const data = await getAllCarProducts();

        for (const i in data) {
            let encontrado = false;
            for (let j in productosUnicos) {
                if (data[i].id == productosUnicos[j].id) {
                    productosUnicos[j]["cantidad"] += 1;
                    productosUnicos[j]["total"] = productosUnicos[j]["cantidad"] * productosUnicos[j]["precio"];
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                data[i]["cantidad"] = 1;
                data[i]["total"] = data[i]["cantidad"] * data[i]["precio"];
                productosUnicos.push(data[i]);
            }
        }
        return productosUnicos;
    }
}