import { ApolloServer } from 'apollo-server';

import app from './app';
import Winston from './config/winston';
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

    Winston.log(
        'info',
        `Galhardo APP Server started at => ${process.env.APP_URL}`
    );
});
