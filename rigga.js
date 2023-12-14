gsap.to(".page1 h1",{
    transform:"translateX(-50%)",
    fontWeight:"0",
    scrollTrigger:{
      trigger:".page1",
      scroller:"body",
      start:"top 0%",
      scrub:2,
      pin:true
    }})
   

    gsap.from(".page2 h1",{
     x:-300,
     duration:1,
opacity:0,
      scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 30%",
        end:"top",
        scrub:1,
        // pin:true
      }})
      gsap.from(".page2 .left",{
        y:300,
        duration:1,
   opacity:0,
         scrollTrigger:{
           trigger:".page2",
           scroller:"body",
          //  markers:true,
           start:"top 30%",
           end:"top",
           scrub:2,
           // pin:true
         }})
         gsap.from(".right",{
       
          x:500,
          duration:1,
            opacity:0,
           scrollTrigger:{
             trigger:".page2",
             scroller:"body",
             start:"top 40%",
             end:"top",
            //  markers:true,
             scrub:2,
             // pin:true
           }})
           
           gsap.from(".page3 h1",{
           y:-30,
           opacity:0,
            duration:1,
            scrollTrigger:{
              scroller:"body",
              trigger:".page3",
              // markers:true,
              start:"top 30%",
              end:"top",
              scrub:1,
            }

           })
           gsap.from(" .page3right h2",{
            color:"#000000",
            duration:1,
            scrollTrigger:{
              scroller:"body",
              trigger:".page3",
              // markers:true,
              start:"top 30%",
              end:"top",
              scrub:1,
            }

           })
           gsap.from(" .page3right",{
            x:300,
            opacity:0,
            duration:1,
            scrollTrigger:{
              scroller:"body",
              trigger:".page3",
              // // markers:true,
              start:"top 30%",
              end:"top",
              scrub:1,
            }

           })
           gsap.from(" .page3left",{
            x:-300,
            scale:0.5,
            opacity:0,
            duration:1,
            scrollTrigger:{
              scroller:"body",
              trigger:".page3",
              // // // markers:true,
              start:"top 30%",
              end:"top",
              scrub:1,
            }
            

           })
           var screen=window.screen.width;
           if(screen<=400){
             gsap.to(".text h2",{
               top:"45%",
                opacity:1,
                duration:1,
                scrollTrigger:{
                  scroller:"body",
                  trigger:".page4",
                  // // // markers:true,
                  start:"top 30%",
                  end:"top",
                  scrub:2,
                }
    
               })
               gsap.to(".text p",{
                 top:"78%",
                  opacity:1,
                  duration:1,
                  scrollTrigger:{
                    scroller:"body",
                    trigger:".page4",
                    // // // markers:true,
                    start:"top 30%",
                    end:"top",
                    scrub:2,
                  }
      
                 })
           }
           gsap.to(".img img",{
           top:"0%",
            opacity:1,
            duration:1,
            scrollTrigger:{
              scroller:"body",
              trigger:".page4",
              // // // markers:true,
              start:"top 30%",
              end:"top",
              scrub:1,
            }

           })
           gsap.to(".text h2",{
            top:"20%",
             opacity:1,
             duration:1,
             scrollTrigger:{
               scroller:"body",
               trigger:".page4",
               // // // markers:true,
               start:"top 30%",
               end:"top",
               scrub:1,
             }
 
            })
            gsap.to(".text p",{
              top:"50%",
               opacity:1,
               duration:1,
               scrollTrigger:{
                 scroller:"body",
                 trigger:".page4",
                 // // // markers:true,
                 start:"top 30%",
                 end:"top",
                 scrub:1,
               }
   
              })
             