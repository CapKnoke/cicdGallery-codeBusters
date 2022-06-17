import githubImg from '../../img/gitHub-logo.png';

const footer = document.createElement('section');
footer.className = 'footer';

const gitHubLink = document.createElement('a');
gitHubLink.className = 'footer__link';
gitHubLink.href = 'https://github.com/CapKnoke/cicdGallery-codeBusters';

const gitHubLogo = document.createElement('img');
gitHubLogo.className = 'footer__link--image';
gitHubLogo.src = githubImg;

gitHubLink.append(gitHubLogo);
footer.append(gitHubLink);

export default footer;
