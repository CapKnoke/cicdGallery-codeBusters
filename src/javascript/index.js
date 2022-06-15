import '../styles/main.scss';

// Create heading node
const heading = document.createElement('h1');
heading.textContent = 'CodeBusters';

const app = document.querySelector('#root');
app.append(heading);
