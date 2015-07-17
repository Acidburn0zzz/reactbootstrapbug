var React = require('react');

var ReactBootstrap = require('react-bootstrap');
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var App = React.createClass({
  getInitialState: function() {
    return {on: true};
  },
  handleClick: function() {
    this.setState({on: false});
  },
  render: function() {
    if (!this.state.on) {
      return <div/>;
    }
    return (
      <DropdownButton>
        <MenuItem eventKey='1' onClick={this.handleClick}>Break things</MenuItem>
      </DropdownButton>
    );
  }
});

window.onload = function() {
    React.render(<App/>, document.getElementById('container'));
};


