const nav = document.querySelector(".nav");
const sectionHome = document.querySelector(".nav-simple");

var sectionHomeOptions = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.5
};

var sectionHomeObserver = new IntersectionObserver(function(entries, sectionHomeObserver){
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			nav.classList.remove("nav-scrolled");
			nav.classList.add("unmoved");
		} else {
			nav.classList.remove("unmoved");
			nav.classList.add("nav-scrolled");
		}
	});
}, sectionHomeOptions);


sectionHomeObserver.observe(sectionHome);