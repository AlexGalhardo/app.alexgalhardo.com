import { ApolloServer } from 'apollo-server';

import app from './app';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const GraphqlServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: { hello: 123 },
});

GraphqlServer.listen().then(({ url }) =>
    console.log(`GraphqlServer running on => ${url}`)
);

app.listen(process.env.PORT || 3000, (error: string) => {
    if (error) throw new Error(error);
    console.log(
        `GalhardoAPP running on =>  http://localhost:${process.env.PORT}`
    );
});
