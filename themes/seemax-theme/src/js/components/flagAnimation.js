gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


export let revealFlag = () => {

  $('.whiteFlagAnimation').each(function(){
    
    let $flagClip = $(this).find('.flagClip');
    let $content = $(this).find('.content');

    gsap.set($(this), { 
      overflow:'hidden'
    });

    gsap.set($content, {
      perspective:2000,
      transformStyle: 'preserve-3d'
    });

    gsap.set($flagClip, {
      overflow:'hidden',
      transformOrigin: 'top center'
    });
    

    let tl = gsap.timeline({
      defaults: {
        duration: 1.25, 
        ease: "elastic.out(0.5, 0.5)"
      },
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=200",
        toggleActions: "play none none reverse",
      }
    });

    tl.from($flagClip, {
      rotationX:-120, 
      // height:0,
      stagger: {
        amount: 0.3, 
        ease: "power2.inOut"
      }
    }, 'comein');
  });
}

export let heroFlag = () => {
    
  let $fact = $('.heroBanner').find('.single-hero-fact');
  
  if($fact.length) {
  
    let $banner = $('.heroBanner').find('.flagBack');
    gsap.set($banner, {perspective:1000});
    
    $fact.each(function(){
      
      let $h2 = $(this).find('h2');
      let $h4 = $(this).find('h4');
      let splith4 = new SplitText($h4, {type:"words, chars"});
      let splith2 = new SplitText($h2, {type:"words, chars"});
      let charsh4 = splith4.chars; 
      let charsh2 = splith2.chars; 
      
      
      gsap.set([charsh4, charsh2], {
        y:0, 
        rotationX:-100, 
        opacity:0,
        transformOrigin: 'top center'
      });
  
      let tl = gsap.timeline({
        defaults: {
          duration: 1.25, 
          ease: "back.out(1)",
        },
        scrollTrigger: {
          trigger: $(this),
          start: "bottom bottom-=100",
          toggleActions: "play none none reverse",
        }
      });
  
      tl.to(charsh2, {
        y:0, 
        opacity:1, 
        rotationX:0, 
        stagger: {
          amount: 0.3, 
          from: "random", 
          ease: "power2.inOut"
        }
      }, 'comein');
      tl.to(charsh4, {
        y:0, 
        opacity:1, 
        rotationX:0, 
        stagger: {
          amount: 0.3, 
          from: "random", 
          ease: "power2.inOut"
        }
      }, 'comein+=0.4');
    })
  }
}

export let subFlag = () => {
  
  
  $('.subFlagAnimation').each(function(){

    let $subDesc = $(this).find('.subDescription');
    let $subDesch4 = $subDesc.find('h4');
    let $subDescp = $subDesc.find('p');
    let $subFlag = $(this).find('.subFlag');
    let $h3 = $subFlag.find('h3');
    let $h4 = $subFlag.find('h4');
    let $content = $(this).find('.content');
    let splith4 = new SplitText($h4, {type:"words, chars"});
    let splith3 = new SplitText($h3, {type:"words, chars"});
    let charsh4 = splith4.chars; 
    let charsh3 = splith3.chars; 
    

    // console.log($subDescKids);

    gsap.set($(this), {
      overflow:'hidden'
    });

    gsap.set($content, {
      perspective:2000, 
    });

    gsap.set($subFlag, {
      transformOrigin: 'top center'
    });

    gsap.set($subDesc, {
      perspective:2000, 
    });
    
    

    let tl = gsap.timeline({
      defaults: {
        delay:1.2,
        duration: 1.25, 
        ease: "elastic.out(0.5, 0.5)"
      },
      // scrollTrigger: {
      //   trigger: $('header'),
      //   start: "top top-=1",
      //   toggleActions: "play none none reverse",
      // }
    });

    // tl.from($subFlag, {
    //   rotationX:-120, 
    //   duration: 1.5, 
    // }, 'comein');

    tl.from([charsh3, charsh4], {
      y:24, 
      opacity:0,
      transformOrigin: 'top center',
      stagger: {
        amount: 0.3, 
        ease: "power2.inOut"
      },
    }, 'comein');

    tl.from($subDesch4, {
      opacity:0,
      y:14,
      stagger: {
        amount: 0.3, 
        ease: "power2.inOut"
      }
    }, 'comein+=0.3');

    tl.from($subDescp, {
      opacity:0,
      y:14,
      stagger: {
        amount: 0.3, 
        ease: "power2.inOut"
      }
    }, 'comein+=0.5');
  });
}


