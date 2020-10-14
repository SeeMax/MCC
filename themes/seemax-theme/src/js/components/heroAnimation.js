gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


export let heroImage = () => {

  let $hero = $('.heroImage');

  if ($hero.length) {
    
    let $theImage = $hero.find('.theImage');
    let $content = $hero.find('.content');
    let $h1 = $hero.find('h1');
    let splith1 = new SplitText($h1, {type:"words, chars"}); 
    let charsh1 = splith1.chars;
    
    
  //   let $flagClip = $(this).find('.flagClip');

    gsap.set($content, {
      perspective:2000, 
    });

    gsap.set($theImage, { 
      transformOrigin:"50% 50%",
      scale:1.25,
    });

    gsap.set(charsh1, {
      y:0, 
      rotationX:-70, 
      opacity:0,
      transformOrigin: 'top center'
    });
  
    let tl = gsap.timeline({
      delay:0.6,
      defaults: {
        duration: .85, 
        ease: "back.out(1.6)",
      },
    });
    
    tl.to(charsh1, {
      y:0, 
      opacity:1, 
      rotationX:0, 
      stagger: {
        amount: 0.3, 
        from: "random", 
        ease: "power2.inOut"
      }
    }, 'comein');


    let imgTL = gsap.timeline({
      defaults: {
        duration: 15, 
        ease: "none"
      },
    });

    imgTL.to($theImage, {
      scale:1
    });
  
  }
}

export let heroHeadline = () => {
    
  let $hero = $('.heroHeadline');

  if ($hero.length) {
    
    let $heroInner = $('.heroHeadline').find('.content');
    let $h1 = $hero.find('h1');
    let $h4 = $hero.find('h4');
    let $p = $hero.find('p');
    let $hr = $hero.find('hr');
    let splith4 = new SplitText($h4, {type:"words, chars"});
    let splith1 = new SplitText($h1, {type:"words, chars"});
    // let splitp = new SplitText($p, {type:"words"});
    let charsh4 = splith4.words; 
    let charsh1 = splith1.chars;
    // let wordsp = splitp.words;
    
    gsap.set($heroInner, {perspective:1000});

    gsap.set(charsh1, {
      y:0, 
      rotationX:-70, 
      opacity:0,
      transformOrigin: 'top center'
    });

    if (charsh4.length) {
      gsap.set(charsh4, {
        y:0, 
        rotationX:-70, 
        opacity:0,
        transformOrigin: 'top center'
      });
    }

    if ($p.length) {
      gsap.set($p, {
        opacity:0,
        y:-18,
        transformOrigin: 'top center'
      }); 
      gsap.set($hr, {
        opacity:0,
        transformOrigin: 'top center'
      });  
    }
    

    let tl = gsap.timeline({
      delay:0.6,
      defaults: {
        duration: .85, 
        ease: "back.out(1.6)",
      },
      // scrollTrigger: {
      //   trigger: $hero,
      //   start: "center bottom",
      //   toggleActions: "play none none reverse",
      // }
    });
    
    tl.to(charsh1, {
      y:0, 
      opacity:1, 
      rotationX:0, 
      stagger: {
        amount: 0.3, 
        from: "random", 
        ease: "power2.inOut"
      }
    }, 'comein');

    if (charsh4.length) {  
      tl.to(charsh4, {
        y:0, 
        opacity:1, 
        rotationX:0, 
        duration:0.5,
        stagger: {
          amount: 0.1, 
          from: "random", 
          ease: "power2.inOut"
        }
      }, 'comein2-=0.2');
    }

    if ($p.length) {
      tl.to([$p, $hr], {
        opacity:1, 
        y:0,
        duration:0.8,
      }, 'comein2-=0.25');
    }
  }
}