// function locomotiveAnimation(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();
// }

function lenisAnimation(){
    const lenis = new Lenis({
        duration: 1.2,
        // easing: (t) => t,
        smooth: true,
      })
      
      // Sync ScrollTrigger with Lenis
      lenis.on('scroll', ScrollTrigger.update)
      
      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)


      lenis.on('scroll', ({ scroll }) => {
        const fastDiv = document.querySelector('#page2')
        // Move it at faster scroll speed
        fastDiv.style.transform = `translateY(${scroll * 0.1}px)`
      })
      
}

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
    animationName: "loaderanime"
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
    },
    ease: Power4
})

tl.from("#nav",{
    opacity: 0
})

tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3, #hero4 h1",{
    y: 120,
    stagger: 0.2
})

tl.from("#page2",{
    opacity: 0
},"-=1.2")

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

// locomotiveAnimation()
lenisAnimation()
loadingAnimation()
cursorAnimation()
