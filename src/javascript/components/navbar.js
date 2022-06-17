import codeBustersLogo from '../../img/gb-emblem.png';

const navBar = document.createElement('nav');
navBar.className = 'navbar';

const logoContainer = document.createElement('div');
logoContainer.className = 'logo-container';

const logoImg = document.createElement('img');
logoImg.className = 'logo-container__logo';
logoImg.src = codeBustersLogo;

const heading = document.createElement('h1');
heading.className = 'logo-container__heading';
heading.innerText = '<codeBusters/>';

logoContainer.append(heading, logoImg);
navBar.appendChild(logoContainer);

export default navBar;
