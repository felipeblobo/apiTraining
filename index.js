const express = require("express");
const app = express();
const port = 3000;
const hbs = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', hbs ({
  layoutsDir: __dirname + '/views/layouts'
}));


app.use(express.static('public'))

app.get("/", (req, res) => {
  res.render('home', {layout: 'main'})
});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}.`);
});
