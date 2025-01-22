import { StatusCodes } from 'http-status-codes';
import Reserve from '../models/Reserve.js';

export const getRoomReservedDates = async (req, res, next) => {
  try {
    const {
      params: { id: roomID },
    } = req;
    const reserves = await Reserve.find({ roomID }, { dates: 1 });
    return res.status(StatusCodes.OK).json({ success: true, reserves });
  } catch (error) {
    next(error);
  }
};
export const reserveRoom = async (req, res, next) => {
  try {
    const { body } = req;
    const booked = await Reserve.create({ ...body });
    return res.status(StatusCodes.OK).json({ success: true, booked });
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
export const updateRoomReserve = async (req, res, next) => {
  try {
    const {
      params: { id: roomID },
      body,
    } = req;
    const room = await Reserve.findByIdAndUpdate(roomID, body, {
      new: true,
      runValidators: true,
    });
    return res.status(StatusCodes.OK).json({
      success: true,
      room,
    });
  } catch (error) {
    next(error);
  }
};
