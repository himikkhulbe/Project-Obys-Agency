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
    delay: 1.5
})

tl.from("#page1",{
    y: 1000,
    delay: 0.2,
    onStart: function(){
        let loader = document.querySelector("#loader")
        loader.style.display = "none"
    }
})