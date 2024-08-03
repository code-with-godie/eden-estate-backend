import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import {
  createRoom,
  getEstateRooms,
  getRandomRooms,
} from '../controllers/roomsController.js';
const Router = express.Router();
Router.route('/').get(getRandomRooms).post(authorize, createRoom);
Router.route('/:id').get(getEstateRooms);

export default Router;
