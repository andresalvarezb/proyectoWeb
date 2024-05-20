export function cardProduct(img, name, price){
    return `<div class="card">
        <figure class="card__figure">
            <div class="card__img">
                <img src="${img}"/>
            </div>
            <figcaption class="card__content">
                <h6 class="card__name">${name}</h6>
                <div>
                    <span class="card__price">$${price}</span>
                    <span class="card__btn">Add</span>
                </div>
            </figcaption>
        </figure>
    </div>`
}