import stateHandler from '../utilities/stateHandler';

const saveSearchToState = search => {
  const stateObj = stateHandler.getState();
  if (!stateObj.previousSearches) {
    stateObj.previousSearches = [];
  }
  if (stateObj.previousSearches.length >= 5) {
    stateObj.previousSearches.shift();
  }
  stateObj.previousSearches.push(search);
  stateHandler.setState(stateObj);
};

const getPreviousSearches = () => stateHandler.getState().previousSearches;

const searchForm = document.createElement('form');
searchForm.className = 'search-form';
searchForm.action = '';

const input = document.createElement('input');
input.id = 'search-field';
input.setAttribute('list', 'previous-searches');
input.name = 'search-field';
input.placeholder = 'Search...';

const dataList = document.createElement('datalist');
dataList.id = 'previous-searches';

const searchButton = document.createElement('input');
searchButton.type = 'submit';
searchButton.value = 'Search';

// setting functionality
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  const searchValue = document.querySelector('#search-field').value;
  saveSearchToState(searchValue);
});

const previousSearchElements = getPreviousSearches().map(search => {
  console.log('entered');
  const searchOption = document.createElement('option');
  searchOption.value = search;
  return searchOption;
});
previousSearchElements.forEach(element => {
  dataList.appendChild(element);
});

// Appending elements
searchForm.append(input, dataList, searchButton);

export default searchForm;
