import { DataSource } from "typeorm";

const database = new DataSource({
    type: "sqlite",
    database: "./backend-checkpoint.sqlite",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    logging: true
})

export default database;