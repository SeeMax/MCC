/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/preloader */ "./src/js/components/preloader.js");
/* harmony import */ var _components_preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mobileMenu */ "./src/js/components/mobileMenu.js");
/* harmony import */ var _components_mobileMenu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_mobileMenu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_externalLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/externalLinks */ "./src/js/components/externalLinks.js");
/* harmony import */ var _components_externalLinks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_externalLinks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loadMailchimpScripts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loadMailchimpScripts.js */ "./src/js/components/loadMailchimpScripts.js");
/* harmony import */ var _components_loadMailchimpScripts_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_loadMailchimpScripts_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_smoothScroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/smoothScroll.js */ "./src/js/components/smoothScroll.js");
/* harmony import */ var _components_smoothScroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_smoothScroll_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_pinnedSubNav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pinnedSubNav.js */ "./src/js/components/pinnedSubNav.js");
/* harmony import */ var _components_pinnedSubNav_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_pinnedSubNav_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_home_carousel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-carousel.js */ "./src/js/components/home-carousel.js");
/* harmony import */ var _components_home_carousel_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_home_carousel_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_windowLoad_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/windowLoad.js */ "./src/js/components/windowLoad.js");









/***/ }),

/***/ "./src/js/components/externalLinks.js":
/*!********************************************!*\
  !*** ./src/js/components/externalLinks.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var extLinks = function extLinks() {
  // console.log('external link');
  $('a').each(function () {
    if (!$(this).hasClass('videoButton')) {
      var a = new RegExp('/' + window.location.host + '/');

      if (!a.test(this.href)) {
        $(this).click(function (event) {
          event.preventDefault();
          event.stopPropagation();
          window.open(this.href, '_blank');
        });
      }
    }
  });
};

jQuery(document).ready(function ($) {
  extLinks();
});

/***/ }),

/***/ "./src/js/components/flagAnimation.js":
/*!********************************************!*\
  !*** ./src/js/components/flagAnimation.js ***!
  \********************************************/
/*! exports provided: revealFlag, heroFlag, subFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealFlag", function() { return revealFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroFlag", function() { return heroFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subFlag", function() { return subFlag; });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
var revealFlag = function revealFlag() {
  $('.whiteFlagAnimation').each(function () {
    var $flagClip = $(this).find('.flagClip');
    var $content = $(this).find('.content');
    gsap.set($(this), {
      overflow: 'hidden'
    });
    gsap.set($content, {
      perspective: 2000,
      transformStyle: 'preserve-3d'
    });
    gsap.set($flagClip, {
      overflow: 'hidden',
      transformOrigin: 'top center'
    });
    var tl = gsap.timeline({
      defaults: {
        duration: 1.25,
        ease: "elastic.out(0.5, 0.5)"
      },
      scrollTrigger: {
        trigger: $(this),
        start: "top bottom-=200",
        toggleActions: "play none none reverse"
      }
    });
    tl.from($flagClip, {
      rotationX: -120,
      // height:0,
      stagger: {
        amount: 0.3,
        ease: "power2.inOut"
      }
    }, 'comein');
  });
};
var heroFlag = function heroFlag() {
  var $fact = $('.heroBanner').find('.single-hero-fact');

  if ($fact.length) {
    var $banner = $('.heroBanner').find('.flagBack');
    gsap.set($banner, {
      perspective: 1000
    });
    $fact.each(function () {
      var $h2 = $(this).find('h2');
      var $h4 = $(this).find('h4');
      var splith4 = new SplitText($h4, {
        type: "words, chars"
      });
      var splith2 = new SplitText($h2, {
        type: "words, chars"
      });
      var charsh4 = splith4.chars;
      var charsh2 = splith2.chars;
      $(charsh2).each(function () {
        // console.log($(this));
        $(this).attr('data-nosnippet', ''); // $(this).hide();
      });
      $(charsh4).each(function () {
        // console.log($(this));
        $(this).attr('data-nosnippet', ''); // $(this).hide();
      });
      gsap.set([charsh4, charsh2], {
        y: 0,
        rotationX: -100,
        opacity: 0,
        transformOrigin: 'top center'
      });
      var tl = gsap.timeline({
        defaults: {
          duration: 1.25,
          ease: "back.out(1)"
        },
        scrollTrigger: {
          trigger: $(this),
          start: "bottom bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
      tl.to(charsh2, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: {
          amount: 0.3,
          from: "random",
          ease: "power2.inOut"
        }
      }, 'comein');
      tl.to(charsh4, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: {
          amount: 0.3,
          from: "random",
          ease: "power2.inOut"
        }
      }, 'comein+=0.4');
    });
  }
};
var subFlag = function subFlag() {
  $('.subFlagAnimation').each(function () {
    var $subDesc = $(this).find('.subDescription');
    var $subDesch4 = $subDesc.find('h4');
    var $subDescp = $subDesc.find('p');
    var $subFlag = $(this).find('.subFlag');
    var $h3 = $subFlag.find('h3');
    var $h4 = $subFlag.find('h4');
    var $content = $(this).find('.content');
    var splith4 = new SplitText($h4, {
      type: "words, chars"
    });
    var splith3 = new SplitText($h3, {
      type: "words, chars"
    });
    var charsh4 = splith4.chars;
    var charsh3 = splith3.chars;
    $(charsh3).each(function () {
      // console.log($(this));
      $(this).attr('data-nosnippet', ''); // $(this).hide();
    });
    $(charsh4).each(function () {
      // console.log($(this));
      $(this).attr('data-nosnippet', ''); // $(this).hide();
    }); // console.log($subDescKids);

    gsap.set($(this), {
      overflow: 'hidden'
    });
    gsap.set($content, {
      perspective: 2000
    });
    gsap.set($subFlag, {
      transformOrigin: 'top center'
    });
    gsap.set($subDesc, {
      perspective: 2000
    });
    var tl = gsap.timeline({
      defaults: {
        delay: 1.2,
        duration: 1.25,
        ease: "elastic.out(0.5, 0.5)"
      } // scrollTrigger: {
      //   trigger: $('header'),
      //   start: "top top-=1",
      //   toggleActions: "play none none reverse",
      // }

    }); // tl.from($subFlag, {
    //   rotationX:-120, 
    //   duration: 1.5, 
    // }, 'comein');

    tl.from([charsh3, charsh4], {
      y: 24,
      opacity: 0,
      transformOrigin: 'top center',
      stagger: {
        amount: 0.3,
        ease: "power2.inOut"
      }
    }, 'comein');
    tl.from($subDesch4, {
      opacity: 0,
      y: 14,
      stagger: {
        amount: 0.3,
        ease: "power2.inOut"
      }
    }, 'comein+=0.3');
    tl.from($subDescp, {
      opacity: 0,
      y: 14,
      stagger: {
        amount: 0.3,
        ease: "power2.inOut"
      }
    }, 'comein+=0.5');
  });
};

/***/ }),

/***/ "./src/js/components/headlineAnimation.js":
/*!************************************************!*\
  !*** ./src/js/components/headlineAnimation.js ***!
  \************************************************/
/*! exports provided: revealHeadline, revealInvolved, revealPartner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealHeadline", function() { return revealHeadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealInvolved", function() { return revealInvolved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revealPartner", function() { return revealPartner; });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
var revealHeadline = function revealHeadline() {
  $('.animationOne').each(function () {
    var $headlineTrigger = $(this).find('.headlineTrigger');
    var $headline = $(this).find('h2');
    var $p = $(this).find('p');
    var $button = $(this).find('.seemax-button');
    var mySplitText = new SplitText($headline, {
      type: "words"
    }); // let chars = mySplitText.chars; 

    var words = mySplitText.words; // $(words).addClass('splitWords');
    // $(chars).addClass('splitChars');

    gsap.set(words, {
      y: "24px",
      opacity: 0
    });

    if ($p.length) {
      gsap.set($p, {
        y: "24px",
        opacity: 0
      });
    }

    gsap.set($button, {
      opacity: 0
    });
    var tl = gsap.timeline({
      defaults: {
        duration: 1.25,
        ease: "back.out(1)"
      },
      scrollTrigger: {
        trigger: $headlineTrigger,
        start: "center bottom",
        toggleActions: "play none none reverse" // markers: true

      }
    });
    tl.to(words, {
      y: 0,
      opacity: 1,
      stagger: {
        amount: 0.15,
        ease: "power2.inOut"
      }
    }, 'comein');

    if ($p.length) {
      tl.to($p, {
        y: 0,
        opacity: 1
      }, 'comein+=0.25');
    }

    tl.to($button, {
      opacity: 1
    }, 'comein+=0.25');
  });
};
var revealInvolved = function revealInvolved() {
  if ($('main').hasClass('get-involved-page')) {
    var $step = $('.involvedStep').children();
    var tl = gsap.timeline({
      delay: 1,
      defaults: {
        duration: .75,
        ease: "back.out(1)"
      }
    });
    gsap.set($step, {
      transformOrigin: "50% 50%"
    });
    tl.from($step, {
      scale: 0.8,
      opacity: 0,
      stagger: {
        from: "random",
        amount: 0.35,
        ease: "power2.inOut"
      }
    });
  }
};
var revealPartner = function revealPartner() {
  if ($('main').hasClass('partners-page')) {
    var $partner = $('.single-partner').first();
    var $kids = $partner.children();
    var tl = gsap.timeline({
      delay: 1,
      defaults: {
        duration: 1.2,
        ease: "back.out(1)"
      }
    }); //   gsap.set($step, {transformOrigin:"50% 50%"});

    tl.from($kids, {
      y: '20px',
      opacity: 0,
      stagger: {
        amount: 0.3,
        from: 'random',
        ease: "power2.inOut"
      }
    });
  }
};

/***/ }),

/***/ "./src/js/components/heroAnimation.js":
/*!********************************************!*\
  !*** ./src/js/components/heroAnimation.js ***!
  \********************************************/
/*! exports provided: heroImage, heroHeadline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroImage", function() { return heroImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heroHeadline", function() { return heroHeadline; });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
var heroImage = function heroImage() {
  var $hero = $('.heroImage');

  if ($hero.length) {
    var $theImage = $hero.find('.theImage');
    var $content = $hero.find('.content');
    var $h1 = $hero.find('.homeHeroHeadline');
    var splith1 = new SplitText($h1, {
      type: "words, chars"
    });
    var charsh1 = splith1.chars; //   let $flagClip = $(this).find('.flagClip');

    gsap.set($content, {
      perspective: 2000
    });
    gsap.set($theImage, {
      transformOrigin: "50% 50%",
      scale: 1.25
    });
    gsap.set(charsh1, {
      y: 0,
      rotationX: -70,
      opacity: 0,
      transformOrigin: 'top center'
    });
    var tl = gsap.timeline({
      delay: 0.6,
      defaults: {
        duration: .85,
        ease: "back.out(1.6)"
      }
    });
    tl.to(charsh1, {
      y: 0,
      opacity: 1,
      rotationX: 0,
      stagger: {
        amount: 0.3,
        from: "random",
        ease: "power2.inOut"
      }
    }, 'comein');
    var imgTL = gsap.timeline({
      defaults: {
        duration: 15,
        ease: "none"
      }
    });
    imgTL.to($theImage, {
      scale: 1
    });
    $(charsh1).each(function () {
      // console.log($(this));
      $(this).attr('data-nosnippet', '');
    });
  }
};
var heroHeadline = function heroHeadline() {//   let $hero = $('.heroHeadline');
  //   if ($hero.length) {
  //     let $heroInner = $('.heroHeadline').find('.content');
  //     let $h1 = $hero.find('.homeHeroHeadline');
  //     let $h4 = $hero.find('h4');
  //     let $p = $hero.find('p');
  //     let $hr = $hero.find('hr');
  //     let splith4 = new SplitText($h4, {type:"words, chars"});
  //     let splith1 = new SplitText($h1, {type:"words, chars"});
  //     // let splitp = new SplitText($p, {type:"words"});
  //     let charsh4 = splith4.words; 
  //     let charsh1 = splith1.chars;
  //     // let wordsp = splitp.words;
  //     gsap.set($heroInner, {perspective:1000});
  //     gsap.set(charsh1, {
  //       y:0, 
  //       rotationX:-70, 
  //       opacity:0,
  //       transformOrigin: 'top center'
  //     });
  //     if (charsh4.length) {
  //       gsap.set(charsh4, {
  //         y:0, 
  //         rotationX:-70, 
  //         opacity:0,
  //         transformOrigin: 'top center'
  //       });
  //     }
  //     if ($p.length) {
  //       gsap.set($p, {
  //         opacity:0,
  //         y:-18,
  //         transformOrigin: 'top center'
  //       }); 
  //       gsap.set($hr, {
  //         opacity:0,
  //         transformOrigin: 'top center'
  //       });  
  //     }
  //     let tl = gsap.timeline({
  //       delay:0.6,
  //       defaults: {
  //         duration: .85, 
  //         ease: "back.out(1.6)",
  //       },
  //       // scrollTrigger: {
  //       //   trigger: $hero,
  //       //   start: "center bottom",
  //       //   toggleActions: "play none none reverse",
  //       // }
  //     });
  //     tl.to(charsh1, {
  //       y:0, 
  //       opacity:1, 
  //       rotationX:0, 
  //       stagger: {
  //         amount: 0.3, 
  //         from: "random", 
  //         ease: "power2.inOut"
  //       }
  //     }, 'comein');
  //     if (charsh4.length) {  
  //       tl.to(charsh4, {
  //         y:0, 
  //         opacity:1, 
  //         rotationX:0, 
  //         duration:0.5,
  //         stagger: {
  //           amount: 0.1, 
  //           from: "random", 
  //           ease: "power2.inOut"
  //         }
  //       }, 'comein2-=0.2');
  //     }
  //     if ($p.length) {
  //       tl.to([$p, $hr], {
  //         opacity:1, 
  //         y:0,
  //         duration:0.8,
  //       }, 'comein2-=0.25');
  //     }
  //   }
};

/***/ }),

/***/ "./src/js/components/home-carousel.js":
/*!********************************************!*\
  !*** ./src/js/components/home-carousel.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var slickIt = function slickIt() {
  $('.center-carousel').slick({
    centerMode: true,
    dots: false,
    centerPadding: '160px',
    slidesToShow: 1,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    cssEase: 'cubic-bezier(.13,.79,.23,.96)',
    // cssEase: 'easeInOutCirc',
    prevArrow: $('.prevArrow'),
    nextArrow: $('.nextArrow'),
    responsive: [{
      breakpoint: 768,
      settings: {
        variableWidth: false,
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });
};

$(document).ready(function () {
  slickIt();
});

/***/ }),

/***/ "./src/js/components/loadMailchimpScripts.js":
/*!***************************************************!*\
  !*** ./src/js/components/loadMailchimpScripts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Make a variable for the Mailchimp Scripts
var mailchimpScripts = function mailchimpScripts() {
  var thisOneScript = '<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array();window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";fnames[1]="FNAME";ftypes[1]="text";fnames[2]="LNAME";ftypes[2]="text";}(jQuery));var $mcj = jQuery.noConflict(true);</script>';
  $('body').append(thisOneScript);
}; // If the mailchimp for is PerformanceObserverEntryList, load the scripts


jQuery(document).ready(function ($) {
  if ($('#mc_embed_signup').length) {
    mailchimpScripts();
  }
});

/***/ }),

/***/ "./src/js/components/mobileMenu.js":
/*!*****************************************!*\
  !*** ./src/js/components/mobileMenu.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuOpen = function menuOpen() {
  var tl = new gsap.timeline({
    paused: true,
    defaults: {
      // children inherit these defaults
      duration: 0.3,
      ease: "back.out(1)"
    }
  });
  var fullMenu = $(".main-nav");
  var links = $("nav a");
  var ham1 = $(".hamTop");
  var ham2 = $(".hamMid");
  var ham3 = $(".hamBot");
  tl.set($("body"), {
    overflow: "hidden"
  });
  tl.to(fullMenu, {
    top: "0%",
    clipPath: "polygon(100% 0, 100% 100%, 50% 100%, 0 100%, 0 0)",
    ease: "back.in(0.2)"
  }, "menuOpen");
  tl.to(links, {
    opacity: 1,
    y: "0%",
    stagger: {
      amount: .15
    }
  }, "menuOpen+=0.15");
  tl.to(ham1, {
    backgroundColor: '#BBFFD1',
    rotation: -315,
    x: 0,
    y: 6
  }, "menuOpen");
  tl.to(ham2, {
    backgroundColor: '#BBFFD1',
    width: 0
  }, "menuOpen");
  tl.to(ham3, {
    backgroundColor: '#BBFFD1',
    rotation: 315,
    x: 0,
    y: -6
  }, "menuOpen");
  $(".menuToggle").on('click', function () {
    if ($(this).hasClass("navOpen")) {
      tl.reverse();
      $(this).removeClass("navOpen");
    } else {
      tl.play();
      $(this).addClass("navOpen");
    }
  });
  return tl;
};

menuOpen();

/***/ }),

/***/ "./src/js/components/pinnedSubNav.js":
/*!*******************************************!*\
  !*** ./src/js/components/pinnedSubNav.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var buildServicesNav = function buildServicesNav() {
  var hero = $('.page-services .hero-section');
  var subNav = '<div class="services-subnav"><div class="content"></div></div>';
  $(hero).after(subNav);
};

var buildServicesLinks = function buildServicesLinks() {
  $('.single-full-service').each(function () {
    var thisID = $(this).find('.full-service-image-half').attr('id');
    var cleanID = thisID.replace(/[^a-zA-Z ]/g, "");
    var thisName = $(this).find('h2').html();
    var thisLink = "<a href='#" + cleanID + "'>" + thisName + "</a>";
    $('.services-subnav .content').append(thisLink);
  });
};

var pinServicesLinks = function pinServicesLinks() {
  var headerHeight = $('.header').outerHeight();
  var subNavHeight = $('.services-subnav').outerHeight();
  var spacerHeight = headerHeight + subNavHeight;
  var st = ScrollTrigger.create({
    trigger: ".services-full-section",
    pin: ".services-subnav",
    start: "-=" + spacerHeight + "",
    pinSpacing: false,
    end: "+=9999999999"
  });
};

if ($('body').hasClass('page-services')) {
  // alert("here");
  buildServicesNav();
  buildServicesLinks();
  pinServicesLinks();
}

/***/ }),

/***/ "./src/js/components/preloader.js":
/*!****************************************!*\
  !*** ./src/js/components/preloader.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var preLoaderOn = function preLoaderOn() {
  // console.log('not-preloader');
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();
  });
};

window.onload = function (e) {
  preLoaderOn();
};

/***/ }),

/***/ "./src/js/components/smoothScroll.js":
/*!*******************************************!*\
  !*** ./src/js/components/smoothScroll.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Import The Menu Close Function to use on mobile
// import { menuClose } from './mobileMenu.js';
var smoothScrolling = function smoothScrolling(theLink) {
  gsap.registerPlugin(ScrollToPlugin);
  event.preventDefault();
  var target = $(theLink).attr("href");
  var headerHeight = $('.header').outerHeight();
  var subNavHeight = $('.strain-subnav').outerHeight();
  var spacerHeight = headerHeight + subNavHeight;

  if ($('body').hasClass('page-strains')) {
    gsap.to(window, {
      duration: 0.5,
      ease: "circ.out",
      scrollTo: {
        y: target,
        offsetY: spacerHeight
      }
    });
  } else {
    gsap.to(window, {
      duration: 0.5,
      ease: "circ.out",
      scrollTo: {
        y: target,
        offsetY: headerHeight
      }
    });
  }

  return false;
};

jQuery(document).ready(function ($) {
  $('a[href^="#"]').bind('click', function () {
    smoothScrolling($(this)); // IF IT"S MOBILE / IPAD OR SMALLER

    if (screen.width <= 1025) {
      menuClose();
      smoothScrolling($(this));
    }
  });
});

/***/ }),

/***/ "./src/js/components/windowLoad.js":
/*!*****************************************!*\
  !*** ./src/js/components/windowLoad.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headlineAnimation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headlineAnimation.js */ "./src/js/components/headlineAnimation.js");
/* harmony import */ var _flagAnimation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flagAnimation.js */ "./src/js/components/flagAnimation.js");
/* harmony import */ var _heroAnimation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroAnimation.js */ "./src/js/components/heroAnimation.js");







 // import { subHover } from './subNavs.js';
// import { mobileSubs } from './mobileSubNavs.js';
// import { threeColReveal } from './threeColReveal.js';
// import { mediaPostReveal } from './mediaReveal.js';
// import { blogReveal } from './blogReveal.js';
// import { menuToggle } from './menuToggle.js';
// import { teamToggle } from './teamToggle.js';
// import { heroLock } from './heroLock.js';
// import { filterIsotope } from './filterIsotope';

window.addEventListener('load', function () {
  // menuToggle();
  // teamToggle();
  Object(_headlineAnimation_js__WEBPACK_IMPORTED_MODULE_0__["revealHeadline"])();
  Object(_flagAnimation_js__WEBPACK_IMPORTED_MODULE_1__["revealFlag"])();
  Object(_flagAnimation_js__WEBPACK_IMPORTED_MODULE_1__["heroFlag"])();
  Object(_flagAnimation_js__WEBPACK_IMPORTED_MODULE_1__["subFlag"])();
  Object(_heroAnimation_js__WEBPACK_IMPORTED_MODULE_2__["heroImage"])();
  Object(_heroAnimation_js__WEBPACK_IMPORTED_MODULE_2__["heroHeadline"])();
  Object(_headlineAnimation_js__WEBPACK_IMPORTED_MODULE_0__["revealInvolved"])();
  Object(_headlineAnimation_js__WEBPACK_IMPORTED_MODULE_0__["revealPartner"])(); // filterIsotope();
  // revealHeadline();

  if ($(window).width() <= 1024) {// mobileSubs();
  } else {// subHover();
    } // threeColReveal();
  // mediaPostReveal();
  // blogReveal();
  // heroLock();

});
window.addEventListener('resize', function () {//   if ($(window).width() < 1024) {
  //     mobileSubs();
  //   }
  //   else {
  //     subHover();
  //  }
});

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/js/bundle.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seemax/code/mcc/wp-content/themes/seemax-theme/src/js/bundle.js */"./src/js/bundle.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9leHRlcm5hbExpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ZsYWdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGxpbmVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVyb0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ob21lLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xvYWRNYWlsY2hpbXBTY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGlubmVkU3ViTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyJdLCJuYW1lcyI6WyJleHRMaW5rcyIsIiQiLCJlYWNoIiwiaGFzQ2xhc3MiLCJhIiwiUmVnRXhwIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwidGVzdCIsImhyZWYiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJTcGxpdFRleHQiLCJyZXZlYWxGbGFnIiwiJGZsYWdDbGlwIiwiZmluZCIsIiRjb250ZW50Iiwic2V0Iiwib3ZlcmZsb3ciLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwidGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJmcm9tIiwicm90YXRpb25YIiwic3RhZ2dlciIsImFtb3VudCIsImhlcm9GbGFnIiwiJGZhY3QiLCJsZW5ndGgiLCIkYmFubmVyIiwiJGgyIiwiJGg0Iiwic3BsaXRoNCIsInR5cGUiLCJzcGxpdGgyIiwiY2hhcnNoNCIsImNoYXJzIiwiY2hhcnNoMiIsImF0dHIiLCJ5Iiwib3BhY2l0eSIsInRvIiwic3ViRmxhZyIsIiRzdWJEZXNjIiwiJHN1YkRlc2NoNCIsIiRzdWJEZXNjcCIsIiRzdWJGbGFnIiwiJGgzIiwic3BsaXRoMyIsImNoYXJzaDMiLCJkZWxheSIsInJldmVhbEhlYWRsaW5lIiwiJGhlYWRsaW5lVHJpZ2dlciIsIiRoZWFkbGluZSIsIiRwIiwiJGJ1dHRvbiIsIm15U3BsaXRUZXh0Iiwid29yZHMiLCJyZXZlYWxJbnZvbHZlZCIsIiRzdGVwIiwiY2hpbGRyZW4iLCJzY2FsZSIsInJldmVhbFBhcnRuZXIiLCIkcGFydG5lciIsImZpcnN0IiwiJGtpZHMiLCJoZXJvSW1hZ2UiLCIkaGVybyIsIiR0aGVJbWFnZSIsIiRoMSIsInNwbGl0aDEiLCJjaGFyc2gxIiwiaW1nVEwiLCJoZXJvSGVhZGxpbmUiLCJzbGlja0l0Iiwic2xpY2siLCJjZW50ZXJNb2RlIiwiZG90cyIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJ2YXJpYWJsZVdpZHRoIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsInNwZWVkIiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImNzc0Vhc2UiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXJyb3dzIiwibWFpbGNoaW1wU2NyaXB0cyIsInRoaXNPbmVTY3JpcHQiLCJhcHBlbmQiLCJtZW51T3BlbiIsInBhdXNlZCIsImZ1bGxNZW51IiwibGlua3MiLCJoYW0xIiwiaGFtMiIsImhhbTMiLCJ0b3AiLCJjbGlwUGF0aCIsImJhY2tncm91bmRDb2xvciIsInJvdGF0aW9uIiwieCIsIndpZHRoIiwib24iLCJyZXZlcnNlIiwicmVtb3ZlQ2xhc3MiLCJwbGF5IiwiYWRkQ2xhc3MiLCJidWlsZFNlcnZpY2VzTmF2IiwiaGVybyIsInN1Yk5hdiIsImFmdGVyIiwiYnVpbGRTZXJ2aWNlc0xpbmtzIiwidGhpc0lEIiwiY2xlYW5JRCIsInJlcGxhY2UiLCJ0aGlzTmFtZSIsImh0bWwiLCJ0aGlzTGluayIsInBpblNlcnZpY2VzTGlua3MiLCJoZWFkZXJIZWlnaHQiLCJvdXRlckhlaWdodCIsInN1Yk5hdkhlaWdodCIsInNwYWNlckhlaWdodCIsInN0IiwiY3JlYXRlIiwicGluIiwicGluU3BhY2luZyIsImVuZCIsInByZUxvYWRlck9uIiwiZmFkZU91dCIsInJlbW92ZSIsIm9ubG9hZCIsImUiLCJzbW9vdGhTY3JvbGxpbmciLCJ0aGVMaW5rIiwiU2Nyb2xsVG9QbHVnaW4iLCJ0YXJnZXQiLCJzY3JvbGxUbyIsIm9mZnNldFkiLCJiaW5kIiwic2NyZWVuIiwibWVudUNsb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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QkF6SCxNQUFNLENBQUNrSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXLENBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLENBUkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wcmVsb2FkZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9iaWxlTWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9leHRlcm5hbExpbmtzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2xvYWRNYWlsY2hpbXBTY3JpcHRzLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3Ntb290aFNjcm9sbC5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9waW5uZWRTdWJOYXYuanMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvaG9tZS1jYXJvdXNlbC5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy93aW5kb3dMb2FkLmpzJztcblxuXG4iLCJsZXQgZXh0TGlua3MgPSAoKSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKCdleHRlcm5hbCBsaW5rJyk7XG4gICQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCd2aWRlb0J1dHRvbicpKSB7XG4gICAgICB2YXIgYSA9IG5ldyBSZWdFeHAoJy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLycpO1xuICAgICAgaWYoIWEudGVzdCh0aGlzLmhyZWYpKSB7XG4gICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgZXh0TGlua3MoKTtcbn0pO1xuIiwiZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU3BsaXRUZXh0KTtcblxuXG5leHBvcnQgbGV0IHJldmVhbEZsYWcgPSAoKSA9PiB7XG5cbiAgJCgnLndoaXRlRmxhZ0FuaW1hdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgJGZsYWdDbGlwID0gJCh0aGlzKS5maW5kKCcuZmxhZ0NsaXAnKTtcbiAgICBsZXQgJGNvbnRlbnQgPSAkKHRoaXMpLmZpbmQoJy5jb250ZW50Jyk7XG5cbiAgICBnc2FwLnNldCgkKHRoaXMpLCB7IFxuICAgICAgb3ZlcmZsb3c6J2hpZGRlbidcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRjb250ZW50LCB7XG4gICAgICBwZXJzcGVjdGl2ZToyMDAwLFxuICAgICAgdHJhbnNmb3JtU3R5bGU6ICdwcmVzZXJ2ZS0zZCdcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRmbGFnQ2xpcCwge1xuICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgIH0pO1xuICAgIFxuXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgIGVhc2U6IFwiZWxhc3RpYy5vdXQoMC41LCAwLjUpXCJcbiAgICAgIH0sXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6ICQodGhpcyksXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b20tPTIwMFwiLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRsLmZyb20oJGZsYWdDbGlwLCB7XG4gICAgICByb3RhdGlvblg6LTEyMCwgXG4gICAgICAvLyBoZWlnaHQ6MCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGxldCBoZXJvRmxhZyA9ICgpID0+IHtcbiAgICBcbiAgbGV0ICRmYWN0ID0gJCgnLmhlcm9CYW5uZXInKS5maW5kKCcuc2luZ2xlLWhlcm8tZmFjdCcpO1xuICBcbiAgaWYoJGZhY3QubGVuZ3RoKSB7XG4gIFxuICAgIGxldCAkYmFubmVyID0gJCgnLmhlcm9CYW5uZXInKS5maW5kKCcuZmxhZ0JhY2snKTtcbiAgICBnc2FwLnNldCgkYmFubmVyLCB7cGVyc3BlY3RpdmU6MTAwMH0pO1xuICAgIFxuICAgICRmYWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgbGV0ICRoMiA9ICQodGhpcykuZmluZCgnaDInKTtcbiAgICAgIGxldCAkaDQgPSAkKHRoaXMpLmZpbmQoJ2g0Jyk7XG4gICAgICBsZXQgc3BsaXRoNCA9IG5ldyBTcGxpdFRleHQoJGg0LCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgICBsZXQgc3BsaXRoMiA9IG5ldyBTcGxpdFRleHQoJGgyLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgICBsZXQgY2hhcnNoNCA9IHNwbGl0aDQuY2hhcnM7IFxuICAgICAgbGV0IGNoYXJzaDIgPSBzcGxpdGgyLmNoYXJzOyBcblxuICAgICAgJChjaGFyc2gyKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykpO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtbm9zbmlwcGV0JywnJyk7XG4gICAgICAgIC8vICQodGhpcykuaGlkZSgpO1xuICAgICAgfSk7XG4gIFxuICAgICAgJChjaGFyc2g0KS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCQodGhpcykpO1xuICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtbm9zbmlwcGV0JywnJyk7XG4gICAgICAgIC8vICQodGhpcykuaGlkZSgpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgZ3NhcC5zZXQoW2NoYXJzaDQsIGNoYXJzaDJdLCB7XG4gICAgICAgIHk6MCwgXG4gICAgICAgIHJvdGF0aW9uWDotMTAwLCBcbiAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgICAgfSk7XG4gIFxuICAgICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgZHVyYXRpb246IDEuMjUsIFxuICAgICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMSlcIixcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgIHRyaWdnZXI6ICQodGhpcyksXG4gICAgICAgICAgc3RhcnQ6IFwiYm90dG9tIGJvdHRvbS09MTAwXCIsXG4gICAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgICAgIHRsLnRvKGNoYXJzaDIsIHtcbiAgICAgICAgeTowLCBcbiAgICAgICAgb3BhY2l0eToxLCBcbiAgICAgICAgcm90YXRpb25YOjAsIFxuICAgICAgICBzdGFnZ2VyOiB7XG4gICAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICAgIGZyb206IFwicmFuZG9tXCIsIFxuICAgICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCJcbiAgICAgICAgfVxuICAgICAgfSwgJ2NvbWVpbicpO1xuICAgICAgdGwudG8oY2hhcnNoNCwge1xuICAgICAgICB5OjAsIFxuICAgICAgICBvcGFjaXR5OjEsIFxuICAgICAgICByb3RhdGlvblg6MCwgXG4gICAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgICBhbW91bnQ6IDAuMywgXG4gICAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgICB9XG4gICAgICB9LCAnY29tZWluKz0wLjQnKTtcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBsZXQgc3ViRmxhZyA9ICgpID0+IHtcbiAgXG4gIFxuICAkKCcuc3ViRmxhZ0FuaW1hdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcblxuICAgIGxldCAkc3ViRGVzYyA9ICQodGhpcykuZmluZCgnLnN1YkRlc2NyaXB0aW9uJyk7XG4gICAgbGV0ICRzdWJEZXNjaDQgPSAkc3ViRGVzYy5maW5kKCdoNCcpO1xuICAgIGxldCAkc3ViRGVzY3AgPSAkc3ViRGVzYy5maW5kKCdwJyk7XG4gICAgbGV0ICRzdWJGbGFnID0gJCh0aGlzKS5maW5kKCcuc3ViRmxhZycpO1xuICAgIGxldCAkaDMgPSAkc3ViRmxhZy5maW5kKCdoMycpO1xuICAgIGxldCAkaDQgPSAkc3ViRmxhZy5maW5kKCdoNCcpO1xuICAgIGxldCAkY29udGVudCA9ICQodGhpcykuZmluZCgnLmNvbnRlbnQnKTtcbiAgICBsZXQgc3BsaXRoNCA9IG5ldyBTcGxpdFRleHQoJGg0LCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgbGV0IHNwbGl0aDMgPSBuZXcgU3BsaXRUZXh0KCRoMywge3R5cGU6XCJ3b3JkcywgY2hhcnNcIn0pO1xuICAgIGxldCBjaGFyc2g0ID0gc3BsaXRoNC5jaGFyczsgXG4gICAgbGV0IGNoYXJzaDMgPSBzcGxpdGgzLmNoYXJzOyBcblxuXG4gICAgJChjaGFyc2gzKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpKTtcbiAgICAgICQodGhpcykuYXR0cignZGF0YS1ub3NuaXBwZXQnLCcnKTtcbiAgICAgIC8vICQodGhpcykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJChjaGFyc2g0KS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpKTtcbiAgICAgICQodGhpcykuYXR0cignZGF0YS1ub3NuaXBwZXQnLCcnKTtcbiAgICAgIC8vICQodGhpcykuaGlkZSgpO1xuICAgIH0pO1xuICAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coJHN1YkRlc2NLaWRzKTtcblxuICAgIGdzYXAuc2V0KCQodGhpcyksIHtcbiAgICAgIG92ZXJmbG93OidoaWRkZW4nXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldCgkY29udGVudCwge1xuICAgICAgcGVyc3BlY3RpdmU6MjAwMCwgXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldCgkc3ViRmxhZywge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRzdWJEZXNjLCB7XG4gICAgICBwZXJzcGVjdGl2ZToyMDAwLCBcbiAgICB9KTtcbiAgICBcbiAgICBcblxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZGVsYXk6MS4yLFxuICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgIGVhc2U6IFwiZWxhc3RpYy5vdXQoMC41LCAwLjUpXCJcbiAgICAgIH0sXG4gICAgICAvLyBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAvLyAgIHRyaWdnZXI6ICQoJ2hlYWRlcicpLFxuICAgICAgLy8gICBzdGFydDogXCJ0b3AgdG9wLT0xXCIsXG4gICAgICAvLyAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiLFxuICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgLy8gdGwuZnJvbSgkc3ViRmxhZywge1xuICAgIC8vICAgcm90YXRpb25YOi0xMjAsIFxuICAgIC8vICAgZHVyYXRpb246IDEuNSwgXG4gICAgLy8gfSwgJ2NvbWVpbicpO1xuXG4gICAgdGwuZnJvbShbY2hhcnNoMywgY2hhcnNoNF0sIHtcbiAgICAgIHk6MjQsIFxuICAgICAgb3BhY2l0eTowLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcicsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfSxcbiAgICB9LCAnY29tZWluJyk7XG5cbiAgICB0bC5mcm9tKCRzdWJEZXNjaDQsIHtcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHk6MTQsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfVxuICAgIH0sICdjb21laW4rPTAuMycpO1xuXG4gICAgdGwuZnJvbSgkc3ViRGVzY3AsIHtcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHk6MTQsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfVxuICAgIH0sICdjb21laW4rPTAuNScpO1xuICB9KTtcbn1cblxuXG4iLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTcGxpdFRleHQpO1xuXG5leHBvcnQgbGV0IHJldmVhbEhlYWRsaW5lID0gKCkgPT4ge1xuXG4gICQoJy5hbmltYXRpb25PbmUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgbGV0ICRoZWFkbGluZVRyaWdnZXIgPSAkKHRoaXMpLmZpbmQoJy5oZWFkbGluZVRyaWdnZXInKTtcbiAgICBsZXQgJGhlYWRsaW5lID0gJCh0aGlzKS5maW5kKCdoMicpO1xuICAgIGxldCAkcCA9ICQodGhpcykuZmluZCgncCcpO1xuICAgIGxldCAkYnV0dG9uID0gJCh0aGlzKS5maW5kKCcuc2VlbWF4LWJ1dHRvbicpO1xuICAgIGxldCBteVNwbGl0VGV4dCA9IG5ldyBTcGxpdFRleHQoJGhlYWRsaW5lLCB7dHlwZTpcIndvcmRzXCJ9KTtcbiAgICAvLyBsZXQgY2hhcnMgPSBteVNwbGl0VGV4dC5jaGFyczsgXG4gICAgbGV0IHdvcmRzID0gbXlTcGxpdFRleHQud29yZHM7IFxuXG4gICAgLy8gJCh3b3JkcykuYWRkQ2xhc3MoJ3NwbGl0V29yZHMnKTtcbiAgICAvLyAkKGNoYXJzKS5hZGRDbGFzcygnc3BsaXRDaGFycycpO1xuXG4gICAgZ3NhcC5zZXQod29yZHMsIHt5OlwiMjRweFwiLCBvcGFjaXR5OjB9KTtcbiAgICBpZigkcC5sZW5ndGgpIHtcbiAgICAgIGdzYXAuc2V0KCRwLCB7eTpcIjI0cHhcIiwgb3BhY2l0eTowfSk7XG4gICAgfVxuICAgIGdzYXAuc2V0KCRidXR0b24sIHtvcGFjaXR5OjB9KTtcbiAgICBcblxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZHVyYXRpb246IDEuMjUsIFxuICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEpXCIsXG4gICAgICB9LFxuICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICB0cmlnZ2VyOiAkaGVhZGxpbmVUcmlnZ2VyLFxuICAgICAgICBzdGFydDogXCJjZW50ZXIgYm90dG9tXCIsXG4gICAgICAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiLFxuICAgICAgICAvLyBtYXJrZXJzOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgXG4gICAgdGwudG8od29yZHMsIHt5OjAsIG9wYWNpdHk6MSwgc3RhZ2dlcjoge2Ftb3VudDogMC4xNSwgZWFzZTogXCJwb3dlcjIuaW5PdXRcIn19LCAnY29tZWluJyk7XG4gICAgaWYoJHAubGVuZ3RoKSB7XG4gICAgICB0bC50bygkcCwge3k6MCwgb3BhY2l0eToxfSwgJ2NvbWVpbis9MC4yNScpO1xuICAgIH1cbiAgICB0bC50bygkYnV0dG9uLCB7b3BhY2l0eToxfSwgJ2NvbWVpbis9MC4yNScpO1xuICB9KTtcbn1cblxuZXhwb3J0IGxldCByZXZlYWxJbnZvbHZlZCA9ICgpID0+IHtcblxuICBpZigkKCdtYWluJykuaGFzQ2xhc3MoJ2dldC1pbnZvbHZlZC1wYWdlJykpe1xuXG4gICAgbGV0ICRzdGVwID0gJCgnLmludm9sdmVkU3RlcCcpLmNoaWxkcmVuKCk7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWxheToxLFxuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZHVyYXRpb246IC43NSwgXG4gICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMSlcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldCgkc3RlcCwge3RyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIn0pO1xuICAgICAgIFxuICAgIHRsLmZyb20oJHN0ZXAsIHtcbiAgICAgIHNjYWxlOjAuOCxcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgIGFtb3VudDogMC4zNSwgXG4gICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCJcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGxldCByZXZlYWxQYXJ0bmVyID0gKCkgPT4ge1xuXG4gIGlmKCQoJ21haW4nKS5oYXNDbGFzcygncGFydG5lcnMtcGFnZScpKXtcblxuICAgIGxldCAkcGFydG5lciA9ICQoJy5zaW5nbGUtcGFydG5lcicpLmZpcnN0KCk7XG5cbiAgICBsZXQgJGtpZHMgPSAkcGFydG5lci5jaGlsZHJlbigpO1xuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVsYXk6MSxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjIsIFxuICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEpXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gIC8vICAgZ3NhcC5zZXQoJHN0ZXAsIHt0cmFuc2Zvcm1PcmlnaW46XCI1MCUgNTAlXCJ9KTtcbiAgICAgICBcbiAgICB0bC5mcm9tKCRraWRzLCB7XG4gICAgICB5OicyMHB4JyxcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBmcm9tOidyYW5kb20nLFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cblxuIiwiZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU3BsaXRUZXh0KTtcblxuXG5leHBvcnQgbGV0IGhlcm9JbWFnZSA9ICgpID0+IHtcblxuICBsZXQgJGhlcm8gPSAkKCcuaGVyb0ltYWdlJyk7XG5cbiAgaWYgKCRoZXJvLmxlbmd0aCkge1xuICAgIFxuICAgIGxldCAkdGhlSW1hZ2UgPSAkaGVyby5maW5kKCcudGhlSW1hZ2UnKTtcbiAgICBsZXQgJGNvbnRlbnQgPSAkaGVyby5maW5kKCcuY29udGVudCcpO1xuICAgIGxldCAkaDEgPSAkaGVyby5maW5kKCcuaG9tZUhlcm9IZWFkbGluZScpO1xuICAgIGxldCBzcGxpdGgxID0gbmV3IFNwbGl0VGV4dCgkaDEsIHt0eXBlOlwid29yZHMsIGNoYXJzXCJ9KTsgXG4gICAgbGV0IGNoYXJzaDEgPSBzcGxpdGgxLmNoYXJzO1xuICAgIFxuICAgIFxuICAvLyAgIGxldCAkZmxhZ0NsaXAgPSAkKHRoaXMpLmZpbmQoJy5mbGFnQ2xpcCcpO1xuXG4gICAgZ3NhcC5zZXQoJGNvbnRlbnQsIHtcbiAgICAgIHBlcnNwZWN0aXZlOjIwMDAsIFxuICAgIH0pO1xuXG4gICAgZ3NhcC5zZXQoJHRoZUltYWdlLCB7IFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOlwiNTAlIDUwJVwiLFxuICAgICAgc2NhbGU6MS4yNSxcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KGNoYXJzaDEsIHtcbiAgICAgIHk6MCwgXG4gICAgICByb3RhdGlvblg6LTcwLCBcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4gICAgfSk7XG4gIFxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVsYXk6MC42LFxuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZHVyYXRpb246IC44NSwgXG4gICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS42KVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBcbiAgICB0bC50byhjaGFyc2gxLCB7XG4gICAgICB5OjAsIFxuICAgICAgb3BhY2l0eToxLCBcbiAgICAgIHJvdGF0aW9uWDowLCBcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBmcm9tOiBcInJhbmRvbVwiLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfVxuICAgIH0sICdjb21laW4nKTtcblxuXG4gICAgbGV0IGltZ1RMID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogMTUsIFxuICAgICAgICBlYXNlOiBcIm5vbmVcIlxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGltZ1RMLnRvKCR0aGVJbWFnZSwge1xuICAgICAgc2NhbGU6MVxuICAgIH0pO1xuXG4gICAgJChjaGFyc2gxKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAvLyBjb25zb2xlLmxvZygkKHRoaXMpKTtcbiAgICAgICQodGhpcykuYXR0cignZGF0YS1ub3NuaXBwZXQnLCcnKTtcbiAgICB9KTtcbiAgXG4gIH1cbn1cblxuZXhwb3J0IGxldCBoZXJvSGVhZGxpbmUgPSAoKSA9PiB7XG4gICAgXG4vLyAgIGxldCAkaGVybyA9ICQoJy5oZXJvSGVhZGxpbmUnKTtcbiAgXG4vLyAgIGlmICgkaGVyby5sZW5ndGgpIHtcbiAgICBcbiAgICBcblxuLy8gICAgIGxldCAkaGVyb0lubmVyID0gJCgnLmhlcm9IZWFkbGluZScpLmZpbmQoJy5jb250ZW50Jyk7XG4vLyAgICAgbGV0ICRoMSA9ICRoZXJvLmZpbmQoJy5ob21lSGVyb0hlYWRsaW5lJyk7XG4vLyAgICAgbGV0ICRoNCA9ICRoZXJvLmZpbmQoJ2g0Jyk7XG4vLyAgICAgbGV0ICRwID0gJGhlcm8uZmluZCgncCcpO1xuLy8gICAgIGxldCAkaHIgPSAkaGVyby5maW5kKCdocicpO1xuLy8gICAgIGxldCBzcGxpdGg0ID0gbmV3IFNwbGl0VGV4dCgkaDQsIHt0eXBlOlwid29yZHMsIGNoYXJzXCJ9KTtcbi8vICAgICBsZXQgc3BsaXRoMSA9IG5ldyBTcGxpdFRleHQoJGgxLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4vLyAgICAgLy8gbGV0IHNwbGl0cCA9IG5ldyBTcGxpdFRleHQoJHAsIHt0eXBlOlwid29yZHNcIn0pO1xuLy8gICAgIGxldCBjaGFyc2g0ID0gc3BsaXRoNC53b3JkczsgXG4vLyAgICAgbGV0IGNoYXJzaDEgPSBzcGxpdGgxLmNoYXJzO1xuLy8gICAgIC8vIGxldCB3b3Jkc3AgPSBzcGxpdHAud29yZHM7XG4gICAgXG4vLyAgICAgZ3NhcC5zZXQoJGhlcm9Jbm5lciwge3BlcnNwZWN0aXZlOjEwMDB9KTtcblxuLy8gICAgIGdzYXAuc2V0KGNoYXJzaDEsIHtcbi8vICAgICAgIHk6MCwgXG4vLyAgICAgICByb3RhdGlvblg6LTcwLCBcbi8vICAgICAgIG9wYWNpdHk6MCxcbi8vICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4vLyAgICAgfSk7XG5cbi8vICAgICBpZiAoY2hhcnNoNC5sZW5ndGgpIHtcbi8vICAgICAgIGdzYXAuc2V0KGNoYXJzaDQsIHtcbi8vICAgICAgICAgeTowLCBcbi8vICAgICAgICAgcm90YXRpb25YOi03MCwgXG4vLyAgICAgICAgIG9wYWNpdHk6MCxcbi8vICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbi8vICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGlmICgkcC5sZW5ndGgpIHtcbi8vICAgICAgIGdzYXAuc2V0KCRwLCB7XG4vLyAgICAgICAgIG9wYWNpdHk6MCxcbi8vICAgICAgICAgeTotMTgsXG4vLyAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4vLyAgICAgICB9KTsgXG4vLyAgICAgICBnc2FwLnNldCgkaHIsIHtcbi8vICAgICAgICAgb3BhY2l0eTowLFxuLy8gICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuLy8gICAgICAgfSk7ICBcbi8vICAgICB9XG4gICAgXG5cbi8vICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbi8vICAgICAgIGRlbGF5OjAuNixcbi8vICAgICAgIGRlZmF1bHRzOiB7XG4vLyAgICAgICAgIGR1cmF0aW9uOiAuODUsIFxuLy8gICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNilcIixcbi8vICAgICAgIH0sXG4vLyAgICAgICAvLyBzY3JvbGxUcmlnZ2VyOiB7XG4vLyAgICAgICAvLyAgIHRyaWdnZXI6ICRoZXJvLFxuLy8gICAgICAgLy8gICBzdGFydDogXCJjZW50ZXIgYm90dG9tXCIsXG4vLyAgICAgICAvLyAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiLFxuLy8gICAgICAgLy8gfVxuLy8gICAgIH0pO1xuICAgIFxuLy8gICAgIHRsLnRvKGNoYXJzaDEsIHtcbi8vICAgICAgIHk6MCwgXG4vLyAgICAgICBvcGFjaXR5OjEsIFxuLy8gICAgICAgcm90YXRpb25YOjAsIFxuLy8gICAgICAgc3RhZ2dlcjoge1xuLy8gICAgICAgICBhbW91bnQ6IDAuMywgXG4vLyAgICAgICAgIGZyb206IFwicmFuZG9tXCIsIFxuLy8gICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4vLyAgICAgICB9XG4vLyAgICAgfSwgJ2NvbWVpbicpO1xuXG4vLyAgICAgaWYgKGNoYXJzaDQubGVuZ3RoKSB7ICBcbi8vICAgICAgIHRsLnRvKGNoYXJzaDQsIHtcbi8vICAgICAgICAgeTowLCBcbi8vICAgICAgICAgb3BhY2l0eToxLCBcbi8vICAgICAgICAgcm90YXRpb25YOjAsIFxuLy8gICAgICAgICBkdXJhdGlvbjowLjUsXG4vLyAgICAgICAgIHN0YWdnZXI6IHtcbi8vICAgICAgICAgICBhbW91bnQ6IDAuMSwgXG4vLyAgICAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4vLyAgICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuLy8gICAgICAgICB9XG4vLyAgICAgICB9LCAnY29tZWluMi09MC4yJyk7XG4vLyAgICAgfVxuXG4vLyAgICAgaWYgKCRwLmxlbmd0aCkge1xuLy8gICAgICAgdGwudG8oWyRwLCAkaHJdLCB7XG4vLyAgICAgICAgIG9wYWNpdHk6MSwgXG4vLyAgICAgICAgIHk6MCxcbi8vICAgICAgICAgZHVyYXRpb246MC44LFxuLy8gICAgICAgfSwgJ2NvbWVpbjItPTAuMjUnKTtcbi8vICAgICB9XG4vLyAgIH1cbn0iLCJsZXQgc2xpY2tJdCA9ICgpID0+IHtcbiAgJCgnLmNlbnRlci1jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGNlbnRlclBhZGRpbmc6ICcxNjBweCcsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgc3BlZWQ6MTIwMCxcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgIHBhdXNlT25Ib3ZlcjpmYWxzZSxcbiAgICBjc3NFYXNlOiAnY3ViaWMtYmV6aWVyKC4xMywuNzksLjIzLC45NiknLFxuICAgIC8vIGNzc0Vhc2U6ICdlYXNlSW5PdXRDaXJjJyxcbiAgICBwcmV2QXJyb3c6JCgnLnByZXZBcnJvdycpLFxuICAgIG5leHRBcnJvdzokKCcubmV4dEFycm93JyksXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgc2xpY2tJdCgpO1xufSk7IiwiLy8gTWFrZSBhIHZhcmlhYmxlIGZvciB0aGUgTWFpbGNoaW1wIFNjcmlwdHNcbmxldCBtYWlsY2hpbXBTY3JpcHRzID0gKCkgPT4ge1xuICBsZXQgdGhpc09uZVNjcmlwdCA9ICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvL3MzLmFtYXpvbmF3cy5jb20vZG93bmxvYWRzLm1haWxjaGltcC5jb20vanMvbWMtdmFsaWRhdGUuanNcIj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4oZnVuY3Rpb24oJCkge3dpbmRvdy5mbmFtZXMgPSBuZXcgQXJyYXkoKTt3aW5kb3cuZnR5cGVzID0gbmV3IEFycmF5KCk7Zm5hbWVzWzBdPVwiRU1BSUxcIjtmdHlwZXNbMF09XCJlbWFpbFwiO2ZuYW1lc1sxXT1cIkZOQU1FXCI7ZnR5cGVzWzFdPVwidGV4dFwiO2ZuYW1lc1syXT1cIkxOQU1FXCI7ZnR5cGVzWzJdPVwidGV4dFwiO30oalF1ZXJ5KSk7dmFyICRtY2ogPSBqUXVlcnkubm9Db25mbGljdCh0cnVlKTs8L3NjcmlwdD4nXG4gICQoJ2JvZHknKS5hcHBlbmQodGhpc09uZVNjcmlwdCk7XG59XG5cbi8vIElmIHRoZSBtYWlsY2hpbXAgZm9yIGlzIFBlcmZvcm1hbmNlT2JzZXJ2ZXJFbnRyeUxpc3QsIGxvYWQgdGhlIHNjcmlwdHNcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigkKSB7XG4gIGlmKCQoJyNtY19lbWJlZF9zaWdudXAnKS5sZW5ndGgpIHtcbiAgICBtYWlsY2hpbXBTY3JpcHRzKCk7XG4gIH1cbn0pOyIsImNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xuXHRsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG5cdFx0cGF1c2VkOnRydWUsXG5cdFx0ZGVmYXVsdHM6IHsgLy8gY2hpbGRyZW4gaW5oZXJpdCB0aGVzZSBkZWZhdWx0c1xuXHRcdFx0ZHVyYXRpb246MC4zLFxuXHRcdFx0ZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuXHRcdH0sXG5cdH0pO1xuXHRsZXQgZnVsbE1lbnUgPSAkKFwiLm1haW4tbmF2XCIpO1xuXHRsZXQgbGlua3MgPSAkKFwibmF2IGFcIik7XG5cdGxldCBoYW0xID0gJChcIi5oYW1Ub3BcIik7XG5cdGxldCBoYW0yID0gJChcIi5oYW1NaWRcIik7XG5cdGxldCBoYW0zID0gJChcIi5oYW1Cb3RcIik7XG5cdFxuXHR0bC5zZXQoJChcImJvZHlcIiksIHtvdmVyZmxvdzpcImhpZGRlblwifSk7XG5cdHRsLnRvKGZ1bGxNZW51LCB7dG9wOlwiMCVcIiwgY2xpcFBhdGg6XCJwb2x5Z29uKDEwMCUgMCwgMTAwJSAxMDAlLCA1MCUgMTAwJSwgMCAxMDAlLCAwIDApXCIsIGVhc2U6IFwiYmFjay5pbigwLjIpXCJ9LCBcIm1lbnVPcGVuXCIpO1xuXHR0bC50byhsaW5rcywge29wYWNpdHk6MSwgeTpcIjAlXCIsIHN0YWdnZXI6IHthbW91bnQ6LjE1fX0sIFwibWVudU9wZW4rPTAuMTVcIik7XG5cdHRsLnRvKGhhbTEsIHtiYWNrZ3JvdW5kQ29sb3I6JyNCQkZGRDEnLCByb3RhdGlvbjotMzE1LHg6MCAseTo2LH0sIFwibWVudU9wZW5cIik7XG5cdHRsLnRvKGhhbTIsIHtiYWNrZ3JvdW5kQ29sb3I6JyNCQkZGRDEnLCB3aWR0aDowfSwgXCJtZW51T3BlblwiKTtcblx0dGwudG8oaGFtMywge2JhY2tncm91bmRDb2xvcjonI0JCRkZEMScsIHJvdGF0aW9uOjMxNSwgeDowLCB5Oi02LH0sIFwibWVudU9wZW5cIik7XG5cblx0XG5cblx0JChcIi5tZW51VG9nZ2xlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoXCJuYXZPcGVuXCIpKSB7XG5cdFx0XHR0bC5yZXZlcnNlKCk7XG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwibmF2T3BlblwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGwucGxheSgpO1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcIm5hdk9wZW5cIik7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdGw7XG59XG5tZW51T3BlbigpO1xuIiwibGV0IGJ1aWxkU2VydmljZXNOYXYgPSAoKSA9PiB7XG4gIHZhciBoZXJvID0gJCgnLnBhZ2Utc2VydmljZXMgLmhlcm8tc2VjdGlvbicpO1xuICB2YXIgc3ViTmF2ID0gJzxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1zdWJuYXZcIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPjwvZGl2PjwvZGl2PidcbiAgJChoZXJvKS5hZnRlcihzdWJOYXYpO1xufVxuXG5cbmxldCBidWlsZFNlcnZpY2VzTGlua3MgPSAoKSA9PiB7XG5cbiAgJCgnLnNpbmdsZS1mdWxsLXNlcnZpY2UnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGxldCB0aGlzSUQgPSAkKHRoaXMpLmZpbmQoJy5mdWxsLXNlcnZpY2UtaW1hZ2UtaGFsZicpLmF0dHIoJ2lkJyk7XG4gICAgbGV0IGNsZWFuSUQgPSB0aGlzSUQucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIlwiKVxuICAgIGxldCB0aGlzTmFtZSA9ICQodGhpcykuZmluZCgnaDInKS5odG1sKCk7XG4gICAgbGV0IHRoaXNMaW5rID0gXCI8YSBocmVmPScjXCIrY2xlYW5JRCtcIic+XCIrdGhpc05hbWUrXCI8L2E+XCI7XG4gICAgJCgnLnNlcnZpY2VzLXN1Ym5hdiAuY29udGVudCcpLmFwcGVuZCh0aGlzTGluayk7XG4gIH0pXG59XG5cbmxldCBwaW5TZXJ2aWNlc0xpbmtzID0gKCkgPT4ge1xuXG4gIGxldCBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKTsgXG4gIGxldCBzdWJOYXZIZWlnaHQgPSAkKCcuc2VydmljZXMtc3VibmF2Jykub3V0ZXJIZWlnaHQoKTtcbiAgbGV0IHNwYWNlckhlaWdodCA9IGhlYWRlckhlaWdodCArIHN1Yk5hdkhlaWdodDtcbiAgbGV0IHN0ID0gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgIHRyaWdnZXI6IFwiLnNlcnZpY2VzLWZ1bGwtc2VjdGlvblwiLFxuICAgIHBpbjogXCIuc2VydmljZXMtc3VibmF2XCIsXG4gICAgc3RhcnQ6IFwiLT1cIitzcGFjZXJIZWlnaHQrXCJcIixcbiAgICBwaW5TcGFjaW5nOiBmYWxzZSxcbiAgICBlbmQ6IFwiKz05OTk5OTk5OTk5XCIgXG4gIH0pO1xufVxuXG5pZiAoJCgnYm9keScpLmhhc0NsYXNzKCdwYWdlLXNlcnZpY2VzJykpIHtcbiAgLy8gYWxlcnQoXCJoZXJlXCIpO1xuICBidWlsZFNlcnZpY2VzTmF2KCk7XG4gIGJ1aWxkU2VydmljZXNMaW5rcygpO1xuICBwaW5TZXJ2aWNlc0xpbmtzKCk7XG59IiwibGV0IHByZUxvYWRlck9uID0gKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZygnbm90LXByZWxvYWRlcicpO1xuXHQkKCcjcHJlbG9hZGVyJykuZmFkZU91dCgnc2xvdycsZnVuY3Rpb24oKXskKHRoaXMpLnJlbW92ZSgpO30pO1xufVxuXG53aW5kb3cub25sb2FkID0gKGUpID0+IHtcblx0cHJlTG9hZGVyT24oKTtcbn1cbiIsIi8vIEltcG9ydCBUaGUgTWVudSBDbG9zZSBGdW5jdGlvbiB0byB1c2Ugb24gbW9iaWxlXG4vLyBpbXBvcnQgeyBtZW51Q2xvc2UgfSBmcm9tICcuL21vYmlsZU1lbnUuanMnO1xuXG5sZXQgc21vb3RoU2Nyb2xsaW5nID0gKHRoZUxpbmspID0+IHtcblxuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBsZXQgdGFyZ2V0ID0gJCh0aGVMaW5rKS5hdHRyKFwiaHJlZlwiKTtcbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgbGV0IHN1Yk5hdkhlaWdodCA9ICQoJy5zdHJhaW4tc3VibmF2Jykub3V0ZXJIZWlnaHQoKTtcbiAgbGV0IHNwYWNlckhlaWdodCA9IGhlYWRlckhlaWdodCArIHN1Yk5hdkhlaWdodDtcbiAgXG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2Utc3RyYWlucycpKSB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtkdXJhdGlvbjowLjUsIGVhc2U6IFwiY2lyYy5vdXRcIiwgc2Nyb2xsVG86e3k6dGFyZ2V0LCBvZmZzZXRZOnNwYWNlckhlaWdodH19KTtcbiAgfSBlbHNlIHtcbiAgICBnc2FwLnRvKHdpbmRvdywge2R1cmF0aW9uOjAuNSwgZWFzZTogXCJjaXJjLm91dFwiLCBzY3JvbGxUbzp7eTp0YXJnZXQsIG9mZnNldFk6aGVhZGVySGVpZ2h0fX0pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBcbiAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgLy8gSUYgSVRcIlMgTU9CSUxFIC8gSVBBRCBPUiBTTUFMTEVSXG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI1KXtcbiAgICAgIG1lbnVDbG9zZSgpO1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH1cbiAgfSk7XG59KTsiLCJpbXBvcnQgeyByZXZlYWxIZWFkbGluZSB9IGZyb20gJy4vaGVhZGxpbmVBbmltYXRpb24uanMnO1xuaW1wb3J0IHsgcmV2ZWFsRmxhZyB9IGZyb20gJy4vZmxhZ0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBoZXJvRmxhZyB9IGZyb20gJy4vZmxhZ0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBzdWJGbGFnIH0gZnJvbSAnLi9mbGFnQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IGhlcm9JbWFnZSB9IGZyb20gJy4vaGVyb0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBoZXJvSGVhZGxpbmUgfSBmcm9tICcuL2hlcm9BbmltYXRpb24uanMnO1xuaW1wb3J0IHsgcmV2ZWFsSW52b2x2ZWQgfSBmcm9tICcuL2hlYWRsaW5lQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IHJldmVhbFBhcnRuZXIgfSBmcm9tICcuL2hlYWRsaW5lQW5pbWF0aW9uLmpzJztcblxuLy8gaW1wb3J0IHsgc3ViSG92ZXIgfSBmcm9tICcuL3N1Yk5hdnMuanMnO1xuLy8gaW1wb3J0IHsgbW9iaWxlU3VicyB9IGZyb20gJy4vbW9iaWxlU3ViTmF2cy5qcyc7XG4vLyBpbXBvcnQgeyB0aHJlZUNvbFJldmVhbCB9IGZyb20gJy4vdGhyZWVDb2xSZXZlYWwuanMnO1xuLy8gaW1wb3J0IHsgbWVkaWFQb3N0UmV2ZWFsIH0gZnJvbSAnLi9tZWRpYVJldmVhbC5qcyc7XG4vLyBpbXBvcnQgeyBibG9nUmV2ZWFsIH0gZnJvbSAnLi9ibG9nUmV2ZWFsLmpzJztcbi8vIGltcG9ydCB7IG1lbnVUb2dnbGUgfSBmcm9tICcuL21lbnVUb2dnbGUuanMnO1xuLy8gaW1wb3J0IHsgdGVhbVRvZ2dsZSB9IGZyb20gJy4vdGVhbVRvZ2dsZS5qcyc7XG4vLyBpbXBvcnQgeyBoZXJvTG9jayB9IGZyb20gJy4vaGVyb0xvY2suanMnO1xuLy8gaW1wb3J0IHsgZmlsdGVySXNvdG9wZSB9IGZyb20gJy4vZmlsdGVySXNvdG9wZSc7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgLy8gbWVudVRvZ2dsZSgpO1xuICAvLyB0ZWFtVG9nZ2xlKCk7XG4gIHJldmVhbEhlYWRsaW5lKCk7XG4gIHJldmVhbEZsYWcoKTtcbiAgaGVyb0ZsYWcoKTtcbiAgc3ViRmxhZygpO1xuICBoZXJvSW1hZ2UoKTtcbiAgaGVyb0hlYWRsaW5lKCk7XG4gIHJldmVhbEludm9sdmVkKCk7XG4gIHJldmVhbFBhcnRuZXIoKTtcbiAgLy8gZmlsdGVySXNvdG9wZSgpO1xuICAvLyByZXZlYWxIZWFkbGluZSgpO1xuICBcbiAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAvLyBtb2JpbGVTdWJzKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gc3ViSG92ZXIoKTtcbiAgfSAgXG4gIC8vIHRocmVlQ29sUmV2ZWFsKCk7XG4gIC8vIG1lZGlhUG9zdFJldmVhbCgpO1xuICAvLyBibG9nUmV2ZWFsKCk7XG4gIC8vIGhlcm9Mb2NrKCk7XG59KVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXG4vLyAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjQpIHtcbi8vICAgICBtb2JpbGVTdWJzKCk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgc3ViSG92ZXIoKTtcbi8vICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9