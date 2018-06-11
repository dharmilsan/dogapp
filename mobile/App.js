import React from 'react';
import RootStack from './routes';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost'
import { HttpLink } from 'apollo-boost'
import { InMemoryCache } from 'apollo-boost'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.client = new ApolloClient({
      link: new HttpLink({
        uri: 'https://nx9zvp49q7.lp.gql.zone/graphql', // Server URL (must be absolute)
        credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
      }),
      cache: new InMemoryCache().restore(props.initialState || {})
    });
  }

  render() {
    return (
      <ApolloProvider client={this.client}>
        <RootStack />
      </ApolloProvider>
    );
  }
}