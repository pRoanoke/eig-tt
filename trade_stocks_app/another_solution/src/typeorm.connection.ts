import { DataSource } from "typeorm";

// dotenv
export const typeormConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "stocksdb",
  entities: ['../entities/**/*.entity{.ts,.js}'],
  // ofc should be disabled
  synchronize: true,
  logging: false,
})