var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: 'See Tutorials',
    number: 32,
    header: 'Learn React',
    description: 'React is a great new javascript library that does lots of stuff',
    imageUrl: 'http://formatjs.io/img/react.svg'
  },
  {
    title: 'Show courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp will speed up development workflow',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
  }]
};

// react, please render this class
var element = React.createElement(ThumbnailList, options);

// react, after you render this, please place it in my body tag
React.render(element, document.querySelector('.target'));
