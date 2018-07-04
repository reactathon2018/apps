import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementCounter } from "../actions/actions";

class AskFAQ extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    incrementCounter();
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.increment}>Click for redux</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.value
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incrementCounter: bindActionCreators(incrementCounter, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskFAQ);
