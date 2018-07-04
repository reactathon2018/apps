import React from "react";
import {  Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class TopParticipantsTable extends React.Component {
  render() {
    return (
      <Table className="widget">
        <thead>
          <tr>
            <th colSpan="4">TOP PARTICIPANTS</th>
          </tr>
          <tr>
            <th style={{ color: "yellow"}}>-</th>
            <th>Name</th>
            <th>Score</th>
            <th>Badge</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"> <FontAwesomeIcon style={{ color: "green"}} icon="arrow-up" /> </th>
            <td>Balaji</td>
            <td>1000</td>
            <td><FontAwesomeIcon style={{ color: "goldenrod"}} icon="medal" /></td>
          </tr>
          <tr>
            <th scope="row">-</th>
            <td>Inhiyha</td>
            <td>900</td>
            <td><FontAwesomeIcon style={{ color: "gray"}} icon="medal" /></td>
          </tr>
          <tr>
            <th scope="row"><FontAwesomeIcon style={{ color: "red"}} icon="arrow-down" /></th>
            <td>Mahesh</td>
            <td>899</td>
            <td><FontAwesomeIcon style={{ color: "brown"}} icon="medal" /></td>
          </tr>
          <tr>
            <th scope="row"><FontAwesomeIcon style={{ color: "red"}} icon="arrow-down" /></th>
            <td>Krish</td>
            <td>850</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row"><FontAwesomeIcon style={{ color: "red"}} icon="arrow-down" /></th>
            <td>Keerthana</td>
            <td>80</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
