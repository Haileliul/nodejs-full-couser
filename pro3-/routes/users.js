const express = require('express')

const router = express.Router()


router.get('/', (req,res) => {
    res.status(202).send("you are now in users page ")
});

router.get('/new', (req,res) => {
    res.status(202 ).send("you are now about to make new friend")
});

router.post('/',(req,res) => {
    res.send('Create new user')
});

// router.get('/:id',(req,res) => {
  
//   res.send(`Page of user with user id ${req.params.id}`)

// });

// router.put('/:id', (req,res) => {
//     res.send(`Update user with ID ${req.params.id}`)
// })

// router.delete('/:id', (req,res) => {
//     res.send(`Delete user with ID ${req.params.id}`)
// })


router.route('/:id')
.get((req,res) => {
  
     res.send(`Page of user with user id ${req.params.id}`)
    
     })
.put((req,res) => {
        res.send(`Update user with ID ${req.params.id}`)
    })
.delete((req,res) => {
        res.send(`Delete user with ID ${req.params.id}`)
    })
module.exports = router