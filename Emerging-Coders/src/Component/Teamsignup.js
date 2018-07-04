import React,{Component} from "react"
import PortfolioCheckbox from "./PortfolioCheckbox";
function Teamsignup(props) {
    return(
<form align="Center">
<label>
      Registration
    <br/>
    <br/>
  </label>
  <label>
    What's your Team name
    <br/>
    <input type="text" name="Teamname" />
  </label>
  <br/>
  <label>
    What's your Team Size
    <br/>
    <div>
    <label>
        <input type="radio" value="1" checked={true} />
        1
      </label>
      <label>
        <input type="radio" value="2" />
        2
      </label>
      <label>
        <input type="radio" value="3" />
        3
      </label>
     <label>
        <input type="radio" value="4" />
        4
      </label>
       <label>
      <input type="radio" value="5" />
      5
    </label>
    <label>  Participant's</label>
  </div>
  </label>
  <br/>
  <label>
   Team member name
   <br/>
    <input type="text" name="Teammembersname" />
  </label>
  <br/>
  <label>
  Portfolio of your team memebers
  <br/>
   <PortfolioCheckbox/>
   </label>
  <br/>
  <label>
  Location
  <br/>
    <input type="text" name="Location" />
  </label>
  <br/>
  <label>
  Email
  <br/> 
    <input type="text" name="Email" />
  </label>
  <br/>
  <label>
  Mobile 
  <br/>
    <input type="text" name="Mobile" />
  </label>
  <br/>
    <input type="submit" value="Submit" />
</form>

    );
    
}
export default Teamsignup;




