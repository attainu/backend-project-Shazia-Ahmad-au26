const app = require("./app");
const DbConnect = require("./database/DB_connect");
const userRoutes = require("./controllers/router");

DbConnect();

app.use(userRoutes);

app.use((req, res, next) => {
  const error = new Error("Invalid Request");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(
  process.env.PORT,
  console.log(`server is running http://localhost:3000`)
);
