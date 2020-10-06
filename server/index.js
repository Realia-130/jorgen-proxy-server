const path = require('path');
const express = require('express');
const app = express();
const port = 5001;


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => console.log(`Listening on port ${port}...`));