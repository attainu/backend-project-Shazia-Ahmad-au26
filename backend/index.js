const app = require("./app");
const DbConnect = require("./database/DB_connect");

DbConnect();

app.listen(3000, console.log(`server is running http://localhost:3000`));
