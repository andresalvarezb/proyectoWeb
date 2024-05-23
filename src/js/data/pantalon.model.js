const URL = 'http://172.16.101.146:5468/pantalon'
export async function getAllPantalones() {
    const data = await fetch(URL)
    return data.json()
}