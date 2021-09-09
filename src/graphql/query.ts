import { gql } from '@apollo/client';

export const GET_MOST_FEATURE = gql`
  query {
    getMostFeature {
      character
      type
      userCount
    }
  }
`;
export const GET_LEAST_FEATURE = gql`
  query {
    getLeastFeature {
      character
      type
      userCount
    }
  }
`;
export const GET_TOTAL_USER = gql`
  query {
    getTotalUser
  }
`;

export const UPDATE_RESULT = gql`
  mutation updateResult($character: String!) {
    updateResult(character: $character)
  }
`;
