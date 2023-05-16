const express = require('express');
const { users } = require('./data');

const app = express();

app.use(express.json()); //Parsing(JSON) the req 

// GET http://localhost:4000/
app.get('/users', (req, res) => {
    res.send({
        users: users
    })
});

// GET /users/1
// GET /users/1234
// GET /users/jhfdttjtjtyte
app.get('/users/:userId', (req, res) => {
    const userId = parseInt(req.params.usersId);
    const userFound = users.find(user => user.id === userId);
    res.send({
        user: userFound
    })
})

// POST http://localhost:4000/greetings
app.post('/greetings', (req, res) => {
    res.send({message: `Happy birthday ${req.body.name}!`})
});

//Exposing the App
app.listen(4000, () => {
    console.log('App is runnin on port 4000');
})

//GET - To read -> /users or /users/:userId
//POST - To insert or add -> /users or /domain/:domainId/users
//PUT - To update -> /users/:usersId -> req.body
//DELETE - To Delete -> /users or /users/:userId 