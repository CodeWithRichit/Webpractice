let main=document.querySelector('.main');
let cur=document.querySelector('.cursor');
let img=document.querySelector('.image')
main.addEventListener('mousemove',function(dets){
    gsap.to(cur,{
        x:dets.x,
        y:dets.y,
        duration:0.5,
        ease:'sine.out'
    })
})
img.addEventListener('mouseenter',function(){
     cur.innerHTML='View More'
    gsap.to(cur,{
        scale:2
    })
})
img.addEventListener('mouseleave',function(){
   cur.innerHTML=''
    gsap.to(cur,{
        scale:1
    })
})