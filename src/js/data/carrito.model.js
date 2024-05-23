const URL = 'http://172.16.101.146:5468/carrito'
export async function getCardProducts() {
    // const data = await fetch(URL)
    // return data.json()
    return await JSON.parse(localStorage.getItem('carProducts'))
}