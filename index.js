const express =  require('express');
const men = require('./js/males.js');
const women = require('./js/females.js');
const checkName = require('./js/main.js');
const app = express();

app.get('/', (req, res) => {
  const firstnames = req.query.name.split(" ");
  let nameList = [...men.results, ...women.results];

  let results1 = "";
  for (var i = 0; i < firstnames.length; i++) {
    results1 += checkName(firstnames[i], nameList) + " ";
  }
  res.json(results1);
})

app.listen(3004);

module.exports = app;