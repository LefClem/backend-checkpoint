import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import database from "./db";
import { CountryResolver } from "../resolvers/country.resolver";

async function createServer():Promise <ApolloServer> {
    await database.initialize();
    
    const schema = await buildSchema({
        resolvers: [CountryResolver]
    });

    return new ApolloServer({
        schema
    });
}

export default createServer;