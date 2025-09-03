let menu=document.querySelector('.navbar i')
let close=document.querySelector('.sec i')
var tl=gsap.timeline()
tl.to('.sec',{
    right:0,
    duration:0.5
})
tl.from('.sec .m',{
    x:100,
    duration:1,
    ease:'power1.out',
    stagger:0.2,
    opacity:0
})
tl.from('.sec i',{
    opacity:0,
    duration:0.2
})

tl.pause()

menu.addEventListener('click',function() {
    tl.play()
})
close.addEventListener('click',function(){
    tl.reverse()
})

let main=document.querySelector('.main')
let cur=document.querySelector('.cursor')
main.addEventListener('mousemove',function(dets){
    gsap.to(cur,{
        x:dets.x,
        y:dets.y,
        duration:0,
        ease:'sine.out'
    })
})
let lin = document.querySelector(".lin");
let pathElement = document.querySelector(".lin path");

lin.addEventListener("mousemove", function(dets) {
    let path = `M 10 80 Q ${dets.x} ${dets.y} 180 80`;
    gsap.to(pathElement, {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    });
});

lin.addEventListener("mouseleave", function() {
    gsap.to(pathElement, {
        attr: { d: "M 10 80 Q 95 80 180 80" },
        duration: 1.5,
        ease: "elastic.out(1,0.2)"
    });
});


