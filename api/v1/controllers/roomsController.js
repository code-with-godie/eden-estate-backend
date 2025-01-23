import { StatusCodes } from 'http-status-codes';
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
    // Use the find method to get random rooms
    const rooms = await Room.find({})
      .populate({
        path: 'estateID',
      })
      .limit(200)
      .sort({ _id: -1 }); // Sort by _id in descending order to get the latest rooms

    // Rename the populated field from estateID to estate
    const formattedRooms = rooms.map(room => {
      return {
        ...room._doc,
        estate: room.estateID,
        estateID: undefined, // Remove the original estateID field
      };
    });

    return res
      .status(StatusCodes.OK)
      .json({ success: true, rooms: formattedRooms });
  } catch (error) {
    console.error('Error fetching rooms:', error);
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
export const getSingleRoom = async (req, res, next) => {
  try {
    const {
      params: { id: roomID },
    } = req;

    // Populate the estateID and add the estate attribute
    const room = await Room.findById(roomID).populate({
      path: 'estateID',
    });

    if (!room) {
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: 'Room not found',
      });
    }

    return res.status(StatusCodes.OK).json({
      success: true,
      room,
    });
  } catch (error) {
    next(error);
  }
};
