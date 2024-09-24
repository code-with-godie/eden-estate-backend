import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import {
  createRoom,
  getEstateRooms,
  getRandomRooms,
  getSingleRoom,
} from '../controllers/roomsController.js';
const Router = express.Router();
Router.route('/').get(getRandomRooms).post(authorize, createRoom);
Router.route('/single/:id').get(getSingleRoom);
Router.route('/:id').get(getEstateRooms);

export default Router;
