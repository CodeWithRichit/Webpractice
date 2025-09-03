function page1amin(){var tl=gsap.timeline()
tl.from('.navb h2,i',{
    opacity:0,
    y:-100,
    duration:0.5,
    delay:0.4
})
tl.from('.navb2 h4',{
    opacity:0,
    y:-100,
    duration:0.5,
    stagger:0.2
})
tl.from('.hd1 .htxt,.ptxt,button',{
    opacity:0,
    x:-200,
    duration:0.3,
    stagger:0.2
})
tl.from('.hd2 img',{
    opacity:0
},'-=0.5')
tl.from('.logos img',{
    opacity:0,
    stagger:0.1,
    duration:0.8
})
}
function page2anim(){
    let tl2=gsap.timeline()
tl2.from('.ltxt',{
    opacity:0,
    x:-100,
    duration:0.5,
    ease:'bounce out',
    scrollTrigger:{
        trigger: '.ltxt',
        scroller:'body',
        start: 'top 50%',
        end: 'top 1%', 
        scrub: 3,   
    }
})
tl2.from('.box',{
    opacity:0,
    duration:0.9,
    ease:'bounce out',
    scrollTrigger:{
        trigger: '.ltxt',
        scroller:'body',
        start: 'top 30%',
        end: 'top 2%',
        scrub: 3,
    }
})
tl2.from('.boc',{
    opacity:0,
    duration:1.3,
    ease:'bounce out',
    scrollTrigger:{
        trigger: '.ltxt',
        scroller:'body',
        start: 'top 2%',
        end: 'top -2%',
        scrub: 3,
    }
})
}
page1amin()
page2anim();