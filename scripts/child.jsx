'use strict';

var React = require('react');

alert('running child module');

var Child = React.createClass({
  render() {
    return <h1>Child</h1>;
  }
});

module.exports = Child;