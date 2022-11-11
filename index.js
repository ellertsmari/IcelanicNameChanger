import express, { application } from 'express';
import men from './js/males.js';
import women from './js/females.js';
import checkName from './js/main.js';
const app = express();

app.get('/', (req, res) => {
  const firstnames = req.query.name.split(" ");
  let nameList = [...men.results, ...women.results];
  /*if (req.query.gender === 'female') {
    nameList = women.results;
  }
  else{
    nameList = men.results;
  }*/
  let results1 = "";
  for (var i = 0; i < firstnames.length; i++) {
    results1 += checkName(firstnames[i], nameList) + " ";
  }
  res.json(results1);
})

app.listen(3000);

module.exports = app;