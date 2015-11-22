var React = require('react');
var Firebase = require('firebase');
var rootUrl = 'https://todo-flux.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      text: this.props.item.text,
      done: this.props.item.done
    }
  },
  componentWillMount: function() {
    this.fb = new Firebase(rootUrl + 'items/' + this.props.item.key)
  },
  render: function() {
    return <div className="input-group list-item">
      <span className="input-group-addon">
        <input
          type="checkbox"
          checked={this.state.done}
          />
      </span>
      <input type="text"
        className="form-control"
        value={this.state.text}
        />
      <span className="input-group-btn">
        <button
          className="btn btn-danger"
          >
          Delete
        </button>
      </span>
    </div>
  }
});