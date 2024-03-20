import { DB } from "../data/db.js";
import { abrigosContent } from "./components/abrigos.js";
import { camisetasContent } from "./components/camisetas.js";
import { cardProduct } from "./components/card.js";
import { pantalonesContent } from "./components/pantalones.js";

const containerCards = document.getElementById('container-cards');
const navItems = document.querySelector('.sidebar__nav')
const counter = document.getElementById('counter')

const data = [...DB.abrigo, ...DB.camiseta, ...DB.pantalon]

let allProducts = data.map((e) => {
    return cardProduct(e.imagen, e.nombre, e.precio)
})

containerCards.innerHTML = allProducts.join('')

navItems.addEventListener('click', (e) => {
    const item = e.target.innerText.toLowerCase()
    
    if (item === 'todos los productos') {
        containerCards.innerHTML = allProducts.join('')
        console.log(1);
    }
    if (item === 'abrigos') {
        containerCards.innerHTML = abrigosContent
        console.log(2);
    }
    if (item === 'camisetas') {
        containerCards.innerHTML = camisetasContent
        console.log(3);
    }
    if (item === 'pantalones') {
        containerCards.innerHTML = pantalonesContent
        console.log(4);
    }
})

const cardBtn = document.querySelectorAll('.card__btn')
const cardBtns = [...cardBtn]

let num = 0
console.log(cardBtns);
cardBtns.forEach((e) => {
    console.log(e);
    e.addEventListener('click', () => {
        console.log('hi');
        num += 1
        counter.textContent = num
    })
})

