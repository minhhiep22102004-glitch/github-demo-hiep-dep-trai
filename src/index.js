import { getGreeting } from './greeting.js';
import './style.css'; // Import CSS để Webpack xử lý

function component() {
  const element = document.getElementById('root');
  element.textContent = getGreeting('Người dùng');
  return element;
}

document.body.appendChild(component());