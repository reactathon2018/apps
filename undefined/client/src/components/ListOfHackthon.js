import React, { Component } from 'react';
export class ListOfHackthon extends Component {
    constructor() {
        super()
    }

    render() {

        if (this.props.listofhackthons && this.props.listofhackthons.loading) {
            return <div>Loading</div>
          }

          if (this.props.listofhackthons && this.props.listofhackthons.error) {
            return <div>Error</div>
          }
        return (
            <div>
            </div>
        )
    }
}