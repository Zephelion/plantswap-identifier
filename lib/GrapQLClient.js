import { GraphQLClient } from 'graphql-request';

const API_URI = process.env.NEXT_PUBLIC_HIGHRAPH_URI;

const hygraph = new GraphQLClient(API_URI);

export default hygraph;