export default function menu(menuBtnSelector, classActive) {
	const menuBtn = document.querySelector(menuBtnSelector),
		  menuOpen = menuBtn.querySelector('ul');

	if (window.matchMedia("(max-width: 991px)").matches) {
		menuBtn.addEventListener('click', (e) => {
			e.preventDefault();
			menuOpen.classList.toggle(classActive);
		});
	} else {
		menuBtn.addEventListener('mouseover', () => {
			menuOpen.classList.add(classActive);
		});
		menuBtn.addEventListener('mouseout', () => {
			menuOpen.classList.remove(classActive);
		})
	}
}