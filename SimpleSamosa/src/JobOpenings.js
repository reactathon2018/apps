import React, { Component } from "react";
 
class JobOpenings extends Component {
  render() {
    return (
      <div>
        <h2>JobOpenings</h2>
        <p>QA Manager with 12 Years of Exp.</p>
        <font size="4" face="Courier New" >
          <table border="1" align="center" >   
            
              <tr bgcolor="	#DDA0DD">
                <th>JobDetails</th>
                <th>Description</th>
                <th>Location</th>
                <th>Open Date</th>
              </tr>
              <tr bgcolor="#FFE4B5">
                <td>QA LEAD</td>
                <td>Lead 20 member team of ITO Automation</td>
                <td>Hyderabad</td>
                <td>June 10 2018</td>
                </tr>
                <tr bgcolor="#FFE4B5">
                <td>QA Manager</td>
                <td>Manage 40 member team of ITO Automation</td>
                <td>Chennai</td>
                <td>June 12 2018</td>
                </tr>
                <tr bgcolor="#FFE4B5">
                <td>Analyst</td>
                <td>software testing</td>
                <td>Chennai</td>
                <td>June 12 2018</td>
                </tr>
                <tr bgcolor="#FFE4B5">
                <td>Senior Manager</td>
                <td>Should be able to manage 100 people team</td>
                <td>Chennai</td>
                <td>June 12 2018</td>
                </tr>
            </table>
            </font>
      </div>
    );
  }
}
 
export default JobOpenings;