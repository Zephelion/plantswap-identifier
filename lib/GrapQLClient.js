import { GraphQLClient } from 'graphql-request';

const API_URI = process.env.NEXT_PUBLIC_HIGHRAPH_URI;
const API_URI_MUTATION = process.env.NEXT_PUBLIC_HIGHRAPH_URI_MUTATION;

export const hygraph = new GraphQLClient(API_URI);
export const hygraphMutation = new GraphQLClient(API_URI_MUTATION);