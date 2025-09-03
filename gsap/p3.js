function breakTheText(){
    var h1 = document.querySelector('h1'); 
    var h1txt = h1.textContent;
    var splittedtxt = h1txt.split('');
    var clutter = '';

    splittedtxt.forEach(function(elem){
        clutter += `<span>${elem}</span>`; 
    });

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from('h1 span', {
    y: 70,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
    ease: "back.out(1.7)"
});
