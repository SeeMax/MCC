gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export let revealHeadline = () => {

  $('.animationOne').each(function(){
    

    let $headlineTrigger = $(this).find('.headlineTrigger');
    let $headline = $(this).find('h2');
    let $p = $(this).find('p');
    let $button = $(this).find('.seemax-button');
    let mySplitText = new SplitText($headline, {type:"words"});
    // let chars = mySplitText.chars; 
    let words = mySplitText.words; 

    // $(words).addClass('splitWords');
    // $(chars).addClass('splitChars');

    gsap.set(words, {y:"24px", opacity:0});
    if($p.length) {
      gsap.set($p, {y:"24px", opacity:0});
    }
    gsap.set($button, {opacity:0});
    

    let tl = gsap.timeline({
      defaults: {
        duration: 1.25, 
        ease: "back.out(1)",
      },
      scrollTrigger: {
        trigger: $headlineTrigger,
        start: "center bottom",
        toggleActions: "play none none reverse",
        // markers: true
      }
    });

  
    tl.to(words, {y:0, opacity:1, stagger: {amount: 0.15, ease: "power2.inOut"}}, 'comein');
    if($p.length) {
      tl.to($p, {y:0, opacity:1}, 'comein+=0.25');
    }
    tl.to($button, {opacity:1}, 'comein+=0.25');
  });
}

export let revealInvolved = () => {

  if($('main').hasClass('get-involved-page')){

    let $step = $('.involvedStep').children();
    let tl = gsap.timeline({
      delay:1,
      defaults: {
        duration: .75, 
        ease: "back.out(1)",
      },
    });

    gsap.set($step, {transformOrigin:"50% 50%"});
       
    tl.from($step, {
      scale:0.8,
      opacity:0,
      stagger: {
        from: "random", 
        amount: 0.35, 
        ease: "power2.inOut"
      },
    });
  }
}

export let revealPartner = () => {

  if($('main').hasClass('partners-page')){

    let $partner = $('.single-partner').first();

    let $kids = $partner.children();
    let tl = gsap.timeline({
      delay:1,
      defaults: {
        duration: 1.2, 
        ease: "back.out(1)",
      },
    });

  //   gsap.set($step, {transformOrigin:"50% 50%"});
       
    tl.from($kids, {
      y:'20px',
      opacity:0,
      stagger: {
        amount: 0.3, 
        from:'random',
        ease: "power2.inOut"
      },
    });
  }
}


