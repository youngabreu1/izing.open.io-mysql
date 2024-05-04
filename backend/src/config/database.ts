require("../app/config-env");

module.exports = {
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_bin"
    // freezeTableName: true
  },
  pool: {
    max: process.env.POSTGRES_POOL_MAX || 100,
    min: process.env.POSTGRES_POOL_MIN || 10,
    acquire: process.env.POSTGRES_POOL_ACQUIRE || 30000,
    idle: process.env.POSTGRES_POOL_IDLE || 10000
  },
  dialect: process.env.DB_DIALECT || "postgres",
  timezone: "UTC",
  host: process.env.MYSQL_HOST || "localhost",
  port: process.env.DB_PORT || "5432",
  database: process.env.MYSQL_DB || "wchats",
  username: process.env.MYSQL_USER || "postgres",
  password: process.env.MYSQL_PASSWORD || "marina@0509",
  logging: false
};
