import React, { Component } from 'react';
import UserDetail from './UserDetail';


class Test extends React.Component{
constructor(props){
  super(props);
  this.state={
    userData:[]
  }
console.log("constructor"+JSON.stringify(this.props.userDetails))
}

/*function Test(props){
  return(
<div>
{props.userDetails.map(c=><UserDetail id={c.id})}
</div>

  )
}*/


  render() {
    console.log("prop datawrer"+JSON.stringify(this.props.userDetails))

    return (
      <div>

{this.props.userDetails.map(c=><UserDetail 
      jobCode={123456}
      title={c.jobDetails.title}
      description={c.jobDetails.description}
      primarySkills={c.jobDetails.primarySkills}
      secondarySkills={c.jobDetails.secondarySkills}
      venue={c.jobDetails.scheduling.venue}
      date={c.jobDetails.scheduling.date}
      status={c.jobDetails.status}
      noOfPosting={c.jobDetails.noOfPosting}
  />)}

      </div>

    );
  }
}

export default Test;
