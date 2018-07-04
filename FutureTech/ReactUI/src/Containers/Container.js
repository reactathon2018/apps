import { connect } from "react-redux";
import AskFAQ from "../Layout/AskFAQ";

function mapStateToProps(state, ownProps) {
  return { counter: state.counter.value };
}

// Maps `dispatch` to `props`:
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMessageClick(message) {
      decrementCount: step => {
        dispatch({ type: "DECREMENT" });
      };
    }
  };
}

const Container =  connect(
  mapStateToProps,
  mapDispatchToProps
)(AskFAQ);

export default Container;
