import { getAllAbrigos } from "./abrigo.model";
import { getAllCamisetas } from "./camiseta.model";
import { getAllPantalones } from "./pantalon.model";

export async function getAllProducts() {
    const abrigos = await getAllAbrigos()
    const camisetas = await getAllCamisetas()
    const pantalones = await getAllPantalones()
    return [...abrigos, ...camisetas, ...pantalones]
}