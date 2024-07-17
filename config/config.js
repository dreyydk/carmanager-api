// This code contains the configs necessary for the database to function
// Keep in mind that these are examples, and you should change them according to your Postgres environment

module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "carmanagerapi",
  define: {
    timestamps: true,
  },
};
