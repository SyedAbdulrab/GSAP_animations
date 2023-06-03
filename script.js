// gsap.from('.header',{duration:1,y:'-100%',ease:'bounce'})

// gsap.from('.link',{duration:1,opacity:0,delay:1,stagger:.5})

// gsap.from('.left',{duration:1,x:'100vh',delay:1.3,ease:'smooth'})
// gsap.from('.right',{duration:1,x:'-100vh',delay:1.5,ease:'power2.in'})

// gsap.from('.footer',{duration:1,y:'120%',delay:2.5,ease:'elastic'})

// gsap.fromTo('.button',{opacity:0,rotation:720,duration:1},{
//     duration:1,delay:3.5,opacity:1,rotation:0
// })



const timeline = gsap.timeline({defaults:{duration:1}})
timeline.from('.header',{y:'-100%',ease:'bounce'})
 .from('.link',{opacity:0,stagger:.5})
.from('.left',{x:'100vh',ease:'smooth'},1)
.from('.right',{x:'-100vh',ease:'power2.in'},'<.5')
.from('.footer',{duration:1,y:'120%',ease:'elastic'})
.fromTo('.button',{opacity:0,rotation:720},{
    opacity:1,rotation:0
})

const button = document.querySelector('.button')

button.addEventListener('click',()=>{
    timeline.timeScale(3)
    timeline.reverse()
})