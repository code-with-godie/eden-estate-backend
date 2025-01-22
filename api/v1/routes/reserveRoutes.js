import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import {
  getRoomReservedDates,
  reserveRoom,
  updateRoomReserve,
} from '../controllers/reservesController.js';
const Router = express.Router();
Router.route('/')
  .post(authorize, reserveRoom)
  .patch(authorize, updateRoomReserve);
Router.route('/:id').get(getRoomReservedDates);

export default Router;
