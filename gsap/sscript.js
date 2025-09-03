// gsap.from('.pg1 .box1',{
//     opacity:0,
//     rotate:360,
//     scale:0.5,
//     duration:2,
//     delay:0.5
// })
// gsap.from('.pg2 .box2',{
//     opacity:0,
//     rotate:360,
//     scale:0.5,
//     duration:2,
    
//     // scrollTrigger:'.pg2 .box2'
//     scrollTrigger:{
//         trigger:'.pg2 .box2',
//         scroller:'body',
//         markers:true,
//         start:'top 60%',
//         end:'top 30%',
//         scrub:true,
//         pin:true
//     }
// })
// gsap.from('.pg2 h1', {
//   opacity: 0,
//   x: 400,
//   duration: 1,
//   scale: 0.4,
//   scrollTrigger: {
//     trigger: '.pg2 h1',
//     scroller: 'body',
//     markers: true,
//     start: 'top 50%'
//   }
// });
// gsap.from('.pg2 h2', {
//   opacity: 0,
//   x: -400,
//   duration: 1,
//   scale: 0.4,
//   scrollTrigger: {
//     trigger: '.pg2 h2',
//     scroller: 'body',
//     markers: true,
//     start: 'top 50%'
//   }
// });
gsap.to('.pg2 h1',
    { transform:'translateX(-150%)', 
        scrollTrigger:{ 
            trigger:'.pg2', 
            scroller:'body', 
            markers:true, 
            start:'top 0%', 
            end:'top -150%', 
            scrub:2,
            pin:true
        }
    })