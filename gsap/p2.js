let menu=document.querySelector('.nav i');
let close=document.querySelector('.sec i')
let tl=gsap.timeline()
tl.to('.sec',{
    right:0,
    duration:0.4
})
tl.from('.sec div',{
    opacity:0,
    x:100,
    stagger:0.3,
    duration:0.5
})
tl.from('.sec i',{
    opacity:0,
    duration:0.3
})
tl.pause()
menu.addEventListener('click',function(){
    tl.play()
})
close.addEventListener('click',function(){
    tl.reverse()
})