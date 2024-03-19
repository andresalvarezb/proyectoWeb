const menu = document.getElementById('menu'),
    menuList = document.getElementById('menu-list'),
    menuItems = document.getElementsByClassName('header_nav-item');

menu.addEventListener('click', () => {
    menuList.classList.toggle('visible')
})

const items = [...menuItems]
items.forEach(item => {
    item.addEventListener('click', () => {
        menuList.classList.toggle('visible')
    })
});