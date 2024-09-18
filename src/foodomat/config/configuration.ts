import * as process from 'node:process';

export default () => ({
  port: parseInt(process.env.BACKEND_PORT_URL || '', 10),
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '', 10),
    name: process.env.DATABASE_NAME,
    schema: process.env.DATABASE_SCHEMA,
  },
})