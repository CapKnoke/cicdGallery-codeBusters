import '../styles/main.scss';
import navBar from './components/navbar';
import searchForm from './components/searchBar';
import gallery from './components/gallery';

const app = document.querySelector('#root');
app.append(navBar);
app.append(searchForm);
app.append(gallery);
