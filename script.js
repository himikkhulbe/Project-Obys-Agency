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
    delay: 0 /*change to 1.5*/
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

    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
    });
    
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

function magnetEffect(){
    // Shery.makeMagnet("#nav-part2 h4");
    Shery.makeMagnet("#nav-part2 h4"); 
}

// locomotiveAnimation()
lenisAnimation()
loadingAnimation()
cursorAnimation()
sheryAnimation()
flagAnimation()
magnetEffect()

let letsCreate = document.querySelector("#letsCreate")
letsCreate.addEventListener("mouseenter", function(){
    letsCreate.style.fontFamily = "silk serif"
    letsCreate.style.webkitTextStroke = '1px #fff';
    letsCreate.style.color = "transparent"
    letsCreate.style.fontStyle = "italic";
    letsCreate.style.fontWeight = "400"
    letsCreate.style.paddingBottom = "1.4vw"
    letsCreate.style.opacity = "1"
    gsap.from("#letsCreate", {
        opacity: 0,
        duration: 0.3,
        onStart: function(){
            $('#footer h1').textillate({ in: { effect: 'fadeIn' } });
        }
    })
})
letsCreate.addEventListener("mouseleave", function(){
    letsCreate.style.fontFamily = "Plain Light"
    letsCreate.style.opacity = "1"
    letsCreate.style.color = "#fff"
    letsCreate.style.fontStyle = "normal";
    letsCreate.style.fontWeight = "400"
    letsCreate.style.paddingBottom = "4vw"
    gsap.from("#letsCreate", {
        opacity: 0,
        duration: 0.5,
        onStart: function(){
            $('#footer h1').textillate({ in: { effect: 'fadeIn' } });
        }
    })
})




// function splitString(str){
//     let splittedTextHtml='',generatedHTML='';
//     let string = str.textContent;
//     let i;
//     for(i=0;i<string.length;i++){
//       splittedTextHtml += `
//       <span char="${string[i]}" style="--totalChars:${string.length};--index:${i};--delay:${i*100}ms;--duration:${string.length*100}ms">
//       ${string[i]}
//       </span>`;
//     }
    
//     generatedHTML = `<div>${splittedTextHtml}</div>`
//     str.innerHTML = generatedHTML;
//   }
  
//   function splittingInit(){
//     let splitCharArr = document.querySelectorAll('.split-text');
//     splitCharArr.forEach((str)=>{
//     splitString(str);
//   })
//   }

//   let letsCreate = document.querySelector("#letsCreate")
//   letsCreate.addEventListener("mouseenter", function(){
//     gsap.from(".split-text span", {
//         duration: 3,
//         opacity: 0,
//         y: 5,
//         stagger: 0.1,
//       });
//   })
  

//   splittingInit();

