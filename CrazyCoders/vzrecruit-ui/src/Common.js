import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const AllJobsresponse = () => (
    <Query query={gql`
    {
      Jobs{
            id
            title
            role
            positons
            description
            status
          }
     }
    `}>
    {({loading,error,data})=>{
        if(loading)return <p>Loading...</p>;
        if(error) return <p> error {error.status} </p>;

        return data.Jobs.map(({id,title,role,positions,description,status}) =>(
            <div key ={id}>
            <p> Description : {description} </p>
            </div>
        ));
    }}
    </Query>
);

export default AllJobsresponse;