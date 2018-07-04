import gql from 'graphql-tag';

export default gql`
  query HackthonList {
    List {
        HackthonName,
        Description,
        date
    }
  }
`;
