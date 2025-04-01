function loadingAnimation(){
    let tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.5,
    delay: 0.1
})

tl.from("#numloader, .line h2, #wait",{
    opacity: 0,
    onStart: function(){
        let h5timer = document.querySelector("#numloader h5")
        let grow = 0;
        setInterval(function(){
         grow < 100 ? h5timer.innerHTML = grow++ : h5timer.innerHTML = grow;
        }, 20)
    }
})

tl.to(".line h2", {
    opacity: 1,
    animationName: "anime"
})

tl.to("#loader",{
    opacity: 0,
    duration: 0.5,
    delay: 0 /*chane to 1.5*/
})

tl.from("#page1",{
    y: 1000,
    delay: 0.2,
    onStart: function(){
        let loader = document.querySelector("#loader")
        loader.style.display = "none"
    }
})

tl.from("#nav",{
    opacity: 0
})

tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3, #hero4 h1",{
    y: 120,
    stagger: 0.2
})
}

function cursorAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#cursor",{
            x: dets.x-20,
            y: dets.y-20
        })
    })
    
    Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation()
cursorAnimation()
