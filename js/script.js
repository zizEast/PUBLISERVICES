/*  -----------------------------------------------------------------------------------------------
  header fixed
--------------------------------------------------------------------------------------------------- */
const header =document.querySelector('.header')
console.log(header);

document.addEventListener('scroll' , () => {
    if(document.documentElement.scrollTop > 0) {
        console.log('ok');
        header.classList.add('--fixed')
    } else {
        header.classList.remove('--fixed')
    }
})


/*  -----------------------------------------------------------------------------------------------
  menu active
--------------------------------------------------------------------------------------------------- */

const btnMenu = document.querySelector ('.icon')
const navList = document.querySelector ('.header .nav-list')
var page = document.getElementById('html')
const aTag=document.querySelectorAll('a')


btnMenu.addEventListener ('click' , () => {
    btnMenu.classList.toggle ('--active')
    navList.classList.toggle('--active')
    page.classList.toggle('noScroll')
})



/*  -----------------------------------------------------------------------------------------------
  scroll event
--------------------------------------------------------------------------------------------------- */


function revealFunction1 () {
    window.sr = ScrollReveal({duration:700 , distance:'200px',easing:'ease-out',opacity:0})
    sr.reveal('.reveal-left', {origin:'left',reset:true})
    sr.reveal('.reveal-right', {origin:'right',reset:true})
    sr.reveal('.reveal-right-delay', {origin:'right',reset:true, delay:400})
    sr.reveal('.reveal-bottom', {origin:'bottom',reset:true, delay:400})
    sr.reveal('.reveal-top', {origin:'top',reset:true,delay:400})

    sr.reveal('.rotate', {origin:'bottom' ,rotate:{x:1000,z:1000}}) //rotazione
    sr.reveal('.spot-light', {distance:'-80px', opacity:0 ,reset:true,duration:600})  // opacità
    sr.reveal('.scale-up', {distance:'0px', scale:1})
}



window.addEventListener('load', () => {
    revealFunction1()
})

/*  -----------------------------------------------------------------------------------------------
  soluzioni btn
--------------------------------------------------------------------------------------------------- */

const solutionBtns = document.querySelectorAll ('.solution-w button')

solutionBtns.forEach(btn => {
    btn.addEventListener('click' , () => {
        btn.classList.toggle('--active')
    })
})






