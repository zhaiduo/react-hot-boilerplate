'use strict';

var React = require('react'),
    Child = require('./child');

var App = React.createClass({
  render() {
    return (
      <Child />
    );
  }
});

module.exports = App;