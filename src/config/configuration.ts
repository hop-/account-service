const dbPort: number = parseInt(process.env.DB_PORT, 10) || 27017;
const dbHost: string = process.env.DB_HOST;
const dbName: string = process.env.DB_NAME;
const dbUsername: string = process.env.DB_USER || 'api';
const dbPassword: string = process.env.DB_PASSWD;

export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  db: {
    port: dbPort,
    host: dbHost,
    name: dbName,
    username: dbUsername,
    password: dbPassword,
    uri: `mongodb://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`,
  },
});
