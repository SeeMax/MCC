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
    var charsh3 = splith3.chars; // console.log($subDescKids);

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
    var $h1 = $hero.find('h1');
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
  }
};
var heroHeadline = function heroHeadline() {
  var $hero = $('.heroHeadline');

  if ($hero.length) {
    var $heroInner = $('.heroHeadline').find('.content');
    var $h1 = $hero.find('h1');
    var $h4 = $hero.find('h4');
    var $p = $hero.find('p');
    var $hr = $hero.find('hr');
    var splith4 = new SplitText($h4, {
      type: "words, chars"
    });
    var splith1 = new SplitText($h1, {
      type: "words, chars"
    }); // let splitp = new SplitText($p, {type:"words"});

    var charsh4 = splith4.words;
    var charsh1 = splith1.chars; // let wordsp = splitp.words;

    gsap.set($heroInner, {
      perspective: 1000
    });
    gsap.set(charsh1, {
      y: 0,
      rotationX: -70,
      opacity: 0,
      transformOrigin: 'top center'
    });

    if (charsh4.length) {
      gsap.set(charsh4, {
        y: 0,
        rotationX: -70,
        opacity: 0,
        transformOrigin: 'top center'
      });
    }

    if ($p.length) {
      gsap.set($p, {
        opacity: 0,
        y: -18,
        transformOrigin: 'top center'
      });
      gsap.set($hr, {
        opacity: 0,
        transformOrigin: 'top center'
      });
    }

    var tl = gsap.timeline({
      delay: 0.6,
      defaults: {
        duration: .85,
        ease: "back.out(1.6)"
      } // scrollTrigger: {
      //   trigger: $hero,
      //   start: "center bottom",
      //   toggleActions: "play none none reverse",
      // }

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

    if (charsh4.length) {
      tl.to(charsh4, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.5,
        stagger: {
          amount: 0.1,
          from: "random",
          ease: "power2.inOut"
        }
      }, 'comein2-=0.2');
    }

    if ($p.length) {
      tl.to([$p, $hr], {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, 'comein2-=0.25');
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9leHRlcm5hbExpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ZsYWdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGxpbmVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVyb0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ob21lLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xvYWRNYWlsY2hpbXBTY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGlubmVkU3ViTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyJdLCJuYW1lcyI6WyJleHRMaW5rcyIsIiQiLCJlYWNoIiwiaGFzQ2xhc3MiLCJhIiwiUmVnRXhwIiwid2luZG93IiwibG9jYXRpb24iLCJob3N0IiwidGVzdCIsImhyZWYiLCJjbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuIiwialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImdzYXAiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRyaWdnZXIiLCJTcGxpdFRleHQiLCJyZXZlYWxGbGFnIiwiJGZsYWdDbGlwIiwiZmluZCIsIiRjb250ZW50Iiwic2V0Iiwib3ZlcmZsb3ciLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVN0eWxlIiwidHJhbnNmb3JtT3JpZ2luIiwidGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJmcm9tIiwicm90YXRpb25YIiwic3RhZ2dlciIsImFtb3VudCIsImhlcm9GbGFnIiwiJGZhY3QiLCJsZW5ndGgiLCIkYmFubmVyIiwiJGgyIiwiJGg0Iiwic3BsaXRoNCIsInR5cGUiLCJzcGxpdGgyIiwiY2hhcnNoNCIsImNoYXJzIiwiY2hhcnNoMiIsInkiLCJvcGFjaXR5IiwidG8iLCJzdWJGbGFnIiwiJHN1YkRlc2MiLCIkc3ViRGVzY2g0IiwiJHN1YkRlc2NwIiwiJHN1YkZsYWciLCIkaDMiLCJzcGxpdGgzIiwiY2hhcnNoMyIsImRlbGF5IiwicmV2ZWFsSGVhZGxpbmUiLCIkaGVhZGxpbmVUcmlnZ2VyIiwiJGhlYWRsaW5lIiwiJHAiLCIkYnV0dG9uIiwibXlTcGxpdFRleHQiLCJ3b3JkcyIsInJldmVhbEludm9sdmVkIiwiJHN0ZXAiLCJjaGlsZHJlbiIsInNjYWxlIiwicmV2ZWFsUGFydG5lciIsIiRwYXJ0bmVyIiwiZmlyc3QiLCIka2lkcyIsImhlcm9JbWFnZSIsIiRoZXJvIiwiJHRoZUltYWdlIiwiJGgxIiwic3BsaXRoMSIsImNoYXJzaDEiLCJpbWdUTCIsImhlcm9IZWFkbGluZSIsIiRoZXJvSW5uZXIiLCIkaHIiLCJzbGlja0l0Iiwic2xpY2siLCJjZW50ZXJNb2RlIiwiZG90cyIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJ2YXJpYWJsZVdpZHRoIiwiaW5maW5pdGUiLCJhdXRvcGxheSIsInNwZWVkIiwiYXV0b3BsYXlTcGVlZCIsInBhdXNlT25Ib3ZlciIsImNzc0Vhc2UiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXJyb3dzIiwibWFpbGNoaW1wU2NyaXB0cyIsInRoaXNPbmVTY3JpcHQiLCJhcHBlbmQiLCJtZW51T3BlbiIsInBhdXNlZCIsImZ1bGxNZW51IiwibGlua3MiLCJoYW0xIiwiaGFtMiIsImhhbTMiLCJ0b3AiLCJjbGlwUGF0aCIsImJhY2tncm91bmRDb2xvciIsInJvdGF0aW9uIiwieCIsIndpZHRoIiwib24iLCJyZXZlcnNlIiwicmVtb3ZlQ2xhc3MiLCJwbGF5IiwiYWRkQ2xhc3MiLCJidWlsZFNlcnZpY2VzTmF2IiwiaGVybyIsInN1Yk5hdiIsImFmdGVyIiwiYnVpbGRTZXJ2aWNlc0xpbmtzIiwidGhpc0lEIiwiYXR0ciIsImNsZWFuSUQiLCJyZXBsYWNlIiwidGhpc05hbWUiLCJodG1sIiwidGhpc0xpbmsiLCJwaW5TZXJ2aWNlc0xpbmtzIiwiaGVhZGVySGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzdWJOYXZIZWlnaHQiLCJzcGFjZXJIZWlnaHQiLCJzdCIsImNyZWF0ZSIsInBpbiIsInBpblNwYWNpbmciLCJlbmQiLCJwcmVMb2FkZXJPbiIsImZhZGVPdXQiLCJyZW1vdmUiLCJvbmxvYWQiLCJlIiwic21vb3RoU2Nyb2xsaW5nIiwidGhlTGluayIsIlNjcm9sbFRvUGx1Z2luIiwidGFyZ2V0Iiwic2Nyb2xsVG8iLCJvZmZzZXRZIiwiYmluZCIsInNjcmVlbiIsIm1lbnVDbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7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QSxNQUFJL0UsQ0FBQyxDQUFDSyxNQUFELENBQUQsQ0FBVTBILEtBQVYsTUFBcUIsSUFBekIsRUFBK0IsQ0FDN0I7QUFDRCxHQUZELE1BR0ssQ0FDSDtBQUNELEtBbkJ3QyxDQW9CekM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0QsQ0F4QkQ7QUE0QkExSCxNQUFNLENBQUNvSyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFXLENBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLENBUkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9wcmVsb2FkZXInO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbW9iaWxlTWVudSc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9leHRlcm5hbExpbmtzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2xvYWRNYWlsY2hpbXBTY3JpcHRzLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3Ntb290aFNjcm9sbC5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9waW5uZWRTdWJOYXYuanMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvaG9tZS1jYXJvdXNlbC5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy93aW5kb3dMb2FkLmpzJztcblxuXG4iLCJsZXQgZXh0TGlua3MgPSAoKSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKCdleHRlcm5hbCBsaW5rJyk7XG4gICQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCd2aWRlb0J1dHRvbicpKSB7XG4gICAgICB2YXIgYSA9IG5ldyBSZWdFeHAoJy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLycpO1xuICAgICAgaWYoIWEudGVzdCh0aGlzLmhyZWYpKSB7XG4gICAgICAgICQodGhpcykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgJ19ibGFuaycpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgZXh0TGlua3MoKTtcbn0pO1xuIiwiZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU3BsaXRUZXh0KTtcblxuXG5leHBvcnQgbGV0IHJldmVhbEZsYWcgPSAoKSA9PiB7XG5cbiAgJCgnLndoaXRlRmxhZ0FuaW1hdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgJGZsYWdDbGlwID0gJCh0aGlzKS5maW5kKCcuZmxhZ0NsaXAnKTtcbiAgICBsZXQgJGNvbnRlbnQgPSAkKHRoaXMpLmZpbmQoJy5jb250ZW50Jyk7XG5cbiAgICBnc2FwLnNldCgkKHRoaXMpLCB7IFxuICAgICAgb3ZlcmZsb3c6J2hpZGRlbidcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRjb250ZW50LCB7XG4gICAgICBwZXJzcGVjdGl2ZToyMDAwLFxuICAgICAgdHJhbnNmb3JtU3R5bGU6ICdwcmVzZXJ2ZS0zZCdcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRmbGFnQ2xpcCwge1xuICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgIH0pO1xuICAgIFxuXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgIGVhc2U6IFwiZWxhc3RpYy5vdXQoMC41LCAwLjUpXCJcbiAgICAgIH0sXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6ICQodGhpcyksXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b20tPTIwMFwiLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRsLmZyb20oJGZsYWdDbGlwLCB7XG4gICAgICByb3RhdGlvblg6LTEyMCwgXG4gICAgICAvLyBoZWlnaHQ6MCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGxldCBoZXJvRmxhZyA9ICgpID0+IHtcbiAgICBcbiAgbGV0ICRmYWN0ID0gJCgnLmhlcm9CYW5uZXInKS5maW5kKCcuc2luZ2xlLWhlcm8tZmFjdCcpO1xuICBcbiAgaWYoJGZhY3QubGVuZ3RoKSB7XG4gIFxuICAgIGxldCAkYmFubmVyID0gJCgnLmhlcm9CYW5uZXInKS5maW5kKCcuZmxhZ0JhY2snKTtcbiAgICBnc2FwLnNldCgkYmFubmVyLCB7cGVyc3BlY3RpdmU6MTAwMH0pO1xuICAgIFxuICAgICRmYWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgbGV0ICRoMiA9ICQodGhpcykuZmluZCgnaDInKTtcbiAgICAgIGxldCAkaDQgPSAkKHRoaXMpLmZpbmQoJ2g0Jyk7XG4gICAgICBsZXQgc3BsaXRoNCA9IG5ldyBTcGxpdFRleHQoJGg0LCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgICBsZXQgc3BsaXRoMiA9IG5ldyBTcGxpdFRleHQoJGgyLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgICBsZXQgY2hhcnNoNCA9IHNwbGl0aDQuY2hhcnM7IFxuICAgICAgbGV0IGNoYXJzaDIgPSBzcGxpdGgyLmNoYXJzOyBcbiAgICAgIFxuICAgICAgXG4gICAgICBnc2FwLnNldChbY2hhcnNoNCwgY2hhcnNoMl0sIHtcbiAgICAgICAgeTowLCBcbiAgICAgICAgcm90YXRpb25YOi0xMDAsIFxuICAgICAgICBvcGFjaXR5OjAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4gICAgICB9KTtcbiAgXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogJCh0aGlzKSxcbiAgICAgICAgICBzdGFydDogXCJib3R0b20gYm90dG9tLT0xMDBcIixcbiAgICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIFxuICAgICAgdGwudG8oY2hhcnNoMiwge1xuICAgICAgICB5OjAsIFxuICAgICAgICBvcGFjaXR5OjEsIFxuICAgICAgICByb3RhdGlvblg6MCwgXG4gICAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgICBhbW91bnQ6IDAuMywgXG4gICAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgICB9XG4gICAgICB9LCAnY29tZWluJyk7XG4gICAgICB0bC50byhjaGFyc2g0LCB7XG4gICAgICAgIHk6MCwgXG4gICAgICAgIG9wYWNpdHk6MSwgXG4gICAgICAgIHJvdGF0aW9uWDowLCBcbiAgICAgICAgc3RhZ2dlcjoge1xuICAgICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgICBmcm9tOiBcInJhbmRvbVwiLCBcbiAgICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICAgIH1cbiAgICAgIH0sICdjb21laW4rPTAuNCcpO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGxldCBzdWJGbGFnID0gKCkgPT4ge1xuICBcbiAgXG4gICQoJy5zdWJGbGFnQW5pbWF0aW9uJykuZWFjaChmdW5jdGlvbigpe1xuXG4gICAgbGV0ICRzdWJEZXNjID0gJCh0aGlzKS5maW5kKCcuc3ViRGVzY3JpcHRpb24nKTtcbiAgICBsZXQgJHN1YkRlc2NoNCA9ICRzdWJEZXNjLmZpbmQoJ2g0Jyk7XG4gICAgbGV0ICRzdWJEZXNjcCA9ICRzdWJEZXNjLmZpbmQoJ3AnKTtcbiAgICBsZXQgJHN1YkZsYWcgPSAkKHRoaXMpLmZpbmQoJy5zdWJGbGFnJyk7XG4gICAgbGV0ICRoMyA9ICRzdWJGbGFnLmZpbmQoJ2gzJyk7XG4gICAgbGV0ICRoNCA9ICRzdWJGbGFnLmZpbmQoJ2g0Jyk7XG4gICAgbGV0ICRjb250ZW50ID0gJCh0aGlzKS5maW5kKCcuY29udGVudCcpO1xuICAgIGxldCBzcGxpdGg0ID0gbmV3IFNwbGl0VGV4dCgkaDQsIHt0eXBlOlwid29yZHMsIGNoYXJzXCJ9KTtcbiAgICBsZXQgc3BsaXRoMyA9IG5ldyBTcGxpdFRleHQoJGgzLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgbGV0IGNoYXJzaDQgPSBzcGxpdGg0LmNoYXJzOyBcbiAgICBsZXQgY2hhcnNoMyA9IHNwbGl0aDMuY2hhcnM7IFxuICAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coJHN1YkRlc2NLaWRzKTtcblxuICAgIGdzYXAuc2V0KCQodGhpcyksIHtcbiAgICAgIG92ZXJmbG93OidoaWRkZW4nXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldCgkY29udGVudCwge1xuICAgICAgcGVyc3BlY3RpdmU6MjAwMCwgXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldCgkc3ViRmxhZywge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRzdWJEZXNjLCB7XG4gICAgICBwZXJzcGVjdGl2ZToyMDAwLCBcbiAgICB9KTtcbiAgICBcbiAgICBcblxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZGVsYXk6MS4yLFxuICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgIGVhc2U6IFwiZWxhc3RpYy5vdXQoMC41LCAwLjUpXCJcbiAgICAgIH0sXG4gICAgICAvLyBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAvLyAgIHRyaWdnZXI6ICQoJ2hlYWRlcicpLFxuICAgICAgLy8gICBzdGFydDogXCJ0b3AgdG9wLT0xXCIsXG4gICAgICAvLyAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiLFxuICAgICAgLy8gfVxuICAgIH0pO1xuXG4gICAgLy8gdGwuZnJvbSgkc3ViRmxhZywge1xuICAgIC8vICAgcm90YXRpb25YOi0xMjAsIFxuICAgIC8vICAgZHVyYXRpb246IDEuNSwgXG4gICAgLy8gfSwgJ2NvbWVpbicpO1xuXG4gICAgdGwuZnJvbShbY2hhcnNoMywgY2hhcnNoNF0sIHtcbiAgICAgIHk6MjQsIFxuICAgICAgb3BhY2l0eTowLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcicsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfSxcbiAgICB9LCAnY29tZWluJyk7XG5cbiAgICB0bC5mcm9tKCRzdWJEZXNjaDQsIHtcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHk6MTQsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfVxuICAgIH0sICdjb21laW4rPTAuMycpO1xuXG4gICAgdGwuZnJvbSgkc3ViRGVzY3AsIHtcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHk6MTQsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfVxuICAgIH0sICdjb21laW4rPTAuNScpO1xuICB9KTtcbn1cblxuXG4iLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTcGxpdFRleHQpO1xuXG5leHBvcnQgbGV0IHJldmVhbEhlYWRsaW5lID0gKCkgPT4ge1xuXG4gICQoJy5hbmltYXRpb25PbmUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgXG5cbiAgICBsZXQgJGhlYWRsaW5lVHJpZ2dlciA9ICQodGhpcykuZmluZCgnLmhlYWRsaW5lVHJpZ2dlcicpO1xuICAgIGxldCAkaGVhZGxpbmUgPSAkKHRoaXMpLmZpbmQoJ2gyJyk7XG4gICAgbGV0ICRwID0gJCh0aGlzKS5maW5kKCdwJyk7XG4gICAgbGV0ICRidXR0b24gPSAkKHRoaXMpLmZpbmQoJy5zZWVtYXgtYnV0dG9uJyk7XG4gICAgbGV0IG15U3BsaXRUZXh0ID0gbmV3IFNwbGl0VGV4dCgkaGVhZGxpbmUsIHt0eXBlOlwid29yZHNcIn0pO1xuICAgIC8vIGxldCBjaGFycyA9IG15U3BsaXRUZXh0LmNoYXJzOyBcbiAgICBsZXQgd29yZHMgPSBteVNwbGl0VGV4dC53b3JkczsgXG5cbiAgICAvLyAkKHdvcmRzKS5hZGRDbGFzcygnc3BsaXRXb3JkcycpO1xuICAgIC8vICQoY2hhcnMpLmFkZENsYXNzKCdzcGxpdENoYXJzJyk7XG5cbiAgICBnc2FwLnNldCh3b3Jkcywge3k6XCIyNHB4XCIsIG9wYWNpdHk6MH0pO1xuICAgIGlmKCRwLmxlbmd0aCkge1xuICAgICAgZ3NhcC5zZXQoJHAsIHt5OlwiMjRweFwiLCBvcGFjaXR5OjB9KTtcbiAgICB9XG4gICAgZ3NhcC5zZXQoJGJ1dHRvbiwge29wYWNpdHk6MH0pO1xuICAgIFxuXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMSlcIixcbiAgICAgIH0sXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6ICRoZWFkbGluZVRyaWdnZXIsXG4gICAgICAgIHN0YXJ0OiBcImNlbnRlciBib3R0b21cIixcbiAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCIsXG4gICAgICAgIC8vIG1hcmtlcnM6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcblxuICBcbiAgICB0bC50byh3b3Jkcywge3k6MCwgb3BhY2l0eToxLCBzdGFnZ2VyOiB7YW1vdW50OiAwLjE1LCBlYXNlOiBcInBvd2VyMi5pbk91dFwifX0sICdjb21laW4nKTtcbiAgICBpZigkcC5sZW5ndGgpIHtcbiAgICAgIHRsLnRvKCRwLCB7eTowLCBvcGFjaXR5OjF9LCAnY29tZWluKz0wLjI1Jyk7XG4gICAgfVxuICAgIHRsLnRvKCRidXR0b24sIHtvcGFjaXR5OjF9LCAnY29tZWluKz0wLjI1Jyk7XG4gIH0pO1xufVxuXG5leHBvcnQgbGV0IHJldmVhbEludm9sdmVkID0gKCkgPT4ge1xuXG4gIGlmKCQoJ21haW4nKS5oYXNDbGFzcygnZ2V0LWludm9sdmVkLXBhZ2UnKSl7XG5cbiAgICBsZXQgJHN0ZXAgPSAkKCcuaW52b2x2ZWRTdGVwJykuY2hpbGRyZW4oKTtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlbGF5OjEsXG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogLjc1LCBcbiAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRzdGVwLCB7dHJhbnNmb3JtT3JpZ2luOlwiNTAlIDUwJVwifSk7XG4gICAgICAgXG4gICAgdGwuZnJvbSgkc3RlcCwge1xuICAgICAgc2NhbGU6MC44LFxuICAgICAgb3BhY2l0eTowLFxuICAgICAgc3RhZ2dlcjoge1xuICAgICAgICBmcm9tOiBcInJhbmRvbVwiLCBcbiAgICAgICAgYW1vdW50OiAwLjM1LCBcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IHJldmVhbFBhcnRuZXIgPSAoKSA9PiB7XG5cbiAgaWYoJCgnbWFpbicpLmhhc0NsYXNzKCdwYXJ0bmVycy1wYWdlJykpe1xuXG4gICAgbGV0ICRwYXJ0bmVyID0gJCgnLnNpbmdsZS1wYXJ0bmVyJykuZmlyc3QoKTtcblxuICAgIGxldCAka2lkcyA9ICRwYXJ0bmVyLmNoaWxkcmVuKCk7XG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWxheToxLFxuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZHVyYXRpb246IDEuMiwgXG4gICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMSlcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgLy8gICBnc2FwLnNldCgkc3RlcCwge3RyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIn0pO1xuICAgICAgIFxuICAgIHRsLmZyb20oJGtpZHMsIHtcbiAgICAgIHk6JzIwcHgnLFxuICAgICAgb3BhY2l0eTowLFxuICAgICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuMywgXG4gICAgICAgIGZyb206J3JhbmRvbScsXG4gICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCJcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuXG4iLCJnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihTcGxpdFRleHQpO1xuXG5cbmV4cG9ydCBsZXQgaGVyb0ltYWdlID0gKCkgPT4ge1xuXG4gIGxldCAkaGVybyA9ICQoJy5oZXJvSW1hZ2UnKTtcblxuICBpZiAoJGhlcm8ubGVuZ3RoKSB7XG4gICAgXG4gICAgbGV0ICR0aGVJbWFnZSA9ICRoZXJvLmZpbmQoJy50aGVJbWFnZScpO1xuICAgIGxldCAkY29udGVudCA9ICRoZXJvLmZpbmQoJy5jb250ZW50Jyk7XG4gICAgbGV0ICRoMSA9ICRoZXJvLmZpbmQoJ2gxJyk7XG4gICAgbGV0IHNwbGl0aDEgPSBuZXcgU3BsaXRUZXh0KCRoMSwge3R5cGU6XCJ3b3JkcywgY2hhcnNcIn0pOyBcbiAgICBsZXQgY2hhcnNoMSA9IHNwbGl0aDEuY2hhcnM7XG4gICAgXG4gICAgXG4gIC8vICAgbGV0ICRmbGFnQ2xpcCA9ICQodGhpcykuZmluZCgnLmZsYWdDbGlwJyk7XG5cbiAgICBnc2FwLnNldCgkY29udGVudCwge1xuICAgICAgcGVyc3BlY3RpdmU6MjAwMCwgXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldCgkdGhlSW1hZ2UsIHsgXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46XCI1MCUgNTAlXCIsXG4gICAgICBzY2FsZToxLjI1LFxuICAgIH0pO1xuXG4gICAgZ3NhcC5zZXQoY2hhcnNoMSwge1xuICAgICAgeTowLCBcbiAgICAgIHJvdGF0aW9uWDotNzAsIFxuICAgICAgb3BhY2l0eTowLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbiAgICB9KTtcbiAgXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWxheTowLjYsXG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogLjg1LCBcbiAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxLjYpXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICAgIHRsLnRvKGNoYXJzaDEsIHtcbiAgICAgIHk6MCwgXG4gICAgICBvcGFjaXR5OjEsIFxuICAgICAgcm90YXRpb25YOjAsIFxuICAgICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuMywgXG4gICAgICAgIGZyb206IFwicmFuZG9tXCIsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbicpO1xuXG5cbiAgICBsZXQgaW1nVEwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxNSwgXG4gICAgICAgIGVhc2U6IFwibm9uZVwiXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaW1nVEwudG8oJHRoZUltYWdlLCB7XG4gICAgICBzY2FsZToxXG4gICAgfSk7XG4gIFxuICB9XG59XG5cbmV4cG9ydCBsZXQgaGVyb0hlYWRsaW5lID0gKCkgPT4ge1xuICAgIFxuICBsZXQgJGhlcm8gPSAkKCcuaGVyb0hlYWRsaW5lJyk7XG5cbiAgaWYgKCRoZXJvLmxlbmd0aCkge1xuICAgIFxuICAgIGxldCAkaGVyb0lubmVyID0gJCgnLmhlcm9IZWFkbGluZScpLmZpbmQoJy5jb250ZW50Jyk7XG4gICAgbGV0ICRoMSA9ICRoZXJvLmZpbmQoJ2gxJyk7XG4gICAgbGV0ICRoNCA9ICRoZXJvLmZpbmQoJ2g0Jyk7XG4gICAgbGV0ICRwID0gJGhlcm8uZmluZCgncCcpO1xuICAgIGxldCAkaHIgPSAkaGVyby5maW5kKCdocicpO1xuICAgIGxldCBzcGxpdGg0ID0gbmV3IFNwbGl0VGV4dCgkaDQsIHt0eXBlOlwid29yZHMsIGNoYXJzXCJ9KTtcbiAgICBsZXQgc3BsaXRoMSA9IG5ldyBTcGxpdFRleHQoJGgxLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgLy8gbGV0IHNwbGl0cCA9IG5ldyBTcGxpdFRleHQoJHAsIHt0eXBlOlwid29yZHNcIn0pO1xuICAgIGxldCBjaGFyc2g0ID0gc3BsaXRoNC53b3JkczsgXG4gICAgbGV0IGNoYXJzaDEgPSBzcGxpdGgxLmNoYXJzO1xuICAgIC8vIGxldCB3b3Jkc3AgPSBzcGxpdHAud29yZHM7XG4gICAgXG4gICAgZ3NhcC5zZXQoJGhlcm9Jbm5lciwge3BlcnNwZWN0aXZlOjEwMDB9KTtcblxuICAgIGdzYXAuc2V0KGNoYXJzaDEsIHtcbiAgICAgIHk6MCwgXG4gICAgICByb3RhdGlvblg6LTcwLCBcbiAgICAgIG9wYWNpdHk6MCxcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4gICAgfSk7XG5cbiAgICBpZiAoY2hhcnNoNC5sZW5ndGgpIHtcbiAgICAgIGdzYXAuc2V0KGNoYXJzaDQsIHtcbiAgICAgICAgeTowLCBcbiAgICAgICAgcm90YXRpb25YOi03MCwgXG4gICAgICAgIG9wYWNpdHk6MCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkcC5sZW5ndGgpIHtcbiAgICAgIGdzYXAuc2V0KCRwLCB7XG4gICAgICAgIG9wYWNpdHk6MCxcbiAgICAgICAgeTotMTgsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4gICAgICB9KTsgXG4gICAgICBnc2FwLnNldCgkaHIsIHtcbiAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgICAgfSk7ICBcbiAgICB9XG4gICAgXG5cbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlbGF5OjAuNixcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGR1cmF0aW9uOiAuODUsIFxuICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNilcIixcbiAgICAgIH0sXG4gICAgICAvLyBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAvLyAgIHRyaWdnZXI6ICRoZXJvLFxuICAgICAgLy8gICBzdGFydDogXCJjZW50ZXIgYm90dG9tXCIsXG4gICAgICAvLyAgIHRvZ2dsZUFjdGlvbnM6IFwicGxheSBub25lIG5vbmUgcmV2ZXJzZVwiLFxuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIFxuICAgIHRsLnRvKGNoYXJzaDEsIHtcbiAgICAgIHk6MCwgXG4gICAgICBvcGFjaXR5OjEsIFxuICAgICAgcm90YXRpb25YOjAsIFxuICAgICAgc3RhZ2dlcjoge1xuICAgICAgICBhbW91bnQ6IDAuMywgXG4gICAgICAgIGZyb206IFwicmFuZG9tXCIsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbicpO1xuXG4gICAgaWYgKGNoYXJzaDQubGVuZ3RoKSB7ICBcbiAgICAgIHRsLnRvKGNoYXJzaDQsIHtcbiAgICAgICAgeTowLCBcbiAgICAgICAgb3BhY2l0eToxLCBcbiAgICAgICAgcm90YXRpb25YOjAsIFxuICAgICAgICBkdXJhdGlvbjowLjUsXG4gICAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgICBhbW91bnQ6IDAuMSwgXG4gICAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgICB9XG4gICAgICB9LCAnY29tZWluMi09MC4yJyk7XG4gICAgfVxuXG4gICAgaWYgKCRwLmxlbmd0aCkge1xuICAgICAgdGwudG8oWyRwLCAkaHJdLCB7XG4gICAgICAgIG9wYWNpdHk6MSwgXG4gICAgICAgIHk6MCxcbiAgICAgICAgZHVyYXRpb246MC44LFxuICAgICAgfSwgJ2NvbWVpbjItPTAuMjUnKTtcbiAgICB9XG4gIH1cbn0iLCJsZXQgc2xpY2tJdCA9ICgpID0+IHtcbiAgJCgnLmNlbnRlci1jYXJvdXNlbCcpLnNsaWNrKHtcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIGNlbnRlclBhZGRpbmc6ICcxNjBweCcsXG4gICAgc2xpZGVzVG9TaG93OiAxLFxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgc3BlZWQ6MTIwMCxcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgIHBhdXNlT25Ib3ZlcjpmYWxzZSxcbiAgICBjc3NFYXNlOiAnY3ViaWMtYmV6aWVyKC4xMywuNzksLjIzLC45NiknLFxuICAgIC8vIGNzc0Vhc2U6ICdlYXNlSW5PdXRDaXJjJyxcbiAgICBwcmV2QXJyb3c6JCgnLnByZXZBcnJvdycpLFxuICAgIG5leHRBcnJvdzokKCcubmV4dEFycm93JyksXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gIH0pO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgc2xpY2tJdCgpO1xufSk7IiwiLy8gTWFrZSBhIHZhcmlhYmxlIGZvciB0aGUgTWFpbGNoaW1wIFNjcmlwdHNcbmxldCBtYWlsY2hpbXBTY3JpcHRzID0gKCkgPT4ge1xuICBsZXQgdGhpc09uZVNjcmlwdCA9ICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvL3MzLmFtYXpvbmF3cy5jb20vZG93bmxvYWRzLm1haWxjaGltcC5jb20vanMvbWMtdmFsaWRhdGUuanNcIj48L3NjcmlwdD48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj4oZnVuY3Rpb24oJCkge3dpbmRvdy5mbmFtZXMgPSBuZXcgQXJyYXkoKTt3aW5kb3cuZnR5cGVzID0gbmV3IEFycmF5KCk7Zm5hbWVzWzBdPVwiRU1BSUxcIjtmdHlwZXNbMF09XCJlbWFpbFwiO2ZuYW1lc1sxXT1cIkZOQU1FXCI7ZnR5cGVzWzFdPVwidGV4dFwiO2ZuYW1lc1syXT1cIkxOQU1FXCI7ZnR5cGVzWzJdPVwidGV4dFwiO30oalF1ZXJ5KSk7dmFyICRtY2ogPSBqUXVlcnkubm9Db25mbGljdCh0cnVlKTs8L3NjcmlwdD4nXG4gICQoJ2JvZHknKS5hcHBlbmQodGhpc09uZVNjcmlwdCk7XG59XG5cbi8vIElmIHRoZSBtYWlsY2hpbXAgZm9yIGlzIFBlcmZvcm1hbmNlT2JzZXJ2ZXJFbnRyeUxpc3QsIGxvYWQgdGhlIHNjcmlwdHNcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeShmdW5jdGlvbigkKSB7XG4gIGlmKCQoJyNtY19lbWJlZF9zaWdudXAnKS5sZW5ndGgpIHtcbiAgICBtYWlsY2hpbXBTY3JpcHRzKCk7XG4gIH1cbn0pOyIsImNvbnN0IG1lbnVPcGVuID0gKCkgPT4ge1xuXHRsZXQgdGwgPSBuZXcgZ3NhcC50aW1lbGluZSh7XG5cdFx0cGF1c2VkOnRydWUsXG5cdFx0ZGVmYXVsdHM6IHsgLy8gY2hpbGRyZW4gaW5oZXJpdCB0aGVzZSBkZWZhdWx0c1xuXHRcdFx0ZHVyYXRpb246MC4zLFxuXHRcdFx0ZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuXHRcdH0sXG5cdH0pO1xuXHRsZXQgZnVsbE1lbnUgPSAkKFwiLm1haW4tbmF2XCIpO1xuXHRsZXQgbGlua3MgPSAkKFwibmF2IGFcIik7XG5cdGxldCBoYW0xID0gJChcIi5oYW1Ub3BcIik7XG5cdGxldCBoYW0yID0gJChcIi5oYW1NaWRcIik7XG5cdGxldCBoYW0zID0gJChcIi5oYW1Cb3RcIik7XG5cdFxuXHR0bC5zZXQoJChcImJvZHlcIiksIHtvdmVyZmxvdzpcImhpZGRlblwifSk7XG5cdHRsLnRvKGZ1bGxNZW51LCB7dG9wOlwiMCVcIiwgY2xpcFBhdGg6XCJwb2x5Z29uKDEwMCUgMCwgMTAwJSAxMDAlLCA1MCUgMTAwJSwgMCAxMDAlLCAwIDApXCIsIGVhc2U6IFwiYmFjay5pbigwLjIpXCJ9LCBcIm1lbnVPcGVuXCIpO1xuXHR0bC50byhsaW5rcywge29wYWNpdHk6MSwgeTpcIjAlXCIsIHN0YWdnZXI6IHthbW91bnQ6LjE1fX0sIFwibWVudU9wZW4rPTAuMTVcIik7XG5cdHRsLnRvKGhhbTEsIHtiYWNrZ3JvdW5kQ29sb3I6JyNCQkZGRDEnLCByb3RhdGlvbjotMzE1LHg6MCAseTo2LH0sIFwibWVudU9wZW5cIik7XG5cdHRsLnRvKGhhbTIsIHtiYWNrZ3JvdW5kQ29sb3I6JyNCQkZGRDEnLCB3aWR0aDowfSwgXCJtZW51T3BlblwiKTtcblx0dGwudG8oaGFtMywge2JhY2tncm91bmRDb2xvcjonI0JCRkZEMScsIHJvdGF0aW9uOjMxNSwgeDowLCB5Oi02LH0sIFwibWVudU9wZW5cIik7XG5cblx0XG5cblx0JChcIi5tZW51VG9nZ2xlXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoXCJuYXZPcGVuXCIpKSB7XG5cdFx0XHR0bC5yZXZlcnNlKCk7XG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwibmF2T3BlblwiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGwucGxheSgpO1xuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcyhcIm5hdk9wZW5cIik7XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gdGw7XG59XG5tZW51T3BlbigpO1xuIiwibGV0IGJ1aWxkU2VydmljZXNOYXYgPSAoKSA9PiB7XG4gIHZhciBoZXJvID0gJCgnLnBhZ2Utc2VydmljZXMgLmhlcm8tc2VjdGlvbicpO1xuICB2YXIgc3ViTmF2ID0gJzxkaXYgY2xhc3M9XCJzZXJ2aWNlcy1zdWJuYXZcIj48ZGl2IGNsYXNzPVwiY29udGVudFwiPjwvZGl2PjwvZGl2PidcbiAgJChoZXJvKS5hZnRlcihzdWJOYXYpO1xufVxuXG5cbmxldCBidWlsZFNlcnZpY2VzTGlua3MgPSAoKSA9PiB7XG5cbiAgJCgnLnNpbmdsZS1mdWxsLXNlcnZpY2UnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIGxldCB0aGlzSUQgPSAkKHRoaXMpLmZpbmQoJy5mdWxsLXNlcnZpY2UtaW1hZ2UtaGFsZicpLmF0dHIoJ2lkJyk7XG4gICAgbGV0IGNsZWFuSUQgPSB0aGlzSUQucmVwbGFjZSgvW15hLXpBLVogXS9nLCBcIlwiKVxuICAgIGxldCB0aGlzTmFtZSA9ICQodGhpcykuZmluZCgnaDInKS5odG1sKCk7XG4gICAgbGV0IHRoaXNMaW5rID0gXCI8YSBocmVmPScjXCIrY2xlYW5JRCtcIic+XCIrdGhpc05hbWUrXCI8L2E+XCI7XG4gICAgJCgnLnNlcnZpY2VzLXN1Ym5hdiAuY29udGVudCcpLmFwcGVuZCh0aGlzTGluayk7XG4gIH0pXG59XG5cbmxldCBwaW5TZXJ2aWNlc0xpbmtzID0gKCkgPT4ge1xuXG4gIGxldCBoZWFkZXJIZWlnaHQgPSAkKCcuaGVhZGVyJykub3V0ZXJIZWlnaHQoKTsgXG4gIGxldCBzdWJOYXZIZWlnaHQgPSAkKCcuc2VydmljZXMtc3VibmF2Jykub3V0ZXJIZWlnaHQoKTtcbiAgbGV0IHNwYWNlckhlaWdodCA9IGhlYWRlckhlaWdodCArIHN1Yk5hdkhlaWdodDtcbiAgbGV0IHN0ID0gU2Nyb2xsVHJpZ2dlci5jcmVhdGUoe1xuICAgIHRyaWdnZXI6IFwiLnNlcnZpY2VzLWZ1bGwtc2VjdGlvblwiLFxuICAgIHBpbjogXCIuc2VydmljZXMtc3VibmF2XCIsXG4gICAgc3RhcnQ6IFwiLT1cIitzcGFjZXJIZWlnaHQrXCJcIixcbiAgICBwaW5TcGFjaW5nOiBmYWxzZSxcbiAgICBlbmQ6IFwiKz05OTk5OTk5OTk5XCIgXG4gIH0pO1xufVxuXG5pZiAoJCgnYm9keScpLmhhc0NsYXNzKCdwYWdlLXNlcnZpY2VzJykpIHtcbiAgLy8gYWxlcnQoXCJoZXJlXCIpO1xuICBidWlsZFNlcnZpY2VzTmF2KCk7XG4gIGJ1aWxkU2VydmljZXNMaW5rcygpO1xuICBwaW5TZXJ2aWNlc0xpbmtzKCk7XG59IiwibGV0IHByZUxvYWRlck9uID0gKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZygnbm90LXByZWxvYWRlcicpO1xuXHQkKCcjcHJlbG9hZGVyJykuZmFkZU91dCgnc2xvdycsZnVuY3Rpb24oKXskKHRoaXMpLnJlbW92ZSgpO30pO1xufVxuXG53aW5kb3cub25sb2FkID0gKGUpID0+IHtcblx0cHJlTG9hZGVyT24oKTtcbn1cbiIsIi8vIEltcG9ydCBUaGUgTWVudSBDbG9zZSBGdW5jdGlvbiB0byB1c2Ugb24gbW9iaWxlXG4vLyBpbXBvcnQgeyBtZW51Q2xvc2UgfSBmcm9tICcuL21vYmlsZU1lbnUuanMnO1xuXG5sZXQgc21vb3RoU2Nyb2xsaW5nID0gKHRoZUxpbmspID0+IHtcblxuICBnc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRvUGx1Z2luKTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBsZXQgdGFyZ2V0ID0gJCh0aGVMaW5rKS5hdHRyKFwiaHJlZlwiKTtcbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgbGV0IHN1Yk5hdkhlaWdodCA9ICQoJy5zdHJhaW4tc3VibmF2Jykub3V0ZXJIZWlnaHQoKTtcbiAgbGV0IHNwYWNlckhlaWdodCA9IGhlYWRlckhlaWdodCArIHN1Yk5hdkhlaWdodDtcbiAgXG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2Utc3RyYWlucycpKSB7XG4gICAgZ3NhcC50byh3aW5kb3csIHtkdXJhdGlvbjowLjUsIGVhc2U6IFwiY2lyYy5vdXRcIiwgc2Nyb2xsVG86e3k6dGFyZ2V0LCBvZmZzZXRZOnNwYWNlckhlaWdodH19KTtcbiAgfSBlbHNlIHtcbiAgICBnc2FwLnRvKHdpbmRvdywge2R1cmF0aW9uOjAuNSwgZWFzZTogXCJjaXJjLm91dFwiLCBzY3JvbGxUbzp7eTp0YXJnZXQsIG9mZnNldFk6aGVhZGVySGVpZ2h0fX0pO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgJCgnYVtocmVmXj1cIiNcIl0nKS5iaW5kKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBcbiAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgLy8gSUYgSVRcIlMgTU9CSUxFIC8gSVBBRCBPUiBTTUFMTEVSXG4gICAgaWYgKHNjcmVlbi53aWR0aCA8PSAxMDI1KXtcbiAgICAgIG1lbnVDbG9zZSgpO1xuICAgICAgc21vb3RoU2Nyb2xsaW5nKCQodGhpcykpO1xuICAgIH1cbiAgfSk7XG59KTsiLCJpbXBvcnQgeyByZXZlYWxIZWFkbGluZSB9IGZyb20gJy4vaGVhZGxpbmVBbmltYXRpb24uanMnO1xuaW1wb3J0IHsgcmV2ZWFsRmxhZyB9IGZyb20gJy4vZmxhZ0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBoZXJvRmxhZyB9IGZyb20gJy4vZmxhZ0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBzdWJGbGFnIH0gZnJvbSAnLi9mbGFnQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IGhlcm9JbWFnZSB9IGZyb20gJy4vaGVyb0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyBoZXJvSGVhZGxpbmUgfSBmcm9tICcuL2hlcm9BbmltYXRpb24uanMnO1xuaW1wb3J0IHsgcmV2ZWFsSW52b2x2ZWQgfSBmcm9tICcuL2hlYWRsaW5lQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IHJldmVhbFBhcnRuZXIgfSBmcm9tICcuL2hlYWRsaW5lQW5pbWF0aW9uLmpzJztcblxuLy8gaW1wb3J0IHsgc3ViSG92ZXIgfSBmcm9tICcuL3N1Yk5hdnMuanMnO1xuLy8gaW1wb3J0IHsgbW9iaWxlU3VicyB9IGZyb20gJy4vbW9iaWxlU3ViTmF2cy5qcyc7XG4vLyBpbXBvcnQgeyB0aHJlZUNvbFJldmVhbCB9IGZyb20gJy4vdGhyZWVDb2xSZXZlYWwuanMnO1xuLy8gaW1wb3J0IHsgbWVkaWFQb3N0UmV2ZWFsIH0gZnJvbSAnLi9tZWRpYVJldmVhbC5qcyc7XG4vLyBpbXBvcnQgeyBibG9nUmV2ZWFsIH0gZnJvbSAnLi9ibG9nUmV2ZWFsLmpzJztcbi8vIGltcG9ydCB7IG1lbnVUb2dnbGUgfSBmcm9tICcuL21lbnVUb2dnbGUuanMnO1xuLy8gaW1wb3J0IHsgdGVhbVRvZ2dsZSB9IGZyb20gJy4vdGVhbVRvZ2dsZS5qcyc7XG4vLyBpbXBvcnQgeyBoZXJvTG9jayB9IGZyb20gJy4vaGVyb0xvY2suanMnO1xuLy8gaW1wb3J0IHsgZmlsdGVySXNvdG9wZSB9IGZyb20gJy4vZmlsdGVySXNvdG9wZSc7XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgLy8gbWVudVRvZ2dsZSgpO1xuICAvLyB0ZWFtVG9nZ2xlKCk7XG4gIHJldmVhbEhlYWRsaW5lKCk7XG4gIHJldmVhbEZsYWcoKTtcbiAgaGVyb0ZsYWcoKTtcbiAgc3ViRmxhZygpO1xuICBoZXJvSW1hZ2UoKTtcbiAgaGVyb0hlYWRsaW5lKCk7XG4gIHJldmVhbEludm9sdmVkKCk7XG4gIHJldmVhbFBhcnRuZXIoKTtcbiAgLy8gZmlsdGVySXNvdG9wZSgpO1xuICAvLyByZXZlYWxIZWFkbGluZSgpO1xuICBcbiAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDEwMjQpIHtcbiAgICAvLyBtb2JpbGVTdWJzKCk7XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gc3ViSG92ZXIoKTtcbiAgfSAgXG4gIC8vIHRocmVlQ29sUmV2ZWFsKCk7XG4gIC8vIG1lZGlhUG9zdFJldmVhbCgpO1xuICAvLyBibG9nUmV2ZWFsKCk7XG4gIC8vIGhlcm9Mb2NrKCk7XG59KVxuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXG4vLyAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjQpIHtcbi8vICAgICBtb2JpbGVTdWJzKCk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgc3ViSG92ZXIoKTtcbi8vICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9