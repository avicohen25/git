import express from 'express';
import { StatusCodes } from 'http-status-codes';
import userService from './services/user.service.js';

//validation
import { expressYupMiddleware } from 'express-yup-middleware';
import { addUser } from './schemas.js';

const router = express.Router();

const STATUS = {
  SUCCESS: 'OK',
  FAILURE: 'ERROR' 
};

router.get('/', (req, res) => {
  //res.status(StatusCodes.BAD_REQUEST);
  res.status(StatusCodes.OK);
  res.send('Hello World!!! !!!');
});


router.get('/getUsers', (req, res) => {
  res.status(StatusCodes.OK);
  const users = userService.getUsers();
  res.send(users);
});


router.post('/addUser', expressYupMiddleware({ schemaValidator:addUser }), (req, res) => {
  const { body: user } = req;
  //data.push(req.body);

  if(!user.name){
    return res.status(StatusCodes.BAD_REQUEST).send({ status: STATUS.FAILURE, data: 'name is required!' });
  }
  
  userService.addUser(user);

  const result = {
    'status': STATUS.SUCCESS, 
    message: `user ${user.name} was added`
  };

  res.status(StatusCodes.CREATED).send(result);  
});

router.post('/removeUser', (req, res) => {
    //const id = parseInt(req.params.id);
    const id = parseInt(req.body.id);

  if(!id){
    return res.status(StatusCodes.BAD_REQUEST).send({ status: STATUS.FAILURE, data: 'id is required!' });
  }
  
  userService.removeUser(id);

  const result = {
    'status': STATUS.SUCCESS, 
    message: `user ${id} was removed`
  };

  res.status(StatusCodes.CREATED).send(result);  
});


export default router;