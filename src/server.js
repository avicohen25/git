const express = require("express");
const http = require("http");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log('in the middleware');
  next();
});

app.get("/", (req, res) => {
  res.send('<h1> hello from express!! </h1>');
});

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });


/*
app.use(express.json());

const usersRouter = require("./routes");
app.use("/api/users", usersRouter);

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
*/
