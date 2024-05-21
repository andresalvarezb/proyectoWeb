const URL = 'http://localhost:3000/carrito'
export async function getCardProducts() {
    const data = await fetch(URL)
    return data.json()
}