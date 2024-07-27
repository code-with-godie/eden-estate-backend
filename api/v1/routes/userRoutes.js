import express from 'express';
import {
  auth,
  login,
  createAccount,
  getAllUsers,
  bookmark,
  updateUser,
  getSingleUser,
} from '../controllers/usersController.js';
import authorize from '../../../middlewares/authentication.js';

const Router = express.Router();
Router.route('/').get(authorize, getAllUsers);
Router.route('/login').post(login);
Router.route('/register').post(createAccount);
Router.route('/auth').post(auth);
Router.route('/update-details').patch(authorize, updateUser);
Router.route('/bookmark/:id').patch(authorize, bookmark);
Router.route('/single/:id').get(getSingleUser);
export default Router;
