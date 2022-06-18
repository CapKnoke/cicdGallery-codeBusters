import '../styles/main.scss';
import navBar from './components/navbar';
import searchForm from './components/searchBar';
import gallery from './components/gallery';
import unsplashApi from './utilities/unsplashApi';
import stateHandler from './utilities/stateHandler';
import buttonContainer from './components/buttons';
import footer from './components/footer';

const render = rootElement => {
  rootElement.append(navBar, searchForm, gallery, buttonContainer, footer);

  window.addEventListener('statechange', async () => {
    gallery.innerHTML = '';
    const { state } = window.history;
    const page = state.page || 1;
    const searchResults = await unsplashApi.getSearchResults(state.lastSearch, page);
    unsplashApi.appendToGallery(searchResults, gallery);
  });

  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchValue = document.querySelector('#search-field').value;
    stateHandler.saveSearchToState(searchValue);
  });

  document.getElementById('next-button').addEventListener('click', () => {
    const state = stateHandler.getState();
    const currentPage = state.page || 1;
    const newState = { ...state, page: currentPage + 1 };
    stateHandler.setState(newState);
  });

  document.getElementById('prev-button').addEventListener('click', () => {
    const state = stateHandler.getState();
    const currentPage = state.page || 1;
    if (currentPage > 1) {
      const newState = { ...state, page: currentPage - 1 };
      stateHandler.setState(newState);
    }
  });
};

// Rendering the page, duh
const root = document.querySelector('#root');
render(root);

window.onload = async () => {
  stateHandler.setStateFromStorage();
};

export default render;
