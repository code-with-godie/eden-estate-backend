import { StatusCodes } from 'http-status-codes';
import NotFoundError from '../../../errors/not-found.js';
import Users from '../models/User.js';
import BadRequestError from '../../../errors/bad-request.js';
import Room from '../models/Room.js';

export const getEstateRooms = async (req, res, next) => {
  try {
    const {
      params: { id: estateID },
    } = req;
    const rooms = await Room.find({ estateID }).sort({
      createdAt: -1,
    });
    return res.status(StatusCodes.OK).json({ success: true, rooms });
  } catch (error) {
    next(error);
  }
};
export const getRandomRooms = async (req, res, next) => {
  try {
    const rooms = await Room.aggregate([
      {
        $sample: { size: 200 },
      },
    ]);
    return res.status(StatusCodes.OK).json({ success: true, rooms });
  } catch (error) {
    next(error);
  }
};
export const createRoom = async (req, res, next) => {
  try {
    // const {
    //   user: { userID },
    // } = req;
    const room = await Room.create({ ...req.body });
    return res.status(StatusCodes.CREATED).json({
      success: true,
      room,
      message: 'room successfully created',
    });
  } catch (error) {
    next(error);
  }
};
export const deleteRoom = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
