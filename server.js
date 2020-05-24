const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors');
const parser = require('body-parser');
const port = process.env.PORT

app.use(parser.json());
app.use(cors());




const uri = "mongodb+srv://admin:Quizza1quizza2quizza3@quizza-aiaib.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri)
.then((client) => {
  const db = client.db('hall_of_fame');
  const triviaCollection = db.collection('Seek_and_destroy');
  const triviaRouter = createRouter(triviaCollection);
  app.use('/api/quizza', triviaRouter)
})
.catch(console.error);

app.listen(port, function () {
  console.log(`Listening on port ${this.address().port}`);
});
