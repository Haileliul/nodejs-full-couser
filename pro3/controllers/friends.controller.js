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


 
function friendspost (req , res ) {
    if (!(req.body.name))
    {
        res.status(400).json({
            error: 'bad request ..'
        });
    }
  const newfriend = {
   
    name: req.body.name,
    id: model.length
  };

  model.push(newfriend);
  res.json(newfriend);
};

function friendsallget (req,res)
{
    res.json(model);  
};

function friendsoneget (req ,res)
{

    const id = Number(req.params.iid);
    const friend = model[id];
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
 
};

module.exports = {
    
    friendspost,
    friendsallget,
    friendsoneget

}