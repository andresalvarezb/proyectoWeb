import { Products } from "./controller/products.controller.js";
import { showBuyProducts } from "./pages/Car.view.js";
import { showProducts } from "./pages/Main.view.js";

// Etiquetas
const navBtns = document.getElementsByClassName("nav__btn");
const carBtn = document.querySelector('car-button')
const logo = document.querySelector('.sidebar__title')

// CONSTANTES
const products = new Products();

window.addEventListener("load", async (e) => {
    showProducts(products.getAll());
});

logo.addEventListener("click", async (e) => {
    showProducts(products.getAll());
});

Array.from(navBtns).forEach((navBtn) => {
    navBtn.addEventListener("click", (e) => {
        if(e.target.textContent == 'Todos los productos') showProducts(products.getAll())
        if(e.target.textContent == 'Abrigos') showProducts(products.getAbrigos())
        if(e.target.textContent == 'Camisetas') showProducts(products.getCamisetas())
        if(e.target.textContent == 'Pantalones') showProducts(products.getPantalones())
    });
});


carBtn.addEventListener('click', async(e) => {
    showBuyProducts(products.getCarProduct());
})




// cambiar el valor de la propiedad data
// que el renderizado simepre se hace segun el valor de la data















// import { DB } from "../data/db.js";
// import { abrigosContent } from "./components/abrigos.js";
// import { camisetasContent } from "./components/camisetas.js";
// import { cardProduct } from "./components/card.js";
// import { pantalonesContent } from "./components/pantalones.js";

// const containerCards = document.getElementById('container-cards');
// const navItems = document.querySelector('.sidebar__nav')
// const counter = document.getElementById('counter')

// const data = [...DB.abrigo, ...DB.camiseta, ...DB.pantalon]

// let allProducts = data.map((e) => {
//     return cardProduct(e.imagen, e.nombre, e.precio)
// })

// containerCards.innerHTML = allProducts.join('')

// navItems.addEventListener('click', (e) => {
//     const item = e.target.innerText.toLowerCase()

// const cardBtn = document.querySelectorAll('.card__btn')
// // const car = document.getElementById('shooping-car')
// const cardBtns = [...cardBtn]

// let num = 0
// // const carProducts = []
// cardBtns.forEach((e) => {
//     e.addEventListener('click', () => {
//         num += 1
//         counter.textContent = num
//         // AGREGAR AL CARRO
//         // carProducts.push(e.parentElement.parentElement)
//         // console.log(carProducts);

//     })
//     // car.addEventListener('click', (e) => {
//     //     containerCards.innerHTML = cardProduct
//     // })
// })
