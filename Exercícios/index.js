const express = require('express');
const server = express();
const userList = ['Amanda ', 'Sarah ', 'Gabrielle ', 'Marina '];
const bookList = ['Jurassic Park', 'O Código Da Vinci', 'It', 'Um Estudo em Vermelho'];

function checkUsersInArray(req, res, next){
    const userValidation = userList[req.params.username]
    if (!userValidation){
        return res.status(400).json({error: `User not found`});
    }
    req.userValidation = userValidation;
    return next();
}

server.get('/', function(req, res){
    res.json('Hello World');
});

server.get('/users', function(req, res){
    res.json(userList);
});

server.get('/users/:username', checkUsersInArray, (req, res) => {
    const userId = req.params.username;
    return res.json(userList[userId]);
});

server.get('/books', (req, res) => {
    res.json(bookList);
});

server.get(`/books/:bookname`, (req, res) => {
    const bookId = req.params.bookname;
    return res.json(bookList[bookId]);
});

server.get(`/users/:username/books/:bookname`, (req, res) => {
   const {username, bookname} = req.params
   let concat = userList[username] + bookList[bookname];

   return res.json(concat)
});

server.get('/country', (req, res) => {
    res.json(req.query);

});

server.listen(3000);