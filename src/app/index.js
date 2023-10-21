import { showList } from './api/call-api-list';

import './styles/styles.scss';
import 'bootstrap';

function addListeners() {
  document.getElementById('fetch-pokemon').addEventListener('click', showList);

}
window.onload = function () {
  addListeners();

};
