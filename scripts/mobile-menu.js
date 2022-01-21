const hamburger = document.querySelector('.hamburger');
const navMain = document.querySelector('.nav-main');


hamburger.addEventListener("click", () => {
	// navMain.classList.toggle('open');
  openNav();
}); 



/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}