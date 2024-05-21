const URL = 'http://localhost:3000/camiseta'
export async function getAllCamisetas() {
    const data = await fetch(URL)
    return data.json()
}