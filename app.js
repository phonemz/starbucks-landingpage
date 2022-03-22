const burger = document.querySelector('.burger-menu')
const menu = document.querySelector('.mobile')

burger.addEventListener('click', () => {
    menu.classList.toggle('move')
    burger.classList.toggle('toggle')
})