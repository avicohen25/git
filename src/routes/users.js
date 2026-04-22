const express = require("express");
const router = express.Router();
const User = require('../models/user');


router.post("/addUser", (req, res) => {
  
  const user = new User(9, req.body.name);

  user.save()
  .then(result => {
    console.info('created user');
  })
  .catch(err => console.info('error', err));

  const result = {
    'status': 'success', 
    'message': `user ${req.body.name} was added`
  };

  res.status(200).send(result);
});


router.get("/getUsers", (req, res) => {
  const users = [
      {
          id: 1,
          name: 'avi',        
      },
      {
          id: 2,
          name: 'ron',        
      },      
  ];

  res.send(users);
});


module.exports = router;
