export function cardProduct(img, name, price){
    return `<div class="card">
        <figure class="card__img">
            <img src="${img}"/>
            <figcaption class="card__content">
                <h2 class="card__product-name">${name}</h2>
                <span class="card__price">${price}</span>
                <span class="card__btn">Add</span>
            </figcaption>
        </figure>
    </div>`
}