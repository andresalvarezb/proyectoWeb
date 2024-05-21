const URL = 'http://localhost:3000/abrigo'
export async function getAllAbrigos() {
    const data = await fetch(URL)
    return data.json()
}