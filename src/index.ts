import "reflect-metadata";
import { startStandaloneServer } from '@apollo/server/standalone'; // Assurez-vous d'importer depuis le bon module
import createServer from '../src/config/server';

const port: number = 3000;

async function start() {
    const server = await createServer();

    try {
        const { url } = await startStandaloneServer(server, { listen: { port: port }});
        console.log(`Server listening on port ${url}`);
    } catch (error) {
        console.error("Erreur " + error);
    }
}

void start();
