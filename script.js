function loadingAnimation() {
    
var tl = gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5

})
tl.from("#line1-part1, .line h2",{
    opacity:0,
    onStart:function(){
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function(){
            if(grow < 100){
                h5timer.innerHTML = grow++
            }else{
                h5timer.innerHTML = grow

            }
        },33)        
    }
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
tl.from(".hero",{
    y:-100,

})
tl.from('.line h2',{
    animationName:"anime",
    opacity:1
})
tl.from("#hero1 h1,#hero2 h2,#hero3 h2,#hero4 h1",{
    y:120,
    stagger:0.2
})
}
loadingAnimation()


function cursorAnimation(){
    
document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})

    Shery.makeMagnet("#nav-part2 h4");

    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video")
    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to("#video-cursor",{
                left:dets.x - 570,
                y:dets.y - 300
            })
        })
    })

    videoContainer.addEventListener("mouseleave",function(){
        
        gsap.to("#video-cursor",{
            left: "70%",
            top: "-15%"
        })
    });
    var flag = 0
    videoContainer.addEventListener("click", function(){
        if(flag == 0){
            video.play()
            video.style.opacity = 1
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`
            gsap.to("#video-cursor",{
                scale:0.5
            })
            flag = 1
        }else{
            video.pause()
            video.style.opacity = 0
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-line"></i>`
            gsap.to("#video-cursor",{
                scale:1
            })
            flag = 0
    
        }
           })

}
cursorAnimation()


function sheryAnimation(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272695760684946},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":2.37,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
        gooey:true
    })
}

sheryAnimation()


document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})


document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})