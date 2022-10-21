
const express = require('express')
const friendsRouter = express.Router();
 
const friendscontroller = require('../controllers/friends.controller')


friendsRouter.get('/:iid',friendscontroller.friendsoneget );
friendsRouter.get('/',friendscontroller.friendsallget );

//  how to use the post method 
friendsRouter.post('/', friendscontroller.friendspost);

module.exports = friendsRouter;