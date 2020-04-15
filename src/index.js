import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './style.scss';

const App = () => <div className="test">All the REACT are belong to us!</div>;

ReactDOM.render(<App />, document.getElementById('main'));

console.log('starting up!');

// const $ = require('jquery');
$('#main').html('Here we go!');

let num = 0;

setInterval(() => {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds`);
}, 1000);
