import {DB}  from "../data/db.js";
import { cardProduct } from "./components/card.js";


const MAIN = document.getElementById('main');

const titleMain = document.createElement('h1');
const contentMain = document.createElement('div');

MAIN.insertAdjacentElement('afterbegin', titleMain);
titleMain.insertAdjacentElement('afterend', contentMain);

// add clases
titleMain.setAttribute('class', 'main__title');
contentMain.setAttribute('class', 'main__cards-container');

// add content
titleMain.textContent = 'Todos los productos';

contentMain.innerHTML += DB.abrigo.foreach((e) => {
    cardProduct(e.imagen, e.nombre, e.precio)
})

// const content = DB.abrigo.map((e) => {
//     return cardProduct(e.imagen, e.nombre, e.precio)
// })
// console.log(content);
// contentMain.innerHTML += ...content