// gsap.to('.box',{
//     x:1000,
//     duration:2,
//     delay:0.1,
//     rotate:350,
//     backgroundColor:'blue',
//     borderRadius:'50%',
//     scale:.50
// })
// gsap.from('.box1',{
//     x:1000,
//     duration:2,
//     delay:0.1,
// })
// gsap.from('h1',{
//     y:60,
//     duration:1.5,
//     opacity:0,
//     stagger:-0.5//1
// })
// gsap.to('.box',{
//     x:1270,
//     duration:2,
//     delay:0.1,
//     yoyo:true,
//     rotate:170,
//     repeat:-1
// })
let tl=gsap.timeline()
// tl.to('.box',{
//     x:1100,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })
// tl.to('.box1',{
//     x:1000,
//     duration:2,
//     scale:0.8
// })
tl.from('.navbar',{
    opacity:0,
    y:-20,
    stagger:0.7
})
tl.from('.main',{
    opacity:0,
})