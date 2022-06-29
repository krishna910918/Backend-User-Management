const express = require('express');
const { addUser, deleteUser } = require('../controllers/user');

const router = express.Router();

router.post('/user',addUser);
router.delete('/user/:id',deleteUser);

module.exports = router;