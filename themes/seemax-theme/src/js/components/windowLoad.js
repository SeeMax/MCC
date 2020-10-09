import { revealHeadline } from './headlineAnimation.js';
import { revealFlag } from './flagAnimation.js';
import { heroFlag } from './flagAnimation.js';
import { subFlag } from './flagAnimation.js';
import { heroImage } from './heroAnimation.js';
import { heroHeadline } from './heroAnimation.js';
import { revealInvolved } from './headlineAnimation.js';
import { revealPartner } from './headlineAnimation.js';

// import { subHover } from './subNavs.js';
// import { mobileSubs } from './mobileSubNavs.js';
// import { threeColReveal } from './threeColReveal.js';
// import { mediaPostReveal } from './mediaReveal.js';
// import { blogReveal } from './blogReveal.js';
// import { menuToggle } from './menuToggle.js';
// import { teamToggle } from './teamToggle.js';
// import { heroLock } from './heroLock.js';
// import { filterIsotope } from './filterIsotope';


window.addEventListener('load', function() {
  // menuToggle();
  // teamToggle();
  revealHeadline();
  revealFlag();
  heroFlag();
  subFlag();
  heroImage();
  heroHeadline();
  revealInvolved();
  revealPartner();
  // filterIsotope();
  // revealHeadline();
  
  if ($(window).width() <= 1024) {
    // mobileSubs();
  }
  else {
    // subHover();
  }  
  // threeColReveal();
  // mediaPostReveal();
  // blogReveal();
  // heroLock();
})


window.addEventListener('resize', function() {

//   if ($(window).width() < 1024) {
//     mobileSubs();
//   }
//   else {
//     subHover();
//  }
});