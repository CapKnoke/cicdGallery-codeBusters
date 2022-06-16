import '../styles/main.scss';
import navBar from './components/navbar';
import searchForm from './components/searchBar';
import gallery from './components/gallery';
import unsplashApi from './utilities/unsplashApi';
import stateHandler from './utilities/stateHandler';

const render = rootElement => {
  rootElement.append(navBar);
  rootElement.append(searchForm);
  rootElement.append(gallery);

  window.addEventListener('statechange', async () => {
    gallery.innerHTML = '';
    const { state } = window.history;
    const searchResults = await unsplashApi.getSearchResults(state.searchTerm);
    unsplashApi.appendToGallery(searchResults, gallery);
  });

  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-field').value;
    stateHandler.saveSearchToState(searchValue);
  });
};

const app = document.querySelector('#root');

render(app);

window.onload = async () => {
  stateHandler.setStateFromStorage();
};

export default render;
