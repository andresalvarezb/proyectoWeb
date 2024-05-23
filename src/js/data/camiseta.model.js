const URL = 'http://172.16.101.146:5468/camiseta'
export async function getAllCamisetas() {
    const data = await fetch(URL)
    return data.json()
}