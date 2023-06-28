/*  -----------------------------------------------------------------------------------------------
  header fixed
--------------------------------------------------------------------------------------------------- */
const header =document.querySelector('.header')
console.log(header);

document.addEventListener('scroll' , () => {
    if(document.documentElement.scrollTop > 0) {
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
    navList.classList.toggle('noScroll')
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



/*  -----------------------------------------------------------------------------------------------
  re-Captcha
--------------------------------------------------------------------------------------------------- */






/*  -----------------------------------------------------------------------------------------------
  carousel loghi
--------------------------------------------------------------------------------------------------- */

/*  -----------------------------------------------------------------------------------------------
 COVER-CAROUSEL
--------------------------------------------------------------------------------------------------- */
const coverCarousel=document.querySelector('.carousel')
new Glide(coverCarousel, {
type:"carousel",
 gap:0,
startAt:1,
 perView:5,
breakpoints: {
1300: {
perView: 4
},
960: {
perView: 3
},
700: {
  perView: 2
  },
  430: {
    perView: 1
    },
},

autoplay:200,
 hoverpause:true,
 animationDuration:1000
}).mount()




/*  -----------------------------------------------------------------------------------------------
  logo on scroll
--------------------------------------------------------------------------------------------------- */

const logoBtn = document.querySelector('.whatsapp-w')

document.addEventListener('scroll' , () => {
  if(document.documentElement.scrollTop > 30) {
      logoBtn.classList.add('--show')
  } else {
      logoBtn.classList.remove('--show')
  }
})




/*  -----------------------------------------------------------------------------------------------
  touch a descrizione su cellulare
--------------------------------------------------------------------------------------------------- */
const portfolioWrapper =document.querySelector('section.portfolio')
const portfolios= document.querySelectorAll('.portfolio .container .img-cont')
const descrizione= document.querySelector('.description__azienda')
var activeDescription = document.querySelector('.description__azienda.--show')

const descriptionActive =  () => {
  console.log('TOUCH');
}

const descriptionReset = () => {

}


portfolios.forEach( portfolio => {
  var description = portfolio.children[2]
  portfolio.addEventListener('touchstart' ,() => {
    activeDescription.classList.remove('--show')
    description.classList.add('--show')
  })

  portfolio.addEventListener('mousemove',() => {
    activeDescription.classList.remove('--show')
    description.classList.add('--show')
    activeDescription=description
  })

  portfolio.addEventListener('touchend', () => {
  })
})



// document.addEventListener('scroll' , () => {
//   console.log(portfolioWrapper.getBoundingClientRect().top);
//    var distanzaPortfolio = portfolioWrapper.getBoundingClientRect().top

//    if (distanzaPortfolio > 1200 || distanzaPortfolio > -946) {
//     activeDescription.classList.remove('--show')
//     portfolios[0].children[2].classList.add('--show')

//    }else {
//     portfolios[0].children[2].classList.remove('--show')
//    }
// })



/*  -----------------------------------------------------------------------------------------------
  RESIZE EVENT FOR MENU
--------------------------------------------------------------------------------------------------- */


window.addEventListener('resize' , () => {
  if(window.innerWidth > 992) {
      navList.classList.remove('--active')
      btnMenu.classList.remove('--active')
  }
})