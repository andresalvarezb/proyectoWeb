const URL = 'http://172.16.101.146:5468/abrigo'
export async function getAllAbrigos() {
    const data = await fetch(URL)
    return data.json()
}