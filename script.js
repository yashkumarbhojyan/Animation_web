



    var tl =gsap.timeline()


    tl.from(".nav a",{
        y: -10,
        opacity:0,
        duration:.5,
       
    })
 





    tl.from(".heading ",{
        y:-30,
        opacity:0,
        duration:1,
        stagger:.3,
       
    })


    tl.from("#chotiheadings h5",{
        x:400,
        opacity:0,
        duration:0.5,
        stagger:.2
    }) 

    tl.from("#herofooter ",{
        y:100,
        opacity:0,
        duration:0.5,
        stagger:.2
    })


    gsap.from(".about ",{
        x:400,
        opacity:0,
        duration:0.8,
        stagger:.2,
        scrollTrigger:{
            trigger:".about",
            scroller:"body",
            start:"top 50%"
        }
    })
    

    document.querySelectorAll(".elem").forEach(function(elem){
        elem.addEventListener("mousemove", function (dets) {
            var diff =dets.clientY - elem.getBoundingClientRect().top-120;
           gsap.to(elem.querySelector("img"),{
            opacity: 1,
            top: diff,
            left: dets.clientX,
            rotate:gsap.utils.clamp(-20,20,100),

            });

           });
        });
    
       
        document.querySelectorAll(".elem").forEach(function(elem){
            elem.addEventListener("mouseleave", function (dets) {
             
               gsap.to(elem.querySelector("img"),{
                opacity: 0,
    
                });
    
               });
            });
        
    