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
    var a = new RegExp('/' + window.location.host + '/');

    if (!a.test(this.href)) {
      $(this).click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(this.href, '_blank');
      });
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
    gsap.set($(this), {
      perspective: 2000,
      overflow: 'hidden'
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
        rotationX: -120,
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
          start: "center bottom",
          toggleActions: "play none none reverse"
        }
      });
      tl.to([charsh4, charsh2], {
        y: 0,
        opacity: 1,
        rotationX: 0,
        stagger: {
          amount: 0.3,
          from: "random",
          ease: "power2.inOut"
        }
      }, 'comein');
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
      delay: 2,
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
        duration: 12,
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
    speed: 1500,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9leHRlcm5hbExpbmtzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ZsYWdBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGxpbmVBbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVyb0FuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9ob21lLWNhcm91c2VsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xvYWRNYWlsY2hpbXBTY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL21vYmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGlubmVkU3ViTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ByZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyJdLCJuYW1lcyI6WyJleHRMaW5rcyIsIiQiLCJlYWNoIiwiYSIsIlJlZ0V4cCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaG9zdCIsInRlc3QiLCJocmVmIiwiY2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib3BlbiIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJnc2FwIiwicmVnaXN0ZXJQbHVnaW4iLCJTY3JvbGxUcmlnZ2VyIiwiU3BsaXRUZXh0IiwicmV2ZWFsRmxhZyIsIiRmbGFnQ2xpcCIsImZpbmQiLCJzZXQiLCJwZXJzcGVjdGl2ZSIsIm92ZXJmbG93IiwidHJhbnNmb3JtT3JpZ2luIiwidGwiLCJ0aW1lbGluZSIsImRlZmF1bHRzIiwiZHVyYXRpb24iLCJlYXNlIiwic2Nyb2xsVHJpZ2dlciIsInRyaWdnZXIiLCJzdGFydCIsInRvZ2dsZUFjdGlvbnMiLCJmcm9tIiwicm90YXRpb25YIiwic3RhZ2dlciIsImFtb3VudCIsImhlcm9GbGFnIiwiJGZhY3QiLCJsZW5ndGgiLCIkYmFubmVyIiwiJGgyIiwiJGg0Iiwic3BsaXRoNCIsInR5cGUiLCJzcGxpdGgyIiwiY2hhcnNoNCIsImNoYXJzIiwiY2hhcnNoMiIsInkiLCJvcGFjaXR5IiwidG8iLCJzdWJGbGFnIiwiJHN1YkRlc2MiLCIkc3ViRGVzY2g0IiwiJHN1YkRlc2NwIiwiJHN1YkZsYWciLCIkaDMiLCIkY29udGVudCIsInNwbGl0aDMiLCJjaGFyc2gzIiwiZGVsYXkiLCJyZXZlYWxIZWFkbGluZSIsIiRoZWFkbGluZVRyaWdnZXIiLCIkaGVhZGxpbmUiLCIkcCIsIiRidXR0b24iLCJteVNwbGl0VGV4dCIsIndvcmRzIiwicmV2ZWFsSW52b2x2ZWQiLCJoYXNDbGFzcyIsIiRzdGVwIiwiY2hpbGRyZW4iLCJzY2FsZSIsInJldmVhbFBhcnRuZXIiLCIkcGFydG5lciIsImZpcnN0IiwiJGtpZHMiLCJoZXJvSW1hZ2UiLCIkaGVybyIsIiR0aGVJbWFnZSIsIiRoMSIsInNwbGl0aDEiLCJjaGFyc2gxIiwiaW1nVEwiLCJoZXJvSGVhZGxpbmUiLCIkaGVyb0lubmVyIiwiJGhyIiwic2xpY2tJdCIsInNsaWNrIiwiY2VudGVyTW9kZSIsImRvdHMiLCJjZW50ZXJQYWRkaW5nIiwic2xpZGVzVG9TaG93IiwidmFyaWFibGVXaWR0aCIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJzcGVlZCIsImF1dG9wbGF5U3BlZWQiLCJwYXVzZU9uSG92ZXIiLCJjc3NFYXNlIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFycm93cyIsIm1haWxjaGltcFNjcmlwdHMiLCJ0aGlzT25lU2NyaXB0IiwiYXBwZW5kIiwibWVudU9wZW4iLCJwYXVzZWQiLCJmdWxsTWVudSIsImxpbmtzIiwiaGFtMSIsImhhbTIiLCJoYW0zIiwidG9wIiwiY2xpcFBhdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyb3RhdGlvbiIsIngiLCJ3aWR0aCIsIm9uIiwicmV2ZXJzZSIsInJlbW92ZUNsYXNzIiwicGxheSIsImFkZENsYXNzIiwiYnVpbGRTZXJ2aWNlc05hdiIsImhlcm8iLCJzdWJOYXYiLCJhZnRlciIsImJ1aWxkU2VydmljZXNMaW5rcyIsInRoaXNJRCIsImF0dHIiLCJjbGVhbklEIiwicmVwbGFjZSIsInRoaXNOYW1lIiwiaHRtbCIsInRoaXNMaW5rIiwicGluU2VydmljZXNMaW5rcyIsImhlYWRlckhlaWdodCIsIm91dGVySGVpZ2h0Iiwic3ViTmF2SGVpZ2h0Iiwic3BhY2VySGVpZ2h0Iiwic3QiLCJjcmVhdGUiLCJwaW4iLCJwaW5TcGFjaW5nIiwiZW5kIiwicHJlTG9hZGVyT24iLCJmYWRlT3V0IiwicmVtb3ZlIiwib25sb2FkIiwiZSIsInNtb290aFNjcm9sbGluZyIsInRoZUxpbmsiLCJTY3JvbGxUb1BsdWdpbiIsInRhcmdldCIsInNjcm9sbFRvIiwib2Zmc2V0WSIsImJpbmQiLCJzY3JlZW4iLCJtZW51Q2xvc2UiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BLElBQUlBLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDcEI7QUFDQ0MsR0FBQyxDQUFDLEdBQUQsQ0FBRCxDQUFPQyxJQUFQLENBQVksWUFBVztBQUNyQixRQUFJQyxDQUFDLEdBQUcsSUFBSUMsTUFBSixDQUFXLE1BQU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBdEIsR0FBNkIsR0FBeEMsQ0FBUjs7QUFDQSxRQUFHLENBQUNKLENBQUMsQ0FBQ0ssSUFBRixDQUFPLEtBQUtDLElBQVosQ0FBSixFQUF1QjtBQUNyQlIsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRUyxLQUFSLENBQWMsVUFBU0MsS0FBVCxFQUFnQjtBQUM1QkEsYUFBSyxDQUFDQyxjQUFOO0FBQ0FELGFBQUssQ0FBQ0UsZUFBTjtBQUNBUixjQUFNLENBQUNTLElBQVAsQ0FBWSxLQUFLTCxJQUFqQixFQUF1QixRQUF2QjtBQUNELE9BSkQ7QUFLRDtBQUNGLEdBVEQ7QUFVRCxDQVpEOztBQWNBTSxNQUFNLENBQUNDLFFBQUQsQ0FBTixDQUFpQkMsS0FBakIsQ0FBdUIsVUFBU2hCLENBQVQsRUFBWTtBQUNqQ0QsVUFBUTtBQUNULENBRkQsRTs7Ozs7Ozs7Ozs7O0FDZEFrQjtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxJQUFJLENBQUNDLGNBQUwsQ0FBb0JDLGFBQXBCO0FBQ0FGLElBQUksQ0FBQ0MsY0FBTCxDQUFvQkUsU0FBcEI7QUFHTyxJQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBRTVCckIsR0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJDLElBQXpCLENBQThCLFlBQVU7QUFFdEMsUUFBSXFCLFNBQVMsR0FBR3RCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSxXQUFiLENBQWhCO0FBRUFOLFFBQUksQ0FBQ08sR0FBTCxDQUFTeEIsQ0FBQyxDQUFDLElBQUQsQ0FBVixFQUFrQjtBQUNoQnlCLGlCQUFXLEVBQUMsSUFESTtBQUVoQkMsY0FBUSxFQUFDO0FBRk8sS0FBbEI7QUFLQVQsUUFBSSxDQUFDTyxHQUFMLENBQVNGLFNBQVQsRUFBb0I7QUFDbEJJLGNBQVEsRUFBQyxRQURTO0FBRWxCQyxxQkFBZSxFQUFFO0FBRkMsS0FBcEI7QUFNQSxRQUFJQyxFQUFFLEdBQUdYLElBQUksQ0FBQ1ksUUFBTCxDQUFjO0FBQ3JCQyxjQUFRLEVBQUU7QUFDUkMsZ0JBQVEsRUFBRSxJQURGO0FBRVJDLFlBQUksRUFBRTtBQUZFLE9BRFc7QUFLckJDLG1CQUFhLEVBQUU7QUFDYkMsZUFBTyxFQUFFbEMsQ0FBQyxDQUFDLElBQUQsQ0FERztBQUVibUMsYUFBSyxFQUFFLGlCQUZNO0FBR2JDLHFCQUFhLEVBQUU7QUFIRjtBQUxNLEtBQWQsQ0FBVDtBQVlBUixNQUFFLENBQUNTLElBQUgsQ0FBUWYsU0FBUixFQUFtQjtBQUNqQmdCLGVBQVMsRUFBQyxDQUFDLEdBRE07QUFFakI7QUFDQUMsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxHQUREO0FBRVBSLFlBQUksRUFBRTtBQUZDO0FBSFEsS0FBbkIsRUFPRyxRQVBIO0FBUUQsR0FuQ0Q7QUFvQ0QsQ0F0Q007QUF3Q0EsSUFBSVMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUUxQixNQUFJQyxLQUFLLEdBQUcxQyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCdUIsSUFBakIsQ0FBc0IsbUJBQXRCLENBQVo7O0FBRUEsTUFBR21CLEtBQUssQ0FBQ0MsTUFBVCxFQUFpQjtBQUVmLFFBQUlDLE9BQU8sR0FBRzVDLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJ1QixJQUFqQixDQUFzQixXQUF0QixDQUFkO0FBQ0FOLFFBQUksQ0FBQ08sR0FBTCxDQUFTb0IsT0FBVCxFQUFrQjtBQUFDbkIsaUJBQVcsRUFBQztBQUFiLEtBQWxCO0FBRUFpQixTQUFLLENBQUN6QyxJQUFOLENBQVcsWUFBVTtBQUVuQixVQUFJNEMsR0FBRyxHQUFHN0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixDQUFhLElBQWIsQ0FBVjtBQUNBLFVBQUl1QixHQUFHLEdBQUc5QyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixJQUFSLENBQWEsSUFBYixDQUFWO0FBQ0EsVUFBSXdCLE9BQU8sR0FBRyxJQUFJM0IsU0FBSixDQUFjMEIsR0FBZCxFQUFtQjtBQUFDRSxZQUFJLEVBQUM7QUFBTixPQUFuQixDQUFkO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLElBQUk3QixTQUFKLENBQWN5QixHQUFkLEVBQW1CO0FBQUNHLFlBQUksRUFBQztBQUFOLE9BQW5CLENBQWQ7QUFDQSxVQUFJRSxPQUFPLEdBQUdILE9BQU8sQ0FBQ0ksS0FBdEI7QUFDQSxVQUFJQyxPQUFPLEdBQUdILE9BQU8sQ0FBQ0UsS0FBdEI7QUFHQWxDLFVBQUksQ0FBQ08sR0FBTCxDQUFTLENBQUMwQixPQUFELEVBQVVFLE9BQVYsQ0FBVCxFQUE2QjtBQUMzQkMsU0FBQyxFQUFDLENBRHlCO0FBRTNCZixpQkFBUyxFQUFDLENBQUMsR0FGZ0I7QUFHM0JnQixlQUFPLEVBQUMsQ0FIbUI7QUFJM0IzQix1QkFBZSxFQUFFO0FBSlUsT0FBN0I7QUFPQSxVQUFJQyxFQUFFLEdBQUdYLElBQUksQ0FBQ1ksUUFBTCxDQUFjO0FBQ3JCQyxnQkFBUSxFQUFFO0FBQ1JDLGtCQUFRLEVBQUUsSUFERjtBQUVSQyxjQUFJLEVBQUU7QUFGRSxTQURXO0FBS3JCQyxxQkFBYSxFQUFFO0FBQ2JDLGlCQUFPLEVBQUVsQyxDQUFDLENBQUMsSUFBRCxDQURHO0FBRWJtQyxlQUFLLEVBQUUsZUFGTTtBQUdiQyx1QkFBYSxFQUFFO0FBSEY7QUFMTSxPQUFkLENBQVQ7QUFZQVIsUUFBRSxDQUFDMkIsRUFBSCxDQUFNLENBQUNMLE9BQUQsRUFBVUUsT0FBVixDQUFOLEVBQTBCO0FBQ3hCQyxTQUFDLEVBQUMsQ0FEc0I7QUFFeEJDLGVBQU8sRUFBQyxDQUZnQjtBQUd4QmhCLGlCQUFTLEVBQUMsQ0FIYztBQUl4QkMsZUFBTyxFQUFFO0FBQ1BDLGdCQUFNLEVBQUUsR0FERDtBQUVQSCxjQUFJLEVBQUUsUUFGQztBQUdQTCxjQUFJLEVBQUU7QUFIQztBQUplLE9BQTFCLEVBU0csUUFUSDtBQVVELEtBdkNEO0FBd0NEO0FBQ0YsQ0FsRE07QUFvREEsSUFBSXdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFHekJ4RCxHQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkMsSUFBdkIsQ0FBNEIsWUFBVTtBQUVwQyxRQUFJd0QsUUFBUSxHQUFHekQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUIsSUFBUixDQUFhLGlCQUFiLENBQWY7QUFDQSxRQUFJbUMsVUFBVSxHQUFHRCxRQUFRLENBQUNsQyxJQUFULENBQWMsSUFBZCxDQUFqQjtBQUNBLFFBQUlvQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ2xDLElBQVQsQ0FBYyxHQUFkLENBQWhCO0FBQ0EsUUFBSXFDLFFBQVEsR0FBRzVELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSxVQUFiLENBQWY7QUFDQSxRQUFJc0MsR0FBRyxHQUFHRCxRQUFRLENBQUNyQyxJQUFULENBQWMsSUFBZCxDQUFWO0FBQ0EsUUFBSXVCLEdBQUcsR0FBR2MsUUFBUSxDQUFDckMsSUFBVCxDQUFjLElBQWQsQ0FBVjtBQUNBLFFBQUl1QyxRQUFRLEdBQUc5RCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixJQUFSLENBQWEsVUFBYixDQUFmO0FBQ0EsUUFBSXdCLE9BQU8sR0FBRyxJQUFJM0IsU0FBSixDQUFjMEIsR0FBZCxFQUFtQjtBQUFDRSxVQUFJLEVBQUM7QUFBTixLQUFuQixDQUFkO0FBQ0EsUUFBSWUsT0FBTyxHQUFHLElBQUkzQyxTQUFKLENBQWN5QyxHQUFkLEVBQW1CO0FBQUNiLFVBQUksRUFBQztBQUFOLEtBQW5CLENBQWQ7QUFDQSxRQUFJRSxPQUFPLEdBQUdILE9BQU8sQ0FBQ0ksS0FBdEI7QUFDQSxRQUFJYSxPQUFPLEdBQUdELE9BQU8sQ0FBQ1osS0FBdEIsQ0Fab0MsQ0FlcEM7O0FBRUFsQyxRQUFJLENBQUNPLEdBQUwsQ0FBU3hCLENBQUMsQ0FBQyxJQUFELENBQVYsRUFBa0I7QUFDaEIwQixjQUFRLEVBQUM7QUFETyxLQUFsQjtBQUlBVCxRQUFJLENBQUNPLEdBQUwsQ0FBU3NDLFFBQVQsRUFBbUI7QUFDakJyQyxpQkFBVyxFQUFDO0FBREssS0FBbkI7QUFJQVIsUUFBSSxDQUFDTyxHQUFMLENBQVNvQyxRQUFULEVBQW1CO0FBQ2pCakMscUJBQWUsRUFBRTtBQURBLEtBQW5CO0FBSUFWLFFBQUksQ0FBQ08sR0FBTCxDQUFTaUMsUUFBVCxFQUFtQjtBQUNqQmhDLGlCQUFXLEVBQUM7QUFESyxLQUFuQjtBQU1BLFFBQUlHLEVBQUUsR0FBR1gsSUFBSSxDQUFDWSxRQUFMLENBQWM7QUFDckJDLGNBQVEsRUFBRTtBQUNSbUMsYUFBSyxFQUFDLEdBREU7QUFFUmxDLGdCQUFRLEVBQUUsSUFGRjtBQUdSQyxZQUFJLEVBQUU7QUFIRSxPQURXLENBTXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVnFCLEtBQWQsQ0FBVCxDQW5Db0MsQ0FnRHBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBSixNQUFFLENBQUNTLElBQUgsQ0FBUSxDQUFDMkIsT0FBRCxFQUFVZCxPQUFWLENBQVIsRUFBNEI7QUFDMUJHLE9BQUMsRUFBQyxFQUR3QjtBQUUxQkMsYUFBTyxFQUFDLENBRmtCO0FBRzFCM0IscUJBQWUsRUFBRSxZQUhTO0FBSTFCWSxhQUFPLEVBQUU7QUFDUEMsY0FBTSxFQUFFLEdBREQ7QUFFUFIsWUFBSSxFQUFFO0FBRkM7QUFKaUIsS0FBNUIsRUFRRyxRQVJIO0FBVUFKLE1BQUUsQ0FBQ1MsSUFBSCxDQUFRcUIsVUFBUixFQUFvQjtBQUNsQkosYUFBTyxFQUFDLENBRFU7QUFFbEJELE9BQUMsRUFBQyxFQUZnQjtBQUdsQmQsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxHQUREO0FBRVBSLFlBQUksRUFBRTtBQUZDO0FBSFMsS0FBcEIsRUFPRyxhQVBIO0FBU0FKLE1BQUUsQ0FBQ1MsSUFBSCxDQUFRc0IsU0FBUixFQUFtQjtBQUNqQkwsYUFBTyxFQUFDLENBRFM7QUFFakJELE9BQUMsRUFBQyxFQUZlO0FBR2pCZCxhQUFPLEVBQUU7QUFDUEMsY0FBTSxFQUFFLEdBREQ7QUFFUFIsWUFBSSxFQUFFO0FBRkM7QUFIUSxLQUFuQixFQU9HLGFBUEg7QUFRRCxHQWhGRDtBQWlGRCxDQXBGTSxDOzs7Ozs7Ozs7Ozs7QUNoR1BmO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLElBQUksQ0FBQ0MsY0FBTCxDQUFvQkMsYUFBcEI7QUFDQUYsSUFBSSxDQUFDQyxjQUFMLENBQW9CRSxTQUFwQjtBQUVPLElBQUk4QyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFFaENsRSxHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CQyxJQUFuQixDQUF3QixZQUFVO0FBR2hDLFFBQUlrRSxnQkFBZ0IsR0FBR25FLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSxrQkFBYixDQUF2QjtBQUNBLFFBQUk2QyxTQUFTLEdBQUdwRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixJQUFSLENBQWEsSUFBYixDQUFoQjtBQUNBLFFBQUk4QyxFQUFFLEdBQUdyRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QixJQUFSLENBQWEsR0FBYixDQUFUO0FBQ0EsUUFBSStDLE9BQU8sR0FBR3RFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSxnQkFBYixDQUFkO0FBQ0EsUUFBSWdELFdBQVcsR0FBRyxJQUFJbkQsU0FBSixDQUFjZ0QsU0FBZCxFQUF5QjtBQUFDcEIsVUFBSSxFQUFDO0FBQU4sS0FBekIsQ0FBbEIsQ0FQZ0MsQ0FRaEM7O0FBQ0EsUUFBSXdCLEtBQUssR0FBR0QsV0FBVyxDQUFDQyxLQUF4QixDQVRnQyxDQVdoQztBQUNBOztBQUVBdkQsUUFBSSxDQUFDTyxHQUFMLENBQVNnRCxLQUFULEVBQWdCO0FBQUNuQixPQUFDLEVBQUMsTUFBSDtBQUFXQyxhQUFPLEVBQUM7QUFBbkIsS0FBaEI7O0FBQ0EsUUFBR2UsRUFBRSxDQUFDMUIsTUFBTixFQUFjO0FBQ1oxQixVQUFJLENBQUNPLEdBQUwsQ0FBUzZDLEVBQVQsRUFBYTtBQUFDaEIsU0FBQyxFQUFDLE1BQUg7QUFBV0MsZUFBTyxFQUFDO0FBQW5CLE9BQWI7QUFDRDs7QUFDRHJDLFFBQUksQ0FBQ08sR0FBTCxDQUFTOEMsT0FBVCxFQUFrQjtBQUFDaEIsYUFBTyxFQUFDO0FBQVQsS0FBbEI7QUFHQSxRQUFJMUIsRUFBRSxHQUFHWCxJQUFJLENBQUNZLFFBQUwsQ0FBYztBQUNyQkMsY0FBUSxFQUFFO0FBQ1JDLGdCQUFRLEVBQUUsSUFERjtBQUVSQyxZQUFJLEVBQUU7QUFGRSxPQURXO0FBS3JCQyxtQkFBYSxFQUFFO0FBQ2JDLGVBQU8sRUFBRWlDLGdCQURJO0FBRWJoQyxhQUFLLEVBQUUsZUFGTTtBQUdiQyxxQkFBYSxFQUFFLHdCQUhGLENBSWI7O0FBSmE7QUFMTSxLQUFkLENBQVQ7QUFjQVIsTUFBRSxDQUFDMkIsRUFBSCxDQUFNaUIsS0FBTixFQUFhO0FBQUNuQixPQUFDLEVBQUMsQ0FBSDtBQUFNQyxhQUFPLEVBQUMsQ0FBZDtBQUFpQmYsYUFBTyxFQUFFO0FBQUNDLGNBQU0sRUFBRSxJQUFUO0FBQWVSLFlBQUksRUFBRTtBQUFyQjtBQUExQixLQUFiLEVBQThFLFFBQTlFOztBQUNBLFFBQUdxQyxFQUFFLENBQUMxQixNQUFOLEVBQWM7QUFDWmYsUUFBRSxDQUFDMkIsRUFBSCxDQUFNYyxFQUFOLEVBQVU7QUFBQ2hCLFNBQUMsRUFBQyxDQUFIO0FBQU1DLGVBQU8sRUFBQztBQUFkLE9BQVYsRUFBNEIsY0FBNUI7QUFDRDs7QUFDRDFCLE1BQUUsQ0FBQzJCLEVBQUgsQ0FBTWUsT0FBTixFQUFlO0FBQUNoQixhQUFPLEVBQUM7QUFBVCxLQUFmLEVBQTRCLGNBQTVCO0FBQ0QsR0F4Q0Q7QUF5Q0QsQ0EzQ007QUE2Q0EsSUFBSW1CLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUVoQyxNQUFHekUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMEUsUUFBVixDQUFtQixtQkFBbkIsQ0FBSCxFQUEyQztBQUV6QyxRQUFJQyxLQUFLLEdBQUczRSxDQUFDLENBQUMsZUFBRCxDQUFELENBQW1CNEUsUUFBbkIsRUFBWjtBQUNBLFFBQUloRCxFQUFFLEdBQUdYLElBQUksQ0FBQ1ksUUFBTCxDQUFjO0FBQ3JCb0MsV0FBSyxFQUFDLENBRGU7QUFFckJuQyxjQUFRLEVBQUU7QUFDUkMsZ0JBQVEsRUFBRSxHQURGO0FBRVJDLFlBQUksRUFBRTtBQUZFO0FBRlcsS0FBZCxDQUFUO0FBUUFmLFFBQUksQ0FBQ08sR0FBTCxDQUFTbUQsS0FBVCxFQUFnQjtBQUFDaEQscUJBQWUsRUFBQztBQUFqQixLQUFoQjtBQUVBQyxNQUFFLENBQUNTLElBQUgsQ0FBUXNDLEtBQVIsRUFBZTtBQUNiRSxXQUFLLEVBQUMsR0FETztBQUVidkIsYUFBTyxFQUFDLENBRks7QUFHYmYsYUFBTyxFQUFFO0FBQ1BGLFlBQUksRUFBRSxRQURDO0FBRVBHLGNBQU0sRUFBRSxJQUZEO0FBR1BSLFlBQUksRUFBRTtBQUhDO0FBSEksS0FBZjtBQVNEO0FBQ0YsQ0F6Qk07QUEyQkEsSUFBSThDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUUvQixNQUFHOUUsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVMEUsUUFBVixDQUFtQixlQUFuQixDQUFILEVBQXVDO0FBRXJDLFFBQUlLLFFBQVEsR0FBRy9FLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCZ0YsS0FBckIsRUFBZjtBQUVBLFFBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDSCxRQUFULEVBQVo7QUFDQSxRQUFJaEQsRUFBRSxHQUFHWCxJQUFJLENBQUNZLFFBQUwsQ0FBYztBQUNyQm9DLFdBQUssRUFBQyxDQURlO0FBRXJCbkMsY0FBUSxFQUFFO0FBQ1JDLGdCQUFRLEVBQUUsR0FERjtBQUVSQyxZQUFJLEVBQUU7QUFGRTtBQUZXLEtBQWQsQ0FBVCxDQUxxQyxDQWF2Qzs7QUFFRUosTUFBRSxDQUFDUyxJQUFILENBQVE0QyxLQUFSLEVBQWU7QUFDYjVCLE9BQUMsRUFBQyxNQURXO0FBRWJDLGFBQU8sRUFBQyxDQUZLO0FBR2JmLGFBQU8sRUFBRTtBQUNQQyxjQUFNLEVBQUUsR0FERDtBQUVQSCxZQUFJLEVBQUMsUUFGRTtBQUdQTCxZQUFJLEVBQUU7QUFIQztBQUhJLEtBQWY7QUFTRDtBQUNGLENBM0JNLEM7Ozs7Ozs7Ozs7OztBQzNFUGY7QUFBQUE7QUFBQUE7QUFBQUEsSUFBSSxDQUFDQyxjQUFMLENBQW9CQyxhQUFwQjtBQUNBRixJQUFJLENBQUNDLGNBQUwsQ0FBb0JFLFNBQXBCO0FBR08sSUFBSThELFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFFM0IsTUFBSUMsS0FBSyxHQUFHbkYsQ0FBQyxDQUFDLFlBQUQsQ0FBYjs7QUFFQSxNQUFJbUYsS0FBSyxDQUFDeEMsTUFBVixFQUFrQjtBQUVoQixRQUFJeUMsU0FBUyxHQUFHRCxLQUFLLENBQUM1RCxJQUFOLENBQVcsV0FBWCxDQUFoQjtBQUNBLFFBQUl1QyxRQUFRLEdBQUdxQixLQUFLLENBQUM1RCxJQUFOLENBQVcsVUFBWCxDQUFmO0FBQ0EsUUFBSThELEdBQUcsR0FBR0YsS0FBSyxDQUFDNUQsSUFBTixDQUFXLElBQVgsQ0FBVjtBQUNBLFFBQUkrRCxPQUFPLEdBQUcsSUFBSWxFLFNBQUosQ0FBY2lFLEdBQWQsRUFBbUI7QUFBQ3JDLFVBQUksRUFBQztBQUFOLEtBQW5CLENBQWQ7QUFDQSxRQUFJdUMsT0FBTyxHQUFHRCxPQUFPLENBQUNuQyxLQUF0QixDQU5nQixDQVNsQjs7QUFFRWxDLFFBQUksQ0FBQ08sR0FBTCxDQUFTc0MsUUFBVCxFQUFtQjtBQUNqQnJDLGlCQUFXLEVBQUM7QUFESyxLQUFuQjtBQUlBUixRQUFJLENBQUNPLEdBQUwsQ0FBUzRELFNBQVQsRUFBb0I7QUFDbEJ6RCxxQkFBZSxFQUFDLFNBREU7QUFFbEJrRCxXQUFLLEVBQUM7QUFGWSxLQUFwQjtBQUtBNUQsUUFBSSxDQUFDTyxHQUFMLENBQVMrRCxPQUFULEVBQWtCO0FBQ2hCbEMsT0FBQyxFQUFDLENBRGM7QUFFaEJmLGVBQVMsRUFBQyxDQUFDLEVBRks7QUFHaEJnQixhQUFPLEVBQUMsQ0FIUTtBQUloQjNCLHFCQUFlLEVBQUU7QUFKRCxLQUFsQjtBQU9BLFFBQUlDLEVBQUUsR0FBR1gsSUFBSSxDQUFDWSxRQUFMLENBQWM7QUFDckJvQyxXQUFLLEVBQUMsR0FEZTtBQUVyQm5DLGNBQVEsRUFBRTtBQUNSQyxnQkFBUSxFQUFFLEdBREY7QUFFUkMsWUFBSSxFQUFFO0FBRkU7QUFGVyxLQUFkLENBQVQ7QUFRQUosTUFBRSxDQUFDMkIsRUFBSCxDQUFNZ0MsT0FBTixFQUFlO0FBQ2JsQyxPQUFDLEVBQUMsQ0FEVztBQUViQyxhQUFPLEVBQUMsQ0FGSztBQUdiaEIsZUFBUyxFQUFDLENBSEc7QUFJYkMsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxHQUREO0FBRVBILFlBQUksRUFBRSxRQUZDO0FBR1BMLFlBQUksRUFBRTtBQUhDO0FBSkksS0FBZixFQVNHLFFBVEg7QUFZQSxRQUFJd0QsS0FBSyxHQUFHdkUsSUFBSSxDQUFDWSxRQUFMLENBQWM7QUFDeEJDLGNBQVEsRUFBRTtBQUNSQyxnQkFBUSxFQUFFLEVBREY7QUFFUkMsWUFBSSxFQUFFO0FBRkU7QUFEYyxLQUFkLENBQVo7QUFPQXdELFNBQUssQ0FBQ2pDLEVBQU4sQ0FBUzZCLFNBQVQsRUFBb0I7QUFDbEJQLFdBQUssRUFBQztBQURZLEtBQXBCO0FBSUQ7QUFDRixDQS9ETTtBQWlFQSxJQUFJWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBRTlCLE1BQUlOLEtBQUssR0FBR25GLENBQUMsQ0FBQyxlQUFELENBQWI7O0FBRUEsTUFBSW1GLEtBQUssQ0FBQ3hDLE1BQVYsRUFBa0I7QUFFaEIsUUFBSStDLFVBQVUsR0FBRzFGLENBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJ1QixJQUFuQixDQUF3QixVQUF4QixDQUFqQjtBQUNBLFFBQUk4RCxHQUFHLEdBQUdGLEtBQUssQ0FBQzVELElBQU4sQ0FBVyxJQUFYLENBQVY7QUFDQSxRQUFJdUIsR0FBRyxHQUFHcUMsS0FBSyxDQUFDNUQsSUFBTixDQUFXLElBQVgsQ0FBVjtBQUNBLFFBQUk4QyxFQUFFLEdBQUdjLEtBQUssQ0FBQzVELElBQU4sQ0FBVyxHQUFYLENBQVQ7QUFDQSxRQUFJb0UsR0FBRyxHQUFHUixLQUFLLENBQUM1RCxJQUFOLENBQVcsSUFBWCxDQUFWO0FBQ0EsUUFBSXdCLE9BQU8sR0FBRyxJQUFJM0IsU0FBSixDQUFjMEIsR0FBZCxFQUFtQjtBQUFDRSxVQUFJLEVBQUM7QUFBTixLQUFuQixDQUFkO0FBQ0EsUUFBSXNDLE9BQU8sR0FBRyxJQUFJbEUsU0FBSixDQUFjaUUsR0FBZCxFQUFtQjtBQUFDckMsVUFBSSxFQUFDO0FBQU4sS0FBbkIsQ0FBZCxDQVJnQixDQVNoQjs7QUFDQSxRQUFJRSxPQUFPLEdBQUdILE9BQU8sQ0FBQ3lCLEtBQXRCO0FBQ0EsUUFBSWUsT0FBTyxHQUFHRCxPQUFPLENBQUNuQyxLQUF0QixDQVhnQixDQVloQjs7QUFFQWxDLFFBQUksQ0FBQ08sR0FBTCxDQUFTa0UsVUFBVCxFQUFxQjtBQUFDakUsaUJBQVcsRUFBQztBQUFiLEtBQXJCO0FBRUFSLFFBQUksQ0FBQ08sR0FBTCxDQUFTK0QsT0FBVCxFQUFrQjtBQUNoQmxDLE9BQUMsRUFBQyxDQURjO0FBRWhCZixlQUFTLEVBQUMsQ0FBQyxFQUZLO0FBR2hCZ0IsYUFBTyxFQUFDLENBSFE7QUFJaEIzQixxQkFBZSxFQUFFO0FBSkQsS0FBbEI7O0FBT0EsUUFBSXVCLE9BQU8sQ0FBQ1AsTUFBWixFQUFvQjtBQUNsQjFCLFVBQUksQ0FBQ08sR0FBTCxDQUFTMEIsT0FBVCxFQUFrQjtBQUNoQkcsU0FBQyxFQUFDLENBRGM7QUFFaEJmLGlCQUFTLEVBQUMsQ0FBQyxFQUZLO0FBR2hCZ0IsZUFBTyxFQUFDLENBSFE7QUFJaEIzQix1QkFBZSxFQUFFO0FBSkQsT0FBbEI7QUFNRDs7QUFFRCxRQUFJMEMsRUFBRSxDQUFDMUIsTUFBUCxFQUFlO0FBQ2IxQixVQUFJLENBQUNPLEdBQUwsQ0FBUzZDLEVBQVQsRUFBYTtBQUNYZixlQUFPLEVBQUMsQ0FERztBQUVYRCxTQUFDLEVBQUMsQ0FBQyxFQUZRO0FBR1gxQix1QkFBZSxFQUFFO0FBSE4sT0FBYjtBQUtBVixVQUFJLENBQUNPLEdBQUwsQ0FBU21FLEdBQVQsRUFBYztBQUNackMsZUFBTyxFQUFDLENBREk7QUFFWjNCLHVCQUFlLEVBQUU7QUFGTCxPQUFkO0FBSUQ7O0FBR0QsUUFBSUMsRUFBRSxHQUFHWCxJQUFJLENBQUNZLFFBQUwsQ0FBYztBQUNyQm9DLFdBQUssRUFBQyxHQURlO0FBRXJCbkMsY0FBUSxFQUFFO0FBQ1JDLGdCQUFRLEVBQUUsR0FERjtBQUVSQyxZQUFJLEVBQUU7QUFGRSxPQUZXLENBTXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBVnFCLEtBQWQsQ0FBVDtBQWFBSixNQUFFLENBQUMyQixFQUFILENBQU1nQyxPQUFOLEVBQWU7QUFDYmxDLE9BQUMsRUFBQyxDQURXO0FBRWJDLGFBQU8sRUFBQyxDQUZLO0FBR2JoQixlQUFTLEVBQUMsQ0FIRztBQUliQyxhQUFPLEVBQUU7QUFDUEMsY0FBTSxFQUFFLEdBREQ7QUFFUEgsWUFBSSxFQUFFLFFBRkM7QUFHUEwsWUFBSSxFQUFFO0FBSEM7QUFKSSxLQUFmLEVBU0csUUFUSDs7QUFXQSxRQUFJa0IsT0FBTyxDQUFDUCxNQUFaLEVBQW9CO0FBQ2xCZixRQUFFLENBQUMyQixFQUFILENBQU1MLE9BQU4sRUFBZTtBQUNiRyxTQUFDLEVBQUMsQ0FEVztBQUViQyxlQUFPLEVBQUMsQ0FGSztBQUdiaEIsaUJBQVMsRUFBQyxDQUhHO0FBSWJQLGdCQUFRLEVBQUMsR0FKSTtBQUtiUSxlQUFPLEVBQUU7QUFDUEMsZ0JBQU0sRUFBRSxHQUREO0FBRVBILGNBQUksRUFBRSxRQUZDO0FBR1BMLGNBQUksRUFBRTtBQUhDO0FBTEksT0FBZixFQVVHLGNBVkg7QUFXRDs7QUFFRCxRQUFJcUMsRUFBRSxDQUFDMUIsTUFBUCxFQUFlO0FBQ2JmLFFBQUUsQ0FBQzJCLEVBQUgsQ0FBTSxDQUFDYyxFQUFELEVBQUtzQixHQUFMLENBQU4sRUFBaUI7QUFDZnJDLGVBQU8sRUFBQyxDQURPO0FBRWZELFNBQUMsRUFBQyxDQUZhO0FBR2Z0QixnQkFBUSxFQUFDO0FBSE0sT0FBakIsRUFJRyxlQUpIO0FBS0Q7QUFDRjtBQUNGLENBL0ZNLEM7Ozs7Ozs7Ozs7O0FDckVQLElBQUk2RCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCNUYsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0I2RixLQUF0QixDQUE0QjtBQUMxQkMsY0FBVSxFQUFFLElBRGM7QUFFMUJDLFFBQUksRUFBRSxLQUZvQjtBQUcxQkMsaUJBQWEsRUFBRSxPQUhXO0FBSTFCQyxnQkFBWSxFQUFFLENBSlk7QUFLMUJDLGlCQUFhLEVBQUUsSUFMVztBQU0xQkMsWUFBUSxFQUFFLElBTmdCO0FBTzFCQyxZQUFRLEVBQUUsSUFQZ0I7QUFRMUJDLFNBQUssRUFBQyxJQVJvQjtBQVMxQkMsaUJBQWEsRUFBRSxJQVRXO0FBVTFCQyxnQkFBWSxFQUFDLEtBVmE7QUFXMUJDLFdBQU8sRUFBRSwrQkFYaUI7QUFZMUI7QUFDQUMsYUFBUyxFQUFDekcsQ0FBQyxDQUFDLFlBQUQsQ0FiZTtBQWMxQjBHLGFBQVMsRUFBQzFHLENBQUMsQ0FBQyxZQUFELENBZGU7QUFlMUIyRyxjQUFVLEVBQUUsQ0FDVjtBQUNFQyxnQkFBVSxFQUFFLEdBRGQ7QUFFRUMsY0FBUSxFQUFFO0FBQ1JYLHFCQUFhLEVBQUUsS0FEUDtBQUVSWSxjQUFNLEVBQUUsS0FGQTtBQUdSaEIsa0JBQVUsRUFBRSxJQUhKO0FBSVJFLHFCQUFhLEVBQUUsTUFKUDtBQUtSQyxvQkFBWSxFQUFFO0FBTE47QUFGWixLQURVO0FBZmMsR0FBNUI7QUE0QkQsQ0E3QkQ7O0FBK0JBakcsQ0FBQyxDQUFDZSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBQzNCNEUsU0FBTztBQUNSLENBRkQsRTs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQSxJQUFJbUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLE1BQUlDLGFBQWEsR0FBRyxtWEFBcEI7QUFDQWhILEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWlILE1BQVYsQ0FBaUJELGFBQWpCO0FBQ0QsQ0FIRCxDLENBS0E7OztBQUNBbEcsTUFBTSxDQUFFQyxRQUFGLENBQU4sQ0FBbUJDLEtBQW5CLENBQXlCLFVBQVNoQixDQUFULEVBQVk7QUFDbkMsTUFBR0EsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0IyQyxNQUF6QixFQUFpQztBQUMvQm9FLG9CQUFnQjtBQUNqQjtBQUNGLENBSkQsRTs7Ozs7Ozs7Ozs7QUNQQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3RCLE1BQUl0RixFQUFFLEdBQUcsSUFBSVgsSUFBSSxDQUFDWSxRQUFULENBQWtCO0FBQzFCc0YsVUFBTSxFQUFDLElBRG1CO0FBRTFCckYsWUFBUSxFQUFFO0FBQUU7QUFDWEMsY0FBUSxFQUFDLEdBREE7QUFFVEMsVUFBSSxFQUFFO0FBRkc7QUFGZ0IsR0FBbEIsQ0FBVDtBQU9BLE1BQUlvRixRQUFRLEdBQUdwSCxDQUFDLENBQUMsV0FBRCxDQUFoQjtBQUNBLE1BQUlxSCxLQUFLLEdBQUdySCxDQUFDLENBQUMsT0FBRCxDQUFiO0FBQ0EsTUFBSXNILElBQUksR0FBR3RILENBQUMsQ0FBQyxTQUFELENBQVo7QUFDQSxNQUFJdUgsSUFBSSxHQUFHdkgsQ0FBQyxDQUFDLFNBQUQsQ0FBWjtBQUNBLE1BQUl3SCxJQUFJLEdBQUd4SCxDQUFDLENBQUMsU0FBRCxDQUFaO0FBRUE0QixJQUFFLENBQUNKLEdBQUgsQ0FBT3hCLENBQUMsQ0FBQyxNQUFELENBQVIsRUFBa0I7QUFBQzBCLFlBQVEsRUFBQztBQUFWLEdBQWxCO0FBQ0FFLElBQUUsQ0FBQzJCLEVBQUgsQ0FBTTZELFFBQU4sRUFBZ0I7QUFBQ0ssT0FBRyxFQUFDLElBQUw7QUFBV0MsWUFBUSxFQUFDLG1EQUFwQjtBQUF5RTFGLFFBQUksRUFBRTtBQUEvRSxHQUFoQixFQUFnSCxVQUFoSDtBQUNBSixJQUFFLENBQUMyQixFQUFILENBQU04RCxLQUFOLEVBQWE7QUFBQy9ELFdBQU8sRUFBQyxDQUFUO0FBQVlELEtBQUMsRUFBQyxJQUFkO0FBQW9CZCxXQUFPLEVBQUU7QUFBQ0MsWUFBTSxFQUFDO0FBQVI7QUFBN0IsR0FBYixFQUF5RCxnQkFBekQ7QUFDQVosSUFBRSxDQUFDMkIsRUFBSCxDQUFNK0QsSUFBTixFQUFZO0FBQUNLLG1CQUFlLEVBQUMsU0FBakI7QUFBNEJDLFlBQVEsRUFBQyxDQUFDLEdBQXRDO0FBQTBDQyxLQUFDLEVBQUMsQ0FBNUM7QUFBK0N4RSxLQUFDLEVBQUM7QUFBakQsR0FBWixFQUFrRSxVQUFsRTtBQUNBekIsSUFBRSxDQUFDMkIsRUFBSCxDQUFNZ0UsSUFBTixFQUFZO0FBQUNJLG1CQUFlLEVBQUMsU0FBakI7QUFBNEJHLFNBQUssRUFBQztBQUFsQyxHQUFaLEVBQWtELFVBQWxEO0FBQ0FsRyxJQUFFLENBQUMyQixFQUFILENBQU1pRSxJQUFOLEVBQVk7QUFBQ0csbUJBQWUsRUFBQyxTQUFqQjtBQUE0QkMsWUFBUSxFQUFDLEdBQXJDO0FBQTBDQyxLQUFDLEVBQUMsQ0FBNUM7QUFBK0N4RSxLQUFDLEVBQUMsQ0FBQztBQUFsRCxHQUFaLEVBQW1FLFVBQW5FO0FBSUFyRCxHQUFDLENBQUMsYUFBRCxDQUFELENBQWlCK0gsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVztBQUV2QyxRQUFJL0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEUsUUFBUixDQUFpQixTQUFqQixDQUFKLEVBQWlDO0FBQ2hDOUMsUUFBRSxDQUFDb0csT0FBSDtBQUNBaEksT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUksV0FBUixDQUFvQixTQUFwQjtBQUNBLEtBSEQsTUFHTztBQUNOckcsUUFBRSxDQUFDc0csSUFBSDtBQUNBbEksT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUksUUFBUixDQUFpQixTQUFqQjtBQUNBO0FBQ0QsR0FURDtBQVdBLFNBQU92RyxFQUFQO0FBQ0EsQ0FuQ0Q7O0FBb0NBc0YsUUFBUSxHOzs7Ozs7Ozs7OztBQ3BDUixJQUFJa0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzNCLE1BQUlDLElBQUksR0FBR3JJLENBQUMsQ0FBQyw4QkFBRCxDQUFaO0FBQ0EsTUFBSXNJLE1BQU0sR0FBRyxnRUFBYjtBQUNBdEksR0FBQyxDQUFDcUksSUFBRCxDQUFELENBQVFFLEtBQVIsQ0FBY0QsTUFBZDtBQUNELENBSkQ7O0FBT0EsSUFBSUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFNO0FBRTdCeEksR0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJDLElBQTFCLENBQStCLFlBQVc7QUFDeEMsUUFBSXdJLE1BQU0sR0FBR3pJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSwwQkFBYixFQUF5Q21ILElBQXpDLENBQThDLElBQTlDLENBQWI7QUFDQSxRQUFJQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csT0FBUCxDQUFlLGFBQWYsRUFBOEIsRUFBOUIsQ0FBZDtBQUNBLFFBQUlDLFFBQVEsR0FBRzdJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVCLElBQVIsQ0FBYSxJQUFiLEVBQW1CdUgsSUFBbkIsRUFBZjtBQUNBLFFBQUlDLFFBQVEsR0FBRyxlQUFhSixPQUFiLEdBQXFCLElBQXJCLEdBQTBCRSxRQUExQixHQUFtQyxNQUFsRDtBQUNBN0ksS0FBQyxDQUFDLDJCQUFELENBQUQsQ0FBK0JpSCxNQUEvQixDQUFzQzhCLFFBQXRDO0FBQ0QsR0FORDtBQU9ELENBVEQ7O0FBV0EsSUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBRTNCLE1BQUlDLFlBQVksR0FBR2pKLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWtKLFdBQWIsRUFBbkI7QUFDQSxNQUFJQyxZQUFZLEdBQUduSixDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQmtKLFdBQXRCLEVBQW5CO0FBQ0EsTUFBSUUsWUFBWSxHQUFHSCxZQUFZLEdBQUdFLFlBQWxDO0FBQ0EsTUFBSUUsRUFBRSxHQUFHbEksYUFBYSxDQUFDbUksTUFBZCxDQUFxQjtBQUM1QnBILFdBQU8sRUFBRSx3QkFEbUI7QUFFNUJxSCxPQUFHLEVBQUUsa0JBRnVCO0FBRzVCcEgsU0FBSyxFQUFFLE9BQUtpSCxZQUFMLEdBQWtCLEVBSEc7QUFJNUJJLGNBQVUsRUFBRSxLQUpnQjtBQUs1QkMsT0FBRyxFQUFFO0FBTHVCLEdBQXJCLENBQVQ7QUFPRCxDQVpEOztBQWNBLElBQUl6SixDQUFDLENBQUMsTUFBRCxDQUFELENBQVUwRSxRQUFWLENBQW1CLGVBQW5CLENBQUosRUFBeUM7QUFDdkM7QUFDQTBELGtCQUFnQjtBQUNoQkksb0JBQWtCO0FBQ2xCUSxrQkFBZ0I7QUFDakIsQzs7Ozs7Ozs7Ozs7QUNyQ0QsSUFBSVUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN2QjtBQUNBMUosR0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQjJKLE9BQWhCLENBQXdCLE1BQXhCLEVBQStCLFlBQVU7QUFBQzNKLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRKLE1BQVI7QUFBa0IsR0FBNUQ7QUFDQSxDQUhEOztBQUtBeEosTUFBTSxDQUFDeUosTUFBUCxHQUFnQixVQUFDQyxDQUFELEVBQU87QUFDdEJKLGFBQVc7QUFDWCxDQUZELEM7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUVBLElBQUlLLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsT0FBRCxFQUFhO0FBRWpDL0ksTUFBSSxDQUFDQyxjQUFMLENBQW9CK0ksY0FBcEI7QUFDQXZKLE9BQUssQ0FBQ0MsY0FBTjtBQUVBLE1BQUl1SixNQUFNLEdBQUdsSyxDQUFDLENBQUNnSyxPQUFELENBQUQsQ0FBV3RCLElBQVgsQ0FBZ0IsTUFBaEIsQ0FBYjtBQUNBLE1BQUlPLFlBQVksR0FBR2pKLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYWtKLFdBQWIsRUFBbkI7QUFDQSxNQUFJQyxZQUFZLEdBQUduSixDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQmtKLFdBQXBCLEVBQW5CO0FBQ0EsTUFBSUUsWUFBWSxHQUFHSCxZQUFZLEdBQUdFLFlBQWxDOztBQUVBLE1BQUluSixDQUFDLENBQUMsTUFBRCxDQUFELENBQVUwRSxRQUFWLENBQW1CLGNBQW5CLENBQUosRUFBd0M7QUFDdEN6RCxRQUFJLENBQUNzQyxFQUFMLENBQVFuRCxNQUFSLEVBQWdCO0FBQUMyQixjQUFRLEVBQUMsR0FBVjtBQUFlQyxVQUFJLEVBQUUsVUFBckI7QUFBaUNtSSxjQUFRLEVBQUM7QUFBQzlHLFNBQUMsRUFBQzZHLE1BQUg7QUFBV0UsZUFBTyxFQUFDaEI7QUFBbkI7QUFBMUMsS0FBaEI7QUFDRCxHQUZELE1BRU87QUFDTG5JLFFBQUksQ0FBQ3NDLEVBQUwsQ0FBUW5ELE1BQVIsRUFBZ0I7QUFBQzJCLGNBQVEsRUFBQyxHQUFWO0FBQWVDLFVBQUksRUFBRSxVQUFyQjtBQUFpQ21JLGNBQVEsRUFBQztBQUFDOUcsU0FBQyxFQUFDNkcsTUFBSDtBQUFXRSxlQUFPLEVBQUNuQjtBQUFuQjtBQUExQyxLQUFoQjtBQUNEOztBQUNELFNBQU8sS0FBUDtBQUNELENBaEJEOztBQWtCQW5JLE1BQU0sQ0FBRUMsUUFBRixDQUFOLENBQW1CQyxLQUFuQixDQUF5QixVQUFTaEIsQ0FBVCxFQUFZO0FBQ25DQSxHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCcUssSUFBbEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBVztBQUV6Q04sbUJBQWUsQ0FBQy9KLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZixDQUZ5QyxDQUd6Qzs7QUFDQSxRQUFJc0ssTUFBTSxDQUFDeEMsS0FBUCxJQUFnQixJQUFwQixFQUF5QjtBQUN2QnlDLGVBQVM7QUFDVFIscUJBQWUsQ0FBQy9KLENBQUMsQ0FBQyxJQUFELENBQUYsQ0FBZjtBQUNEO0FBQ0YsR0FSRDtBQVNELENBVkQsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0FJLE1BQU0sQ0FBQ29LLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQVc7QUFDekM7QUFDQTtBQUNBdEcsOEVBQWM7QUFDZDdDLHNFQUFVO0FBQ1ZvQixvRUFBUTtBQUNSZSxtRUFBTztBQUNQMEIscUVBQVM7QUFDVE8sd0VBQVk7QUFDWmhCLDhFQUFjO0FBQ2RLLDZFQUFhLEdBVjRCLENBV3pDO0FBQ0E7O0FBRUEsTUFBSTlFLENBQUMsQ0FBQ0ksTUFBRCxDQUFELENBQVUwSCxLQUFWLE1BQXFCLElBQXpCLEVBQStCLENBQzdCO0FBQ0QsR0FGRCxNQUdLLENBQ0g7QUFDRCxLQW5Cd0MsQ0FvQnpDO0FBQ0E7QUFDQTtBQUNBOztBQUNELENBeEJEO0FBMkJBMUgsTUFBTSxDQUFDb0ssZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBVyxDQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQyxDQVJELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvcHJlbG9hZGVyJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21vYmlsZU1lbnUnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvZXh0ZXJuYWxMaW5rcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9sb2FkTWFpbGNoaW1wU2NyaXB0cy5qcyc7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvcGlubmVkU3ViTmF2LmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2hvbWUtY2Fyb3VzZWwuanMnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvd2luZG93TG9hZC5qcyc7XG5cblxuIiwibGV0IGV4dExpbmtzID0gKCkgPT4ge1xuXHQvLyBjb25zb2xlLmxvZygnZXh0ZXJuYWwgbGluaycpO1xuICAkKCdhJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IG5ldyBSZWdFeHAoJy8nICsgd2luZG93LmxvY2F0aW9uLmhvc3QgKyAnLycpO1xuICAgIGlmKCFhLnRlc3QodGhpcy5ocmVmKSkge1xuICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgd2luZG93Lm9wZW4odGhpcy5ocmVmLCAnX2JsYW5rJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgZXh0TGlua3MoKTtcbn0pO1xuIiwiZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU3BsaXRUZXh0KTtcblxuXG5leHBvcnQgbGV0IHJldmVhbEZsYWcgPSAoKSA9PiB7XG5cbiAgJCgnLndoaXRlRmxhZ0FuaW1hdGlvbicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICBcbiAgICBsZXQgJGZsYWdDbGlwID0gJCh0aGlzKS5maW5kKCcuZmxhZ0NsaXAnKTtcblxuICAgIGdzYXAuc2V0KCQodGhpcyksIHtcbiAgICAgIHBlcnNwZWN0aXZlOjIwMDAsIFxuICAgICAgb3ZlcmZsb3c6J2hpZGRlbidcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRmbGFnQ2xpcCwge1xuICAgICAgb3ZlcmZsb3c6J2hpZGRlbicsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgIH0pO1xuICAgIFxuXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgIGVhc2U6IFwiZWxhc3RpYy5vdXQoMC41LCAwLjUpXCJcbiAgICAgIH0sXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6ICQodGhpcyksXG4gICAgICAgIHN0YXJ0OiBcInRvcCBib3R0b20tPTIwMFwiLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRsLmZyb20oJGZsYWdDbGlwLCB7XG4gICAgICByb3RhdGlvblg6LTEyMCwgXG4gICAgICAvLyBoZWlnaHQ6MCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbicpO1xuICB9KTtcbn1cblxuZXhwb3J0IGxldCBoZXJvRmxhZyA9ICgpID0+IHtcbiAgICBcbiAgbGV0ICRmYWN0ID0gJCgnLmhlcm9CYW5uZXInKS5maW5kKCcuc2luZ2xlLWhlcm8tZmFjdCcpO1xuICBcbiAgaWYoJGZhY3QubGVuZ3RoKSB7XG4gIFxuICAgIGxldCAkYmFubmVyID0gJCgnLmhlcm9CYW5uZXInKS5maW5kKCcuZmxhZ0JhY2snKTtcbiAgICBnc2FwLnNldCgkYmFubmVyLCB7cGVyc3BlY3RpdmU6MTAwMH0pO1xuICAgIFxuICAgICRmYWN0LmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIFxuICAgICAgbGV0ICRoMiA9ICQodGhpcykuZmluZCgnaDInKTtcbiAgICAgIGxldCAkaDQgPSAkKHRoaXMpLmZpbmQoJ2g0Jyk7XG4gICAgICBsZXQgc3BsaXRoNCA9IG5ldyBTcGxpdFRleHQoJGg0LCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgICBsZXQgc3BsaXRoMiA9IG5ldyBTcGxpdFRleHQoJGgyLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7XG4gICAgICBsZXQgY2hhcnNoNCA9IHNwbGl0aDQuY2hhcnM7IFxuICAgICAgbGV0IGNoYXJzaDIgPSBzcGxpdGgyLmNoYXJzOyBcbiAgICAgIFxuICAgICAgXG4gICAgICBnc2FwLnNldChbY2hhcnNoNCwgY2hhcnNoMl0sIHtcbiAgICAgICAgeTowLCBcbiAgICAgICAgcm90YXRpb25YOi0xMjAsIFxuICAgICAgICBvcGFjaXR5OjAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4gICAgICB9KTtcbiAgXG4gICAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICBkdXJhdGlvbjogMS4yNSwgXG4gICAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgdHJpZ2dlcjogJCh0aGlzKSxcbiAgICAgICAgICBzdGFydDogXCJjZW50ZXIgYm90dG9tXCIsXG4gICAgICAgICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCIsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICBcbiAgICAgIHRsLnRvKFtjaGFyc2g0LCBjaGFyc2gyXSwge1xuICAgICAgICB5OjAsIFxuICAgICAgICBvcGFjaXR5OjEsIFxuICAgICAgICByb3RhdGlvblg6MCwgXG4gICAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgICBhbW91bnQ6IDAuMywgXG4gICAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgICB9XG4gICAgICB9LCAnY29tZWluJyk7XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgbGV0IHN1YkZsYWcgPSAoKSA9PiB7XG4gIFxuICBcbiAgJCgnLnN1YkZsYWdBbmltYXRpb24nKS5lYWNoKGZ1bmN0aW9uKCl7XG5cbiAgICBsZXQgJHN1YkRlc2MgPSAkKHRoaXMpLmZpbmQoJy5zdWJEZXNjcmlwdGlvbicpO1xuICAgIGxldCAkc3ViRGVzY2g0ID0gJHN1YkRlc2MuZmluZCgnaDQnKTtcbiAgICBsZXQgJHN1YkRlc2NwID0gJHN1YkRlc2MuZmluZCgncCcpO1xuICAgIGxldCAkc3ViRmxhZyA9ICQodGhpcykuZmluZCgnLnN1YkZsYWcnKTtcbiAgICBsZXQgJGgzID0gJHN1YkZsYWcuZmluZCgnaDMnKTtcbiAgICBsZXQgJGg0ID0gJHN1YkZsYWcuZmluZCgnaDQnKTtcbiAgICBsZXQgJGNvbnRlbnQgPSAkKHRoaXMpLmZpbmQoJy5jb250ZW50Jyk7XG4gICAgbGV0IHNwbGl0aDQgPSBuZXcgU3BsaXRUZXh0KCRoNCwge3R5cGU6XCJ3b3JkcywgY2hhcnNcIn0pO1xuICAgIGxldCBzcGxpdGgzID0gbmV3IFNwbGl0VGV4dCgkaDMsIHt0eXBlOlwid29yZHMsIGNoYXJzXCJ9KTtcbiAgICBsZXQgY2hhcnNoNCA9IHNwbGl0aDQuY2hhcnM7IFxuICAgIGxldCBjaGFyc2gzID0gc3BsaXRoMy5jaGFyczsgXG4gICAgXG5cbiAgICAvLyBjb25zb2xlLmxvZygkc3ViRGVzY0tpZHMpO1xuXG4gICAgZ3NhcC5zZXQoJCh0aGlzKSwge1xuICAgICAgb3ZlcmZsb3c6J2hpZGRlbidcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRjb250ZW50LCB7XG4gICAgICBwZXJzcGVjdGl2ZToyMDAwLCBcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCRzdWJGbGFnLCB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgIH0pO1xuXG4gICAgZ3NhcC5zZXQoJHN1YkRlc2MsIHtcbiAgICAgIHBlcnNwZWN0aXZlOjIwMDAsIFxuICAgIH0pO1xuICAgIFxuICAgIFxuXG4gICAgbGV0IHRsID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkZWxheToxLjIsXG4gICAgICAgIGR1cmF0aW9uOiAxLjI1LCBcbiAgICAgICAgZWFzZTogXCJlbGFzdGljLm91dCgwLjUsIDAuNSlcIlxuICAgICAgfSxcbiAgICAgIC8vIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIC8vICAgdHJpZ2dlcjogJCgnaGVhZGVyJyksXG4gICAgICAvLyAgIHN0YXJ0OiBcInRvcCB0b3AtPTFcIixcbiAgICAgIC8vICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCIsXG4gICAgICAvLyB9XG4gICAgfSk7XG5cbiAgICAvLyB0bC5mcm9tKCRzdWJGbGFnLCB7XG4gICAgLy8gICByb3RhdGlvblg6LTEyMCwgXG4gICAgLy8gICBkdXJhdGlvbjogMS41LCBcbiAgICAvLyB9LCAnY29tZWluJyk7XG5cbiAgICB0bC5mcm9tKFtjaGFyc2gzLCBjaGFyc2g0XSwge1xuICAgICAgeToyNCwgXG4gICAgICBvcGFjaXR5OjAsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJyxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9LFxuICAgIH0sICdjb21laW4nKTtcblxuICAgIHRsLmZyb20oJHN1YkRlc2NoNCwge1xuICAgICAgb3BhY2l0eTowLFxuICAgICAgeToxNCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbis9MC4zJyk7XG5cbiAgICB0bC5mcm9tKCRzdWJEZXNjcCwge1xuICAgICAgb3BhY2l0eTowLFxuICAgICAgeToxNCxcbiAgICAgIHN0YWdnZXI6IHtcbiAgICAgICAgYW1vdW50OiAwLjMsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9XG4gICAgfSwgJ2NvbWVpbis9MC41Jyk7XG4gIH0pO1xufSIsImdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNwbGl0VGV4dCk7XG5cbmV4cG9ydCBsZXQgcmV2ZWFsSGVhZGxpbmUgPSAoKSA9PiB7XG5cbiAgJCgnLmFuaW1hdGlvbk9uZScpLmVhY2goZnVuY3Rpb24oKXtcbiAgICBcblxuICAgIGxldCAkaGVhZGxpbmVUcmlnZ2VyID0gJCh0aGlzKS5maW5kKCcuaGVhZGxpbmVUcmlnZ2VyJyk7XG4gICAgbGV0ICRoZWFkbGluZSA9ICQodGhpcykuZmluZCgnaDInKTtcbiAgICBsZXQgJHAgPSAkKHRoaXMpLmZpbmQoJ3AnKTtcbiAgICBsZXQgJGJ1dHRvbiA9ICQodGhpcykuZmluZCgnLnNlZW1heC1idXR0b24nKTtcbiAgICBsZXQgbXlTcGxpdFRleHQgPSBuZXcgU3BsaXRUZXh0KCRoZWFkbGluZSwge3R5cGU6XCJ3b3Jkc1wifSk7XG4gICAgLy8gbGV0IGNoYXJzID0gbXlTcGxpdFRleHQuY2hhcnM7IFxuICAgIGxldCB3b3JkcyA9IG15U3BsaXRUZXh0LndvcmRzOyBcblxuICAgIC8vICQod29yZHMpLmFkZENsYXNzKCdzcGxpdFdvcmRzJyk7XG4gICAgLy8gJChjaGFycykuYWRkQ2xhc3MoJ3NwbGl0Q2hhcnMnKTtcblxuICAgIGdzYXAuc2V0KHdvcmRzLCB7eTpcIjI0cHhcIiwgb3BhY2l0eTowfSk7XG4gICAgaWYoJHAubGVuZ3RoKSB7XG4gICAgICBnc2FwLnNldCgkcCwge3k6XCIyNHB4XCIsIG9wYWNpdHk6MH0pO1xuICAgIH1cbiAgICBnc2FwLnNldCgkYnV0dG9uLCB7b3BhY2l0eTowfSk7XG4gICAgXG5cbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGR1cmF0aW9uOiAxLjI1LCBcbiAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuICAgICAgfSxcbiAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgdHJpZ2dlcjogJGhlYWRsaW5lVHJpZ2dlcixcbiAgICAgICAgc3RhcnQ6IFwiY2VudGVyIGJvdHRvbVwiLFxuICAgICAgICB0b2dnbGVBY3Rpb25zOiBcInBsYXkgbm9uZSBub25lIHJldmVyc2VcIixcbiAgICAgICAgLy8gbWFya2VyczogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuXG4gIFxuICAgIHRsLnRvKHdvcmRzLCB7eTowLCBvcGFjaXR5OjEsIHN0YWdnZXI6IHthbW91bnQ6IDAuMTUsIGVhc2U6IFwicG93ZXIyLmluT3V0XCJ9fSwgJ2NvbWVpbicpO1xuICAgIGlmKCRwLmxlbmd0aCkge1xuICAgICAgdGwudG8oJHAsIHt5OjAsIG9wYWNpdHk6MX0sICdjb21laW4rPTAuMjUnKTtcbiAgICB9XG4gICAgdGwudG8oJGJ1dHRvbiwge29wYWNpdHk6MX0sICdjb21laW4rPTAuMjUnKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBsZXQgcmV2ZWFsSW52b2x2ZWQgPSAoKSA9PiB7XG5cbiAgaWYoJCgnbWFpbicpLmhhc0NsYXNzKCdnZXQtaW52b2x2ZWQtcGFnZScpKXtcblxuICAgIGxldCAkc3RlcCA9ICQoJy5pbnZvbHZlZFN0ZXAnKS5jaGlsZHJlbigpO1xuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVsYXk6MSxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGR1cmF0aW9uOiAuNzUsIFxuICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEpXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZ3NhcC5zZXQoJHN0ZXAsIHt0cmFuc2Zvcm1PcmlnaW46XCI1MCUgNTAlXCJ9KTtcbiAgICAgICBcbiAgICB0bC5mcm9tKCRzdGVwLCB7XG4gICAgICBzY2FsZTowLjgsXG4gICAgICBvcGFjaXR5OjAsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGZyb206IFwicmFuZG9tXCIsIFxuICAgICAgICBhbW91bnQ6IDAuMzUsIFxuICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBsZXQgcmV2ZWFsUGFydG5lciA9ICgpID0+IHtcblxuICBpZigkKCdtYWluJykuaGFzQ2xhc3MoJ3BhcnRuZXJzLXBhZ2UnKSl7XG5cbiAgICBsZXQgJHBhcnRuZXIgPSAkKCcuc2luZ2xlLXBhcnRuZXInKS5maXJzdCgpO1xuXG4gICAgbGV0ICRraWRzID0gJHBhcnRuZXIuY2hpbGRyZW4oKTtcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlbGF5OjIsXG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICBkdXJhdGlvbjogMS4yLCBcbiAgICAgICAgZWFzZTogXCJiYWNrLm91dCgxKVwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAvLyAgIGdzYXAuc2V0KCRzdGVwLCB7dHJhbnNmb3JtT3JpZ2luOlwiNTAlIDUwJVwifSk7XG4gICAgICAgXG4gICAgdGwuZnJvbSgka2lkcywge1xuICAgICAgeTonMjBweCcsXG4gICAgICBvcGFjaXR5OjAsXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZnJvbToncmFuZG9tJyxcbiAgICAgICAgZWFzZTogXCJwb3dlcjIuaW5PdXRcIlxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5cbiIsImdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNwbGl0VGV4dCk7XG5cblxuZXhwb3J0IGxldCBoZXJvSW1hZ2UgPSAoKSA9PiB7XG5cbiAgbGV0ICRoZXJvID0gJCgnLmhlcm9JbWFnZScpO1xuXG4gIGlmICgkaGVyby5sZW5ndGgpIHtcbiAgICBcbiAgICBsZXQgJHRoZUltYWdlID0gJGhlcm8uZmluZCgnLnRoZUltYWdlJyk7XG4gICAgbGV0ICRjb250ZW50ID0gJGhlcm8uZmluZCgnLmNvbnRlbnQnKTtcbiAgICBsZXQgJGgxID0gJGhlcm8uZmluZCgnaDEnKTtcbiAgICBsZXQgc3BsaXRoMSA9IG5ldyBTcGxpdFRleHQoJGgxLCB7dHlwZTpcIndvcmRzLCBjaGFyc1wifSk7IFxuICAgIGxldCBjaGFyc2gxID0gc3BsaXRoMS5jaGFycztcbiAgICBcbiAgICBcbiAgLy8gICBsZXQgJGZsYWdDbGlwID0gJCh0aGlzKS5maW5kKCcuZmxhZ0NsaXAnKTtcblxuICAgIGdzYXAuc2V0KCRjb250ZW50LCB7XG4gICAgICBwZXJzcGVjdGl2ZToyMDAwLCBcbiAgICB9KTtcblxuICAgIGdzYXAuc2V0KCR0aGVJbWFnZSwgeyBcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjpcIjUwJSA1MCVcIixcbiAgICAgIHNjYWxlOjEuMjUsXG4gICAgfSk7XG5cbiAgICBnc2FwLnNldChjaGFyc2gxLCB7XG4gICAgICB5OjAsIFxuICAgICAgcm90YXRpb25YOi03MCwgXG4gICAgICBvcGFjaXR5OjAsXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgIH0pO1xuICBcbiAgICBsZXQgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgIGRlbGF5OjAuNixcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIGR1cmF0aW9uOiAuODUsIFxuICAgICAgICBlYXNlOiBcImJhY2sub3V0KDEuNilcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgXG4gICAgdGwudG8oY2hhcnNoMSwge1xuICAgICAgeTowLCBcbiAgICAgIG9wYWNpdHk6MSwgXG4gICAgICByb3RhdGlvblg6MCwgXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCJcbiAgICAgIH1cbiAgICB9LCAnY29tZWluJyk7XG5cblxuICAgIGxldCBpbWdUTCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZHVyYXRpb246IDEyLCBcbiAgICAgICAgZWFzZTogXCJub25lXCJcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpbWdUTC50bygkdGhlSW1hZ2UsIHtcbiAgICAgIHNjYWxlOjFcbiAgICB9KTtcbiAgXG4gIH1cbn1cblxuZXhwb3J0IGxldCBoZXJvSGVhZGxpbmUgPSAoKSA9PiB7XG4gICAgXG4gIGxldCAkaGVybyA9ICQoJy5oZXJvSGVhZGxpbmUnKTtcblxuICBpZiAoJGhlcm8ubGVuZ3RoKSB7XG4gICAgXG4gICAgbGV0ICRoZXJvSW5uZXIgPSAkKCcuaGVyb0hlYWRsaW5lJykuZmluZCgnLmNvbnRlbnQnKTtcbiAgICBsZXQgJGgxID0gJGhlcm8uZmluZCgnaDEnKTtcbiAgICBsZXQgJGg0ID0gJGhlcm8uZmluZCgnaDQnKTtcbiAgICBsZXQgJHAgPSAkaGVyby5maW5kKCdwJyk7XG4gICAgbGV0ICRociA9ICRoZXJvLmZpbmQoJ2hyJyk7XG4gICAgbGV0IHNwbGl0aDQgPSBuZXcgU3BsaXRUZXh0KCRoNCwge3R5cGU6XCJ3b3JkcywgY2hhcnNcIn0pO1xuICAgIGxldCBzcGxpdGgxID0gbmV3IFNwbGl0VGV4dCgkaDEsIHt0eXBlOlwid29yZHMsIGNoYXJzXCJ9KTtcbiAgICAvLyBsZXQgc3BsaXRwID0gbmV3IFNwbGl0VGV4dCgkcCwge3R5cGU6XCJ3b3Jkc1wifSk7XG4gICAgbGV0IGNoYXJzaDQgPSBzcGxpdGg0LndvcmRzOyBcbiAgICBsZXQgY2hhcnNoMSA9IHNwbGl0aDEuY2hhcnM7XG4gICAgLy8gbGV0IHdvcmRzcCA9IHNwbGl0cC53b3JkcztcbiAgICBcbiAgICBnc2FwLnNldCgkaGVyb0lubmVyLCB7cGVyc3BlY3RpdmU6MTAwMH0pO1xuXG4gICAgZ3NhcC5zZXQoY2hhcnNoMSwge1xuICAgICAgeTowLCBcbiAgICAgIHJvdGF0aW9uWDotNzAsIFxuICAgICAgb3BhY2l0eTowLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbiAgICB9KTtcblxuICAgIGlmIChjaGFyc2g0Lmxlbmd0aCkge1xuICAgICAgZ3NhcC5zZXQoY2hhcnNoNCwge1xuICAgICAgICB5OjAsIFxuICAgICAgICByb3RhdGlvblg6LTcwLCBcbiAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgY2VudGVyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCRwLmxlbmd0aCkge1xuICAgICAgZ3NhcC5zZXQoJHAsIHtcbiAgICAgICAgb3BhY2l0eTowLFxuICAgICAgICB5Oi0xOCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGNlbnRlcidcbiAgICAgIH0pOyBcbiAgICAgIGdzYXAuc2V0KCRociwge1xuICAgICAgICBvcGFjaXR5OjAsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInXG4gICAgICB9KTsgIFxuICAgIH1cbiAgICBcblxuICAgIGxldCB0bCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgZGVsYXk6MC42LFxuICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgZHVyYXRpb246IC44NSwgXG4gICAgICAgIGVhc2U6IFwiYmFjay5vdXQoMS42KVwiLFxuICAgICAgfSxcbiAgICAgIC8vIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgIC8vICAgdHJpZ2dlcjogJGhlcm8sXG4gICAgICAvLyAgIHN0YXJ0OiBcImNlbnRlciBib3R0b21cIixcbiAgICAgIC8vICAgdG9nZ2xlQWN0aW9uczogXCJwbGF5IG5vbmUgbm9uZSByZXZlcnNlXCIsXG4gICAgICAvLyB9XG4gICAgfSk7XG4gICAgXG4gICAgdGwudG8oY2hhcnNoMSwge1xuICAgICAgeTowLCBcbiAgICAgIG9wYWNpdHk6MSwgXG4gICAgICByb3RhdGlvblg6MCwgXG4gICAgICBzdGFnZ2VyOiB7XG4gICAgICAgIGFtb3VudDogMC4zLCBcbiAgICAgICAgZnJvbTogXCJyYW5kb21cIiwgXG4gICAgICAgIGVhc2U6IFwicG93ZXIyLmluT3V0XCJcbiAgICAgIH1cbiAgICB9LCAnY29tZWluJyk7XG5cbiAgICBpZiAoY2hhcnNoNC5sZW5ndGgpIHsgIFxuICAgICAgdGwudG8oY2hhcnNoNCwge1xuICAgICAgICB5OjAsIFxuICAgICAgICBvcGFjaXR5OjEsIFxuICAgICAgICByb3RhdGlvblg6MCwgXG4gICAgICAgIGR1cmF0aW9uOjAuNSxcbiAgICAgICAgc3RhZ2dlcjoge1xuICAgICAgICAgIGFtb3VudDogMC4xLCBcbiAgICAgICAgICBmcm9tOiBcInJhbmRvbVwiLCBcbiAgICAgICAgICBlYXNlOiBcInBvd2VyMi5pbk91dFwiXG4gICAgICAgIH1cbiAgICAgIH0sICdjb21laW4yLT0wLjInKTtcbiAgICB9XG5cbiAgICBpZiAoJHAubGVuZ3RoKSB7XG4gICAgICB0bC50byhbJHAsICRocl0sIHtcbiAgICAgICAgb3BhY2l0eToxLCBcbiAgICAgICAgeTowLFxuICAgICAgICBkdXJhdGlvbjowLjgsXG4gICAgICB9LCAnY29tZWluMi09MC4yNScpO1xuICAgIH1cbiAgfVxufSIsImxldCBzbGlja0l0ID0gKCkgPT4ge1xuICAkKCcuY2VudGVyLWNhcm91c2VsJykuc2xpY2soe1xuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgZG90czogZmFsc2UsXG4gICAgY2VudGVyUGFkZGluZzogJzE2MHB4JyxcbiAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBzcGVlZDoxNTAwLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgcGF1c2VPbkhvdmVyOmZhbHNlLFxuICAgIGNzc0Vhc2U6ICdjdWJpYy1iZXppZXIoLjEzLC43OSwuMjMsLjk2KScsXG4gICAgLy8gY3NzRWFzZTogJ2Vhc2VJbk91dENpcmMnLFxuICAgIHByZXZBcnJvdzokKCcucHJldkFycm93JyksXG4gICAgbmV4dEFycm93OiQoJy5uZXh0QXJyb3cnKSxcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgfSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBzbGlja0l0KCk7XG59KTsiLCIvLyBNYWtlIGEgdmFyaWFibGUgZm9yIHRoZSBNYWlsY2hpbXAgU2NyaXB0c1xubGV0IG1haWxjaGltcFNjcmlwdHMgPSAoKSA9PiB7XG4gIGxldCB0aGlzT25lU2NyaXB0ID0gJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi8vczMuYW1hem9uYXdzLmNvbS9kb3dubG9hZHMubWFpbGNoaW1wLmNvbS9qcy9tYy12YWxpZGF0ZS5qc1wiPjwvc2NyaXB0PjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPihmdW5jdGlvbigkKSB7d2luZG93LmZuYW1lcyA9IG5ldyBBcnJheSgpO3dpbmRvdy5mdHlwZXMgPSBuZXcgQXJyYXkoKTtmbmFtZXNbMF09XCJFTUFJTFwiO2Z0eXBlc1swXT1cImVtYWlsXCI7Zm5hbWVzWzFdPVwiRk5BTUVcIjtmdHlwZXNbMV09XCJ0ZXh0XCI7Zm5hbWVzWzJdPVwiTE5BTUVcIjtmdHlwZXNbMl09XCJ0ZXh0XCI7fShqUXVlcnkpKTt2YXIgJG1jaiA9IGpRdWVyeS5ub0NvbmZsaWN0KHRydWUpOzwvc2NyaXB0PidcbiAgJCgnYm9keScpLmFwcGVuZCh0aGlzT25lU2NyaXB0KTtcbn1cblxuLy8gSWYgdGhlIG1haWxjaGltcCBmb3IgaXMgUGVyZm9ybWFuY2VPYnNlcnZlckVudHJ5TGlzdCwgbG9hZCB0aGUgc2NyaXB0c1xualF1ZXJ5KCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKCQpIHtcbiAgaWYoJCgnI21jX2VtYmVkX3NpZ251cCcpLmxlbmd0aCkge1xuICAgIG1haWxjaGltcFNjcmlwdHMoKTtcbiAgfVxufSk7IiwiY29uc3QgbWVudU9wZW4gPSAoKSA9PiB7XG5cdGxldCB0bCA9IG5ldyBnc2FwLnRpbWVsaW5lKHtcblx0XHRwYXVzZWQ6dHJ1ZSxcblx0XHRkZWZhdWx0czogeyAvLyBjaGlsZHJlbiBpbmhlcml0IHRoZXNlIGRlZmF1bHRzXG5cdFx0XHRkdXJhdGlvbjowLjMsXG5cdFx0XHRlYXNlOiBcImJhY2sub3V0KDEpXCIsXG5cdFx0fSxcblx0fSk7XG5cdGxldCBmdWxsTWVudSA9ICQoXCIubWFpbi1uYXZcIik7XG5cdGxldCBsaW5rcyA9ICQoXCJuYXYgYVwiKTtcblx0bGV0IGhhbTEgPSAkKFwiLmhhbVRvcFwiKTtcblx0bGV0IGhhbTIgPSAkKFwiLmhhbU1pZFwiKTtcblx0bGV0IGhhbTMgPSAkKFwiLmhhbUJvdFwiKTtcblx0XG5cdHRsLnNldCgkKFwiYm9keVwiKSwge292ZXJmbG93OlwiaGlkZGVuXCJ9KTtcblx0dGwudG8oZnVsbE1lbnUsIHt0b3A6XCIwJVwiLCBjbGlwUGF0aDpcInBvbHlnb24oMTAwJSAwLCAxMDAlIDEwMCUsIDUwJSAxMDAlLCAwIDEwMCUsIDAgMClcIiwgZWFzZTogXCJiYWNrLmluKDAuMilcIn0sIFwibWVudU9wZW5cIik7XG5cdHRsLnRvKGxpbmtzLCB7b3BhY2l0eToxLCB5OlwiMCVcIiwgc3RhZ2dlcjoge2Ftb3VudDouMTV9fSwgXCJtZW51T3Blbis9MC4xNVwiKTtcblx0dGwudG8oaGFtMSwge2JhY2tncm91bmRDb2xvcjonI0JCRkZEMScsIHJvdGF0aW9uOi0zMTUseDowICx5OjYsfSwgXCJtZW51T3BlblwiKTtcblx0dGwudG8oaGFtMiwge2JhY2tncm91bmRDb2xvcjonI0JCRkZEMScsIHdpZHRoOjB9LCBcIm1lbnVPcGVuXCIpO1xuXHR0bC50byhoYW0zLCB7YmFja2dyb3VuZENvbG9yOicjQkJGRkQxJywgcm90YXRpb246MzE1LCB4OjAsIHk6LTYsfSwgXCJtZW51T3BlblwiKTtcblxuXHRcblxuXHQkKFwiLm1lbnVUb2dnbGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcyhcIm5hdk9wZW5cIikpIHtcblx0XHRcdHRsLnJldmVyc2UoKTtcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXZPcGVuXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0bC5wbGF5KCk7XG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKFwibmF2T3BlblwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiB0bDtcbn1cbm1lbnVPcGVuKCk7XG4iLCJsZXQgYnVpbGRTZXJ2aWNlc05hdiA9ICgpID0+IHtcbiAgdmFyIGhlcm8gPSAkKCcucGFnZS1zZXJ2aWNlcyAuaGVyby1zZWN0aW9uJyk7XG4gIHZhciBzdWJOYXYgPSAnPGRpdiBjbGFzcz1cInNlcnZpY2VzLXN1Ym5hdlwiPjxkaXYgY2xhc3M9XCJjb250ZW50XCI+PC9kaXY+PC9kaXY+J1xuICAkKGhlcm8pLmFmdGVyKHN1Yk5hdik7XG59XG5cblxubGV0IGJ1aWxkU2VydmljZXNMaW5rcyA9ICgpID0+IHtcblxuICAkKCcuc2luZ2xlLWZ1bGwtc2VydmljZScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgbGV0IHRoaXNJRCA9ICQodGhpcykuZmluZCgnLmZ1bGwtc2VydmljZS1pbWFnZS1oYWxmJykuYXR0cignaWQnKTtcbiAgICBsZXQgY2xlYW5JRCA9IHRoaXNJRC5yZXBsYWNlKC9bXmEtekEtWiBdL2csIFwiXCIpXG4gICAgbGV0IHRoaXNOYW1lID0gJCh0aGlzKS5maW5kKCdoMicpLmh0bWwoKTtcbiAgICBsZXQgdGhpc0xpbmsgPSBcIjxhIGhyZWY9JyNcIitjbGVhbklEK1wiJz5cIit0aGlzTmFtZStcIjwvYT5cIjtcbiAgICAkKCcuc2VydmljZXMtc3VibmF2IC5jb250ZW50JykuYXBwZW5kKHRoaXNMaW5rKTtcbiAgfSlcbn1cblxubGV0IHBpblNlcnZpY2VzTGlua3MgPSAoKSA9PiB7XG5cbiAgbGV0IGhlYWRlckhlaWdodCA9ICQoJy5oZWFkZXInKS5vdXRlckhlaWdodCgpOyBcbiAgbGV0IHN1Yk5hdkhlaWdodCA9ICQoJy5zZXJ2aWNlcy1zdWJuYXYnKS5vdXRlckhlaWdodCgpO1xuICBsZXQgc3BhY2VySGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgc3ViTmF2SGVpZ2h0O1xuICBsZXQgc3QgPSBTY3JvbGxUcmlnZ2VyLmNyZWF0ZSh7XG4gICAgdHJpZ2dlcjogXCIuc2VydmljZXMtZnVsbC1zZWN0aW9uXCIsXG4gICAgcGluOiBcIi5zZXJ2aWNlcy1zdWJuYXZcIixcbiAgICBzdGFydDogXCItPVwiK3NwYWNlckhlaWdodCtcIlwiLFxuICAgIHBpblNwYWNpbmc6IGZhbHNlLFxuICAgIGVuZDogXCIrPTk5OTk5OTk5OTlcIiBcbiAgfSk7XG59XG5cbmlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2Utc2VydmljZXMnKSkge1xuICAvLyBhbGVydChcImhlcmVcIik7XG4gIGJ1aWxkU2VydmljZXNOYXYoKTtcbiAgYnVpbGRTZXJ2aWNlc0xpbmtzKCk7XG4gIHBpblNlcnZpY2VzTGlua3MoKTtcbn0iLCJsZXQgcHJlTG9hZGVyT24gPSAoKSA9PiB7XG5cdC8vIGNvbnNvbGUubG9nKCdub3QtcHJlbG9hZGVyJyk7XG5cdCQoJyNwcmVsb2FkZXInKS5mYWRlT3V0KCdzbG93JyxmdW5jdGlvbigpeyQodGhpcykucmVtb3ZlKCk7fSk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoZSkgPT4ge1xuXHRwcmVMb2FkZXJPbigpO1xufVxuIiwiLy8gSW1wb3J0IFRoZSBNZW51IENsb3NlIEZ1bmN0aW9uIHRvIHVzZSBvbiBtb2JpbGVcbi8vIGltcG9ydCB7IG1lbnVDbG9zZSB9IGZyb20gJy4vbW9iaWxlTWVudS5qcyc7XG5cbmxldCBzbW9vdGhTY3JvbGxpbmcgPSAodGhlTGluaykgPT4ge1xuXG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gIGxldCB0YXJnZXQgPSAkKHRoZUxpbmspLmF0dHIoXCJocmVmXCIpO1xuICBsZXQgaGVhZGVySGVpZ2h0ID0gJCgnLmhlYWRlcicpLm91dGVySGVpZ2h0KCk7IFxuICBsZXQgc3ViTmF2SGVpZ2h0ID0gJCgnLnN0cmFpbi1zdWJuYXYnKS5vdXRlckhlaWdodCgpO1xuICBsZXQgc3BhY2VySGVpZ2h0ID0gaGVhZGVySGVpZ2h0ICsgc3ViTmF2SGVpZ2h0O1xuICBcbiAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS1zdHJhaW5zJykpIHtcbiAgICBnc2FwLnRvKHdpbmRvdywge2R1cmF0aW9uOjAuNSwgZWFzZTogXCJjaXJjLm91dFwiLCBzY3JvbGxUbzp7eTp0YXJnZXQsIG9mZnNldFk6c3BhY2VySGVpZ2h0fX0pO1xuICB9IGVsc2Uge1xuICAgIGdzYXAudG8od2luZG93LCB7ZHVyYXRpb246MC41LCBlYXNlOiBcImNpcmMub3V0XCIsIHNjcm9sbFRvOnt5OnRhcmdldCwgb2Zmc2V0WTpoZWFkZXJIZWlnaHR9fSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5qUXVlcnkoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oJCkge1xuICAkKCdhW2hyZWZePVwiI1wiXScpLmJpbmQoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIFxuICAgIHNtb290aFNjcm9sbGluZygkKHRoaXMpKTtcbiAgICAvLyBJRiBJVFwiUyBNT0JJTEUgLyBJUEFEIE9SIFNNQUxMRVJcbiAgICBpZiAoc2NyZWVuLndpZHRoIDw9IDEwMjUpe1xuICAgICAgbWVudUNsb3NlKCk7XG4gICAgICBzbW9vdGhTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgfVxuICB9KTtcbn0pOyIsImltcG9ydCB7IHJldmVhbEhlYWRsaW5lIH0gZnJvbSAnLi9oZWFkbGluZUFuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyByZXZlYWxGbGFnIH0gZnJvbSAnLi9mbGFnQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IGhlcm9GbGFnIH0gZnJvbSAnLi9mbGFnQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IHN1YkZsYWcgfSBmcm9tICcuL2ZsYWdBbmltYXRpb24uanMnO1xuaW1wb3J0IHsgaGVyb0ltYWdlIH0gZnJvbSAnLi9oZXJvQW5pbWF0aW9uLmpzJztcbmltcG9ydCB7IGhlcm9IZWFkbGluZSB9IGZyb20gJy4vaGVyb0FuaW1hdGlvbi5qcyc7XG5pbXBvcnQgeyByZXZlYWxJbnZvbHZlZCB9IGZyb20gJy4vaGVhZGxpbmVBbmltYXRpb24uanMnO1xuaW1wb3J0IHsgcmV2ZWFsUGFydG5lciB9IGZyb20gJy4vaGVhZGxpbmVBbmltYXRpb24uanMnO1xuXG4vLyBpbXBvcnQgeyBzdWJIb3ZlciB9IGZyb20gJy4vc3ViTmF2cy5qcyc7XG4vLyBpbXBvcnQgeyBtb2JpbGVTdWJzIH0gZnJvbSAnLi9tb2JpbGVTdWJOYXZzLmpzJztcbi8vIGltcG9ydCB7IHRocmVlQ29sUmV2ZWFsIH0gZnJvbSAnLi90aHJlZUNvbFJldmVhbC5qcyc7XG4vLyBpbXBvcnQgeyBtZWRpYVBvc3RSZXZlYWwgfSBmcm9tICcuL21lZGlhUmV2ZWFsLmpzJztcbi8vIGltcG9ydCB7IGJsb2dSZXZlYWwgfSBmcm9tICcuL2Jsb2dSZXZlYWwuanMnO1xuLy8gaW1wb3J0IHsgbWVudVRvZ2dsZSB9IGZyb20gJy4vbWVudVRvZ2dsZS5qcyc7XG4vLyBpbXBvcnQgeyB0ZWFtVG9nZ2xlIH0gZnJvbSAnLi90ZWFtVG9nZ2xlLmpzJztcbi8vIGltcG9ydCB7IGhlcm9Mb2NrIH0gZnJvbSAnLi9oZXJvTG9jay5qcyc7XG4vLyBpbXBvcnQgeyBmaWx0ZXJJc290b3BlIH0gZnJvbSAnLi9maWx0ZXJJc290b3BlJztcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAvLyBtZW51VG9nZ2xlKCk7XG4gIC8vIHRlYW1Ub2dnbGUoKTtcbiAgcmV2ZWFsSGVhZGxpbmUoKTtcbiAgcmV2ZWFsRmxhZygpO1xuICBoZXJvRmxhZygpO1xuICBzdWJGbGFnKCk7XG4gIGhlcm9JbWFnZSgpO1xuICBoZXJvSGVhZGxpbmUoKTtcbiAgcmV2ZWFsSW52b2x2ZWQoKTtcbiAgcmV2ZWFsUGFydG5lcigpO1xuICAvLyBmaWx0ZXJJc290b3BlKCk7XG4gIC8vIHJldmVhbEhlYWRsaW5lKCk7XG4gIFxuICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gMTAyNCkge1xuICAgIC8vIG1vYmlsZVN1YnMoKTtcbiAgfVxuICBlbHNlIHtcbiAgICAvLyBzdWJIb3ZlcigpO1xuICB9ICBcbiAgLy8gdGhyZWVDb2xSZXZlYWwoKTtcbiAgLy8gbWVkaWFQb3N0UmV2ZWFsKCk7XG4gIC8vIGJsb2dSZXZlYWwoKTtcbiAgLy8gaGVyb0xvY2soKTtcbn0pXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXG4vLyAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjQpIHtcbi8vICAgICBtb2JpbGVTdWJzKCk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgc3ViSG92ZXIoKTtcbi8vICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9