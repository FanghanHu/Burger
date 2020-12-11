const express = require('express');
const exhbs = require('express-handlebars');


const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', exhbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(require('./controllers/burgers_controller'));

app.listen(PORT, () => {
    console.log("Server is online.");
});