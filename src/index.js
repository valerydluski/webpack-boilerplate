import example from './js/example';
import testSvg from './assets/images/test.svg';
import './styles/index.scss';

const logo = document.createElement('img');
logo.src = testSvg;
const heading = document.createElement('h1');
heading.textContent = example();
const app = document.querySelector('#root');
app.append(logo, heading);
