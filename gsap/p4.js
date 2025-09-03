function marquee(){
 window.addEventListener('wheel',function(dets){
    if(dets.deltaY>0){
        gsap.to('.maq',{
            transform:'translateX(-200%)',
            duration:3,
            ease:'none',
            repeat:-1
        })
        gsap.to('.maq img',{
            rotate:180
        })
    }else{
        gsap.to('.maq',{
            transform:'translateX(0%)',
            repeat:-1,
            duration:3,
            ease:'none'
        })
        gsap.to('.maq img',{
            rotate:0
        })
    }
})
}
marquee();