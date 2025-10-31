import { getGreeting } from './greeting.js';
import './style.css'; // Webpack sẽ thấy import này và dùng loader

function component() {
  const element = document.getElementById('root');
  element.textContent = getGreeting('Người dùng');
  return element;
}

document.body.appendChild(component());