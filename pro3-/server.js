const express = require('express')

const userRouter = require('./routes/users')
const app = express()

app.get('/', (req,res) => {
res.status(202 ).send("hi it is home page")
 console.log("hi it is me")
});


app.use('/user', userRouter)

app.post('/',(req,res) => {
    res.send('Create new user')
});

app.get('/:id',(req,res) => {
  
  res.send(`Page of user with user id ${req.params.id}`)

});
app.listen(3000)