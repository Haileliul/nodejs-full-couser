const express = require('express');


const app = express();

const PORT =3000;

const friends = [
    {
        id: 0,
        name: 'newtone'
    },
    {
        id: 1,
        name: 'haile'
    },
    {
        id: 2,
        name: 'baye'
    }
]

app.use((req, res, next) => 
{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta} ms`);

});

app.use(express.json());

//  how to use the post method 
app.post('/friends', (req , res ) => {
    if (!(req.body.name))
    {
        res.status(400).json({
            error: 'bad request ..'
        });
    }
  const newfriend = {
   
    name: req.body.name,
    id: friends.length
  };

  friends.push(newfriend);
  res.json(newfriend);
});



app.get('/', (req, res) => {
    res.send("this is home page")
});



app.get('/friends',  (req,res) => {
    res.json(friends);  
 });


app.get('/friends/:iid', (req ,res) =>{

    const iid = Number(req.params.iid);
    const friend = friends[iid];
    if(friend)
    {
        res.status(200).json(friend);
    } 
    else
    {
        res.status(404).json({
            error: "Friend does not exit"
        }); 
    }

});


app.get('/message' , (req,res) =>
{
    res.send('<ul><li>Hi it is me Haileliule Baye </li></ul>');
});

app.post('/message', (req,res) => {
    console.log("Updating ...");
});


app.listen(PORT, () => {
    console.log(`Lestining to port ${PORT} ...`);
});
