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

searchForm.append(input, dataList, searchButton);

export default searchForm;
