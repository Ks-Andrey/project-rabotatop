import select from './modules/select';
import menu from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {
	select();
	menu('.open-menu', 'active');
})