import React, { Component, PropTypes } from 'react'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import update from 'react-addons-update'
import { Grid, Col, Row } from 'react-bootstrap'

import JOBS_QUERY from '../graphql/JobsQuery.graphql'

class Jobs extends Component {

  constructor(args) {
    super(args)
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { loading, jobs } = this.props

    if (loading) {
      return (
        <Row>
          Loading...
        </Row>
      )
    }

    return (
      
      <Row>
        <h2> Jobs you have applied for: </h2>
        <ul>
          {jobs.map(u => {
            return (
              <li key={u._id}>
                {u.title +'-'+u.desc}
              </li>
            )
          })}
        </ul>
      </Row>
    )
  }
}

Jobs.propTypes = {
  loading: PropTypes.bool.isRequired,
  jobs: PropTypes.array,
  canid:'test'
}

export default compose(
  graphql(JOBS_QUERY, {
    props({ data: { loading, jobs,canid } }) {
      return { loading, jobs }
    }
  })
)(Jobs)
