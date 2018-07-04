import React from 'react';

export class LoginForm extends React.Component {
  
render(){
    return (
        <div>
            <h1>Login Form</h1>
             <form name="myForm" action="/login" onSubmit={this.validateForm} method="get">
              User Id  :<input type="text" name="fname" required/><br/>
              Password : <input type="password" name="password" required/>
                   <input type="submit" value="Submit"/>
             </form>
          </div>
    );
};
validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x == "kishore" && y=="kishore" ) {
        
		document.forms["myForm"].action="/login";
      }else {
		  document.forms["myForm"].action="";
		  alert("Please enter valid user Credientials");
	  }
    }
};


export default LoginForm;

