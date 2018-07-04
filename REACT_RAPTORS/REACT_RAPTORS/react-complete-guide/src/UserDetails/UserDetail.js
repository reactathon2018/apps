import React, { Component } from 'react';


/*function UserDetail(props){
  return(
<div>
<span>{props.id}</span>
</div>

  )
}
*/
class UserDetail extends React.Component{
  render(){
    return(
  <div>
  <table border="0" width="1500px;" className="tableClass">
  <thead bgcolor='#A9A9A9'>
    <tr>
    <th ><strong color="red"><u>JOB CODE:
    {this.props.jobCode}
    </u>
    </strong></th>
    <th><strong><u>JOB TITLE:</u> {this.props.title}
    </strong></th>
    </tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong><u>JOB DESCRIPTION:</u></strong><br></br>
{this.props.description}</td>
</tr>
<tr>
<td colspan="1">
<strong><u>Primary Skills:</u></strong>{this.props.primarySkills}
//Java,J2EE
<br></br>
<strong><u>Secondary Skills:</u></strong>{this.props.secondarySkills}
//Angular JS
</td>
<td>
<strong><u>Scheduled On:</u></strong>{this.props.venue}
//09/08/2018
<br></br>
<strong><u>Scheduled at:</u></strong>{this.props.date}
//Chennai
</td>
</tr>
<tr>
<td>
<strong>STATUS OF THE INTERVIEW : </strong>{this.props.status}
</td>
</tr>
</tbody>
</table>
<br></br>
<br></br>
<br></br>
</div>
    )
  }
}

export default UserDetail;
