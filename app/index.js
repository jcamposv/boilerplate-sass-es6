import _ from 'lodash';
import './scss/index.scss';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack 3'], ' ');

  return element;
}

document.body.appendChild(component());
