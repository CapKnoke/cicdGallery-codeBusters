const buttonContainer = document.createElement('section');
buttonContainer.className = 'button-container';

const nextButton = document.createElement('button');
nextButton.className = 'button-container__button';
nextButton.innerText = 'Next';
nextButton.id = 'next-button';

const prevButton = document.createElement('button');
prevButton.className = 'button-container__button';
prevButton.innerText = 'Previous';
prevButton.id = 'prev-button';

buttonContainer.append(prevButton, nextButton);

export default buttonContainer;
