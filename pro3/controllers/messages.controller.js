const path = require('path');


function getmessages(req,res)
{
     res.render('message' ,{
        title: 'Messages to my friends !',
        friends: 'Elon Musk',
     }); 
    
    // res.sendFile(path.join(__dirname,'..','public','images' , 'a.jpg'));

    // res.send('<ul><li>Hi it is me Haileliule Baye </li></ul>');
};

function postmessages(req,res)
{
    console.log("Updating ...");
    res.json(req.body.mes)
};


module.exports = {
    
    getmessages,
    postmessages

}