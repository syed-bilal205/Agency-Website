const menu = document.querySelector('.mobileNavbar')
const header =document.querySelector('.header')

menu.addEventListener('click',()=>{
    header.classList.toggle('active')
})