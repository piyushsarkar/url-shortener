const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('DB Connection successful ✅'))
  .catch(() => console.log('DB CONNECTION FALIED ❌❌'));;

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json({extended : false}));
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/url'));
app.all('*', (req, res) => {
    res.render('404');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));