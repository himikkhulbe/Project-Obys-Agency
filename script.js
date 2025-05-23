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
        fastDiv.style.transform = `translateY(${scroll * 0.13}px)`
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
    y: -1500,
    opacity: 0,
    duration: 0.5,
    delay: 1.5 /*change to 1.5*/
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
    // document.addEventListener("mousemove", function(dets){
    //     gsap.to("#cursor",{
    //         x: dets.x-20,
    //         y: dets.y-20
    //     })
    // })
  
    let videoContainer = document.querySelector("#video-container")
    let video = document.querySelector("#video-container video")
    videoContainer.addEventListener("mouseenter", function(){
        videoContainer.addEventListener("mousemove", function(dets){
            gsap.to(".mousefollower", {
                opacity: 0
            })
            gsap.to("#video-cursor", {
                x: dets.x-1250,
                y: dets.y-350
            })
        })
    })
    videoContainer.addEventListener("mouseleave", function(){
        gsap.to(".mousefollower",{
            opacity: 1
        })
        gsap.to("#video-cursor", {
            top: "-12%",
            left: "70%"
        })
    })

    let flag = 0
    videoContainer.addEventListener("click",function(){
        if(flag == 0){
            video.play()
            video.style.opacity = 1;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-large-line"></i>`
            gsap.to("#video-cursor",{
                scale: 0.5
            })
            flag = 1
        } else {
            video.pause()
            video.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-large-fill"></i>`
            gsap.to("#video-cursor",{
                scale: 1
            })
            flag = 0
        }
    })
}

function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style: 5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272756554789667},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.52,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.4,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.42,"range":[0,2]},"noise_scale":{"value":7.9,"range":[0,100]}}, 
        gooey: true
    })

    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });

    Shery.makeMagnet("#nav-part2 h4")
}

function flagAnimation(){
    document.addEventListener("mousemove", function(dets){
        gsap.to("#flag",{
            x: dets.x,
            y: dets.y
        })
    })
    document.querySelector("#hero3").addEventListener("mouseenter", function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave", function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}

function letsCreateAnimation(){
    let clutter = "";
    let clutter2 = "";
    
    document.querySelector("#footer h1").textContent.split("").forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
    document.querySelector("#footer h1").innerHTML = clutter;
    
    document.querySelector("#footer h2").textContent.split("").forEach(function(elem){
        clutter2 += `<span>${elem}</span>`
    })
    document.querySelector("#footer h2").innerHTML = clutter2;
    
    
    document.querySelector(".footer-text").addEventListener("mouseenter", function(){
        gsap.to("#footer h1 span", {
            opacity: 0,
            stagger: 0.02
        })
        gsap.to("#footer h2 span", {
            opacity: 1,
            delay: 0.1,
            stagger: 0.05
        })
    })
    
    document.querySelector(".footer-text").addEventListener("mouseleave", function(){
        gsap.to("#footer h1 span", {
            opacity: 1,
            delay: 0.2,
            stagger: 0.05
        })
        gsap.to("#footer h2 span", {
            opacity: 0,
            stagger: 0.02
        })
    })
}

window.addEventListener("DOMContentLoaded", () => {
lenisAnimation()
loadingAnimation()
cursorAnimation()
sheryAnimation()
flagAnimation()
letsCreateAnimation()
});

// locomotiveAnimation()
// lenisAnimation()
// loadingAnimation()
// cursorAnimation()
// sheryAnimation()
// flagAnimation()
// letsCreateAnimation()












