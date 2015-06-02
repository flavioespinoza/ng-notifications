/**
 * Created by Flavor on 6/1/15.
 */

var HelloComponent = React.createClass({displayName: "HelloComponent",
  propTypes: {
    fname : React.PropTypes.string.isRequired,
    lname : React.PropTypes.string.isRequired
  },
  render: function() {
    return React.createElement("span", null, "Hello ", this.props.fname, " ", this.props.lname);
  }
});