const URL = 'http://localhost:3000/pantalon'
export async function getAllPantalones() {
    const data = await fetch(URL)
    return data.json()
}