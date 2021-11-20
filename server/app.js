const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// DB connection
const DATABASE_URL = process.env.MONGO_DB_URL;
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongoose connection
mongoose.connection.once("open", () => {
  console.log("Mongo Database successfully connected !!");
});

// routers
const mealsRouter = require("./routes/meals");
const usersRouter = require("./routes/users");

app.use("/meals", mealsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is currently running at: http://localhost:${port}`);
});
