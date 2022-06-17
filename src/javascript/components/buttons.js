import nextIconImg from '../../img/chevron_right_black_24dp.svg';
import prevIconImg from '../../img/chevron_left_black_24dp.svg';

const buttonContainer = document.createElement('section');
buttonContainer.className = 'button-container';

const nextIcon = document.createElement('img');
nextIcon.className = 'button-container__button--image';
nextIcon.src = nextIconImg;

const prevIcon = document.createElement('img');
prevIcon.className = 'button-container__button--image';
prevIcon.src = prevIconImg;

const nextButton = document.createElement('button');
nextButton.className = 'button-container__button';
nextButton.id = 'next-button';
nextButton.append(nextIcon);

const prevButton = document.createElement('button');
prevButton.className = 'button-container__button';
prevButton.id = 'prev-button';
prevButton.append(prevIcon);

buttonContainer.append(prevButton, nextButton);

export default buttonContainer;
