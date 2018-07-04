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
      jobCode={c.jobCode}
      title={c.title}
      description={c.description}
      primarySkills={c.primarySkills}
      secondarySkills={c.secondarySkills}
      venue={c.venue}
      date={c.date}
      status={c.status}
      noOfPosting={c.noOfPosting}
  />)}

      </div>

    );
  }
}

export default Test;
