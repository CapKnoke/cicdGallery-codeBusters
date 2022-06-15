import codeBustersLogo from '../../img/gb-emblem.png';

const navBar = document.createElement('nav');
navBar.className = 'navbar';

const logoContainer = document.createElement('div');
logoContainer.className = 'logo-container';
const logoImg = document.createElement('img');
logoImg.className = 'logo-container__logo';
logoImg.src = codeBustersLogo;
logoContainer.appendChild(logoImg);

navBar.appendChild(logoContainer);

export default navBar;
