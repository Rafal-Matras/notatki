const express = require('express');

const {notesRouter} = require("./routers/notes");
const {homeRouter} = require("./routers/home");
require('./utils/db');

const app = express();

app.use(express.json());

app.use('/', homeRouter)
app.use('/notes', notesRouter);

app.listen(3001, 'localhost', () => {
    console.log('Server start on http://localhost:3001');
})