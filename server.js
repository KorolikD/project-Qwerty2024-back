const app = require("./app");
const connectDB = require("./config");

const { DB_HOST, PORT = 3000 } = process.env;

connectDB(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running. Use our API on port: ${PORT}`.green.bold);
    });
  })
  .catch((error) => {
    console.log(error.message.red.bold);
    process.exit(1);
  });
