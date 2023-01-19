module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf42hho2i3mtifjgvp80-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6yt4'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'ys0rWcc2Ni1lABrQ2bJB7xt6Abg1WVpM'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
