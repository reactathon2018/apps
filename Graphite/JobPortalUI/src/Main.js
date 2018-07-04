import React from 'react'
import { Switch, Route } from 'react-router-dom'
import JobSummary from './JobSummary'
import JobDetails from './JobDetails'
import JobApplication from './JobApplication'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={JobSummary}/>
      <Route path='/JobSummary' component={JobSummary}/>
      <Route path='/JobDetail' component={JobDetails}/>
      <Route path='/JobApplication' component={JobApplication}/>
    </Switch>
  </main>
)

export default Main
