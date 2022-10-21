const express = require('express');


const app = express();

const PORT = 3000;
app.listen(PORT, () =>
{
    console.log(`Listenning to port ${PORT} ...`);
}
);

app.get('/', (req, res) =>
{
  res.send({
    Id : 1,
    Name: 'Haile'
  });
});

app.get('/message' , (req,res) =>
{
    res.send('<ul><li>Hi it is me Haileliule Baye </li></ul>');
});

app.post('/message', (req,res) => {
    console.log("Updating ...");
});