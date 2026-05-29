// Navbar Scroll

window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if (this.window.scrollY > 20){
        navbar.classList.add('scrolled')
    }
    else {
        navbar.classList.remove('scrolled')
    }
})

// Scroll Up

document.querySelector('#to-top').addEventListener('click',()=>{

    let TopInterval = setInterval(()=> {
        
        let ArrowTop = document.body.scrollTop > 0 ? document.body : document.documentElement;

        if(ArrowTop.scrollTop > 0) {
            ArrowTop.scrollTop = ArrowTop.scrollTop - 50;
        }
        if(ArrowTop.scrollTop < 1) {
            clearInterval(TopInterval)
        }
    },10)
}, false)

function showscroll(){
    let TopButton = document.getElementById('to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        TopButton.classList.add('show')
    }
    else {
        TopButton.classList.remove('show')
    }
}

window.onscroll = () =>{
    showscroll();
}

// Navbar Toggle

const menuBtn = document.getElementById('menu_btn')
const navLink = document.getElementById('nav-link')
const menuIcon = document.querySelector('i')

menuBtn.addEventListener('click', (e)=>{
    navLink.classList.toggle('open')

    const isOpen = navLink.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})