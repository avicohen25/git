const express = require("express");
//const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const path = require('path');

app.set('view engine', 'pug'); //set template engines
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended:false})); 
app.use(express.static(path.join(__dirname, '..', 'public')));

const middlewareRoutes = require('./routes/middleware');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(middlewareRoutes);
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1> Page Not Found </h1>');
});

//const server = http.createServer(app);
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
