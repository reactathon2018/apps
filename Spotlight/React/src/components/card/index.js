import React, { Component } from "react";
import PropTypes from "prop-types";
import "./card.css";

class CardView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="cell">
            <div className="card">
              <div className="card-header">
                <h5>
                  {this.props.jobTitle} - {this.props.jobCode}
                </h5>
              </div>
              <div className="card-content container">
                <div className="grid">
                  <div className="row">
                    <div className="cell-2">
                      <label>Desciption</label>
                    </div>
                    <div className="cell-9">: {this.props.desc}</div>
                  </div>
                  <div className="row border-bottom bd-grayWhite">
                    <div className="cell-2">
                      <label>Skills Required</label>
                    </div>
                    <div className="cell-9 ">: {this.props.keySkills}</div>
                  </div>
                  <div className="row ">
                    <div className="cell">
                      <label>Flow</label>
                      <div
                        data-role="stepper"
                        data-steps="5"
                        class="w-100"
                        data-step="4"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button class="button secondary">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CardView.propTypes = {
  jobTitle: PropTypes.string,
  jobCode: PropTypes.string,
  keySkills: PropTypes.any,
  detail: PropTypes.func.isRequired
};

export default CardView;
