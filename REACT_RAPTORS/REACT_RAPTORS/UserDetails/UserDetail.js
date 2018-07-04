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
    //{this.props.id}
    </u>
    </strong></th>
    <th><strong><u>JOB TITLE:</u> Java Developer//{this.props.namjobTitle}
    </strong></th>
    </tr>
</thead>
<tbody>
<tr>
<td colspan="2">
<strong><u>JOB DESCRIPTION:</u></strong><br></br>
//{this.props.jobDescription}
Outline the core responsibilities of the position. Make sure your list of responsibilities is detailed but concise.
 Also emphasize the duties that may be unique to your organization. For example, if you are hiring fo
 role and the position requires social media expertise to promote events, include this detail to ensure candidates understand the requirements and can determine if they’re qualified.
</td>
</tr>
<tr>
<td colspan="1">
<strong><u>Primary Skills:</u></strong>//{this.props.pSkill}
Java,J2EE
<br></br>
<strong><u>Secondary Skills:</u></strong>//{this.props.sSkill}
Angular JS
</td>
<td>
<strong><u>Scheduled On:</u></strong>//{this.props.venue}
09/08/2018
<br></br>
<strong><u>Scheduled at:</u></strong>//{this.props.location}
Chennai
</td>
</tr>
<tr>
<td>
<strong>STATUS OF THE INTERVIEW : </strong>Selected//{this.props.status}
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
