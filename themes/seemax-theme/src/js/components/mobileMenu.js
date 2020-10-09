const menuOpen = () => {
	let tl = new gsap.timeline({
		paused:true,
		defaults: { // children inherit these defaults
			duration:0.3,
			ease: "back.out(1)",
		},
	});
	let fullMenu = $(".main-nav");
	let links = $("nav a");
	let ham1 = $(".hamTop");
	let ham2 = $(".hamMid");
	let ham3 = $(".hamBot");
	
	tl.set($("body"), {overflow:"hidden"});
	tl.to(fullMenu, {top:"0%", clipPath:"polygon(100% 0, 100% 100%, 50% 100%, 0 100%, 0 0)", ease: "back.in(0.2)"}, "menuOpen");
	tl.to(links, {opacity:1, y:"0%", stagger: {amount:.15}}, "menuOpen+=0.15");
	tl.to(ham1, {backgroundColor:'#BBFFD1', rotation:-315,x:0 ,y:6,}, "menuOpen");
	tl.to(ham2, {backgroundColor:'#BBFFD1', width:0}, "menuOpen");
	tl.to(ham3, {backgroundColor:'#BBFFD1', rotation:315, x:0, y:-6,}, "menuOpen");

	

	$(".menuToggle").on('click', function() {

		if ($(this).hasClass("navOpen")) {
			tl.reverse();
			$(this).removeClass("navOpen");
		} else {
			tl.play();
			$(this).addClass("navOpen");
		}
	});

	return tl;
}
menuOpen();
