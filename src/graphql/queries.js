import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query {
    countries {
      code
      continent {
        name
      }
      name
      emoji
    }
  }
`;

export const GET_COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      code
      name
      currencies
      capital
      continent {
        name
      }
      states {
        name
      }
      languages {
        name
      }
    }
  }
`;
