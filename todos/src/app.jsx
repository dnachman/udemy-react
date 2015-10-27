var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://torrid-torch-1602.firebaseio.com/';

var App = React.createClass({
  mixins: [ReactFire],
  componentWillMount: function() {
    // bind this object view ReactFire to this.state
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {

    console.log(this.state);

    return <h1>
      Hello!
    </h1>
  }
});

var element = React.createElement(App, {});
React.render(element, document.querySelector('.container'));
