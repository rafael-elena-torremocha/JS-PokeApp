import { fetchPokemon } from './api/call-api-details';

import './styles/styles.scss';
import 'bootstrap';

function addListeners() {
  // TODO
  console.log('addListeners');
}
window.onload = function () {
  addListeners();
  console.log(fetchPokemon);

};
