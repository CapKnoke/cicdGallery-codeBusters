import searchIcon from '../../img/search_black_24dp.svg';

const searchForm = document.createElement('form');
searchForm.className = 'search-form';
searchForm.action = '';

const input = document.createElement('input');
input.id = 'search-field';
input.setAttribute('list', 'previous-searches');
input.name = 'search-field';
input.placeholder = 'Search...';
input.className = 'search-form__input-field';

const dataList = document.createElement('datalist');
dataList.id = 'previous-searches';

const searchButton = document.createElement('input');
searchButton.classList.add('search-form__button', 'hide');
searchButton.id = 'form-submit';
searchButton.type = 'submit';
searchButton.value = 'Search';

const searchIconImg = document.createElement('img');
searchIconImg.className = 'search-form__label--image';
searchIconImg.src = searchIcon;

const searchLabel = document.createElement('label');
searchLabel.className = 'search-form__label';
searchLabel.setAttribute('for', 'form-submit');
searchLabel.appendChild(searchIconImg);

searchForm.append(input, dataList, searchLabel, searchButton);

export default searchForm;
