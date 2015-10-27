var React = require('react');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a dessert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Carrot Cake'
  ]
};

// react, please render this class
var element = React.createElement(Dropdown, options);

// react, after you render this, please place it in my body tag
React.render(element, document.querySelector('.target'));
