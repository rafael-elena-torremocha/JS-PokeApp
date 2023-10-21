import { showList, toggleList } from './api/call-api-list';

import './styles/styles.scss';
import 'bootstrap';

function addListeners() {
  document.getElementById('toggle-list').addEventListener('click', toggleList);
}
window.onload = function () {
  addListeners();

};
