import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import ViewJobs from './viewJobs';
import ApplyJobs from './applyJobs';

const required = value => (value ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue18 = minValue(18)
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const tooOld = value =>
  value && value > 65 ? 'You might be too old for this' : undefined

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <div><span>{error}</span></div>) ||
          (warning && <div><span>{warning}</span></div>))}
    </div>
  </div>
)

class UserProfilePage extends Component {
  render() {
    const {handleSubmit, load, submitting,simpleReducer} = this.props;
    console.log(this.props);
    if(simpleReducer.currentProfilePage === "ViewJobs"){
      return <ViewJobs {...this.props}/>;
    }
    if(simpleReducer.currentProfilePage === "ApplyJobs"){
      return <ApplyJobs {...this.props}/>;
    }
    const save=(data)=>{
      this.props.onSubmithandler({...data,username:simpleReducer.userName});
    }
    if((simpleReducer.userProfileData!== null && Object.keys(simpleReducer.userProfileData).length > 0) && simpleReducer.editForm === false ){

      return(<div class="container">
      <div  className="row center-cls ">
          <div class="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
              <div class="well details">
                  <div class="col-sm-12">
                      <div class="col-xs-12 col-sm-8">
                          <h2 style= {{textDecoration:'underline'}}>{simpleReducer.userProfileData.firstName} {simpleReducer.userProfileData.lastName}</h2>
                          <a onClick={this.props.editForm} style= {{textDecoration:'underline'}}>Edit details</a>
                          <p><strong>Email: </strong>{simpleReducer.userProfileData.email} </p>
                          <p><strong>Age: </strong>{simpleReducer.userProfileData.age} </p>
                          <p><strong>Sex: </strong>{simpleReducer.userProfileData.sex} </p>
                          <p class="text-center skills"><strong>Skills</strong></p>
                          {(simpleReducer.userProfileData.skillset!==null)?simpleReducer.userProfileData.skillset.map((skill,index)=><div class="skillLine"><div class="skill pull-left">{skill}</div></div>):""}

                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>);

}

    return (

      <form className="login-from" onSubmit={handleSubmit(save)}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name="firstName"
              component={renderField}
              type="text"
              placeholder="First Name"
              validate={required}
              value={simpleReducer.userProfileData && simpleReducer.userProfileData.firstName?simpleReducer.userProfileData.firstName:''}
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <Field
              name="lastName"
              component={renderField}
              type="text"
              placeholder="Last Name"
              validate={required}
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <Field
              name="email"
              component={renderField}
              type="email"
              placeholder="Email"
              validate={email}
            />
          </div>
        </div>
        <div>
        <Field
          name="age"
          type="number"
          component={renderField}
          label="Age"
          validate={[number, minValue18]}
          warn={tooOld}
        />
        </div>
        <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />
              {' '}
              Male
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" />
              {' '}
              Female
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
        <label>Enter Skills* (please enter comma separated values)</label>
        <div>
          <Field name="skillset" component="textarea" />
        </div>
        </div>
        <div>
          <label>Personal Info</label>
          <div>
            <Field name="personal" component="textarea" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>Submit</button>
        </div>
      </form>

    )
  }
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(UserProfilePage);
