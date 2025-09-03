let initialPath="M 10 80 Q 100 10 300 120";
let finalPath="M 10 80 Q 100 10 300 120";
let str=document.querySelector('.str');
str.addEventListener('mousemove',function(dets){
    path=`M 10 80 Q 100 ${dets.y} 300 120`
    gsap.to('svg path',{
        attr:{d:path},
        duration:0.3,
        ease:'power2.out'
    })
})
str.addEventListener('mouseleave',function(){
    gsap.to('svg path',{
        attr:{d:finalPath},
        duration:1.2,
        ease:'elastic.out(1,0.2)'
    })
})
