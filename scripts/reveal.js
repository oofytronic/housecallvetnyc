const revealButtons = document.querySelectorAll('.card-testimonial_button');

revealButtons.forEach(button => {
	button.addEventListener('click', (e) => {
		const story = button.previousElementSibling;
		story.classList.toggle('max-height');
		if (story.classList.contains('max-height')) {
			button.innerText = 'Read Less'
		} else {
			button.innerText = 'Read More'
		}
	});
});