const express = require('express')
const messagerouter = express.Router();
const messagecontroller = require('../controllers/messages.controller')

messagerouter.get('/' ,messagecontroller.getmessages ); 
messagerouter.post('/', messagecontroller.postmessages);


module.exports = messagerouter;