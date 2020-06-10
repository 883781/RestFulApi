const {Router} = require('express');
const router = Router();
const mysqlConnection = require('../config/dbConnection.js');

// Display a single user by ID
router.get('/users/:id', (request, response) => {
    const id = request.params.id;
 
    mysqlConnection.query('SELECT * FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

// Display all users
router.get('/', (request, response) => {
    mysqlConnection.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
        response.send(result);
    });
});

// Add a new user
router.post('/:id', (request, response) => {
    mysqlConnection.query('INSERT INTO users SET ?', request.body, (error, result) => {
        if (error) throw error;
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

// Update an existing user
router.put('/users/:id', (request, response) => {
    const id = request.params.id;
 
    mysqlConnection.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
        if (error) throw error;
 
        response.send('User updated successfully.');
    });
});


// Delete a user
router.delete('/users/:id', (request, response) => {
    const id = request.params.id;
 
    mysqlConnection.query('DELETE FROM users WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('User deleted.');
    });
});
module.exports = router;