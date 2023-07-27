const express = require('express');

const path = require('path');

const router = express.Router();

const controller = require('../controller/admin');

router.post('/additem',controller.AddItem);

router.get('/shop',controller.getDetails);

router.post('/update/:id', controller.editUser);

module.exports = router;