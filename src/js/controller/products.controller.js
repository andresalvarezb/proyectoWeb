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
        const productosUnicos = []
        let productEncontrado

        const data = await getAllCarProducts()
        let cantidad = 1

        data.forEach(product => {
            if(productosUnicos.includes(product)){
                productEncontrado = productosUnicos.find(el => el.id == product.id)
                productEncontrado['cantidad'] += cantidad
                productEncontrado['total'] = productEncontrado['cantidad'] * productEncontrado['precio']
            }else {
                productEncontrado['cantidad'] = cantidad
                productEncontrado['total'] = productEncontrado['cantidad'] * productEncontrado['precio']
            }
        });
        
        console.log(productosUnicos);
        return productosUnicos
    }
}

// const productoEncontrado = this. carProducts.find(el => JSON.stringify(el) == JSON.stringify(product))
        
//         let cantidad = 1
//         if (productoEncontrado) {
//             productoEncontrado['cantidad'] += cantidad
//             productoEncontrado['total'] = productoEncontrado['cantidad'] * productoEncontrado['precio'] 
//         } else {
//             productoEncontrado['cantidad'] = cantidad
//             productoEncontrado['total'] = productoEncontrado['cantidad'] * productoEncontrado['precio']
//         }