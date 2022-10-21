const express = require('express');
// router 
const friendsroute = require('./Routers/friends.route')
const messageroute = require('./Routers/messages.route')
const app = express();

const path = require('path');

app.set('view engine', 'hbs' );
app.set('views' , path.join(__dirname,'views'));
 
const PORT =3000;

const model = [
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
];


app.use((req, res, next) => 
{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta} ms`);

});

app.use('/public',express.static(path.join( __dirname,'public')));
app.use(express.json());


app.get('/', (req, res) => {
    res.render('index', {
       title: 'this is my first website',
       caption: 'This is your cirteficate' 
    });
});



app.use('/friends' ,friendsroute );
app.use('/message' , messageroute )

app.listen(PORT, () => {
    console.log(`Lestining to port ${PORT} ...`);

});
