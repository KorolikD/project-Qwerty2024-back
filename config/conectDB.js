const { connect } = require("mongoose");

const connectDB = async (DB_HOST) => {
  try {
    const db = await connect(DB_HOST);
    console.log(
      `Database connection successful.
        Name: ${db.connection.name}.
        Port: ${db.connection.port}.
        Host: ${db.connection.host}.`.green.bold
    );
  } catch (error) {
    console.log(error.message.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
