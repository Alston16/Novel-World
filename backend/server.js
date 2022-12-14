const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

var app = express();
mongoose.connect("mongodb://localhost:27017/novel_world");
//mongoose.connect("mongodb+srv://Alston16:alston1616@novel-world.ufh6v77.mongodb.net/novel_world?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.use(express.json());

const novelsRouter = require('./routes/novels');
const usersRouter = require('./routes/users');

app.use('/novels', novelsRouter);
app.use('/users', usersRouter);

var server = app.listen(8080, function () {
    console.log("Server @ port 8080");
})