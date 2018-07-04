import React from "react";
import createClass from "create-react-class";
import PropTypes from "prop-types";
import Select from "react-select";
import "react-select/dist/react-select.css";

const FLAVOURS = [
  { label: "Angular ", value: "Angular" },
  { label: "Java", value: "Java" },
  { label: "Reactjs", value: "Reactjs" },
  { label: "Nodejs", value: "Nodejs" },
  { label: "Android", value: "Android" },
  { label: "IOS", value: "IOS" }
];

const WHY_WOULD_YOU = [
  { label: "Chocolate (are you crazy?)", value: "chocolate", disabled: true }
].concat(FLAVOURS.slice(1));

var MultiSelectField = createClass({
  displayName: "MultiSelectField",
  propTypes: {
    label: PropTypes.string
  },
  getInitialState() {
    return {
      removeSelected: true,
      disabled: false,
      crazy: false,
      stayOpen: false,
      value: [],
      rtl: false
    };
  },
  handleSelectChange(value) {
    console.log("You've selected:", value);
    this.setState({ value });
  },
  toggleCheckbox(e) {
    this.setState({
      [e.target.name]: e.target.checked
    });
  },
  toggleRtl(e) {
    let rtl = e.target.checked;
    this.setState({ rtl });
  },

  render() {
    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    return (
      <div className="section">
        <Select
          closeOnSelect={!stayOpen}
          disabled={disabled}
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
          rtl={this.state.rtl}
          simpleValue
          value={value}
        />
      </div>
    );
  }
});
export default MultiSelectField;
