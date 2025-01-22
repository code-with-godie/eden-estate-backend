import { StatusCodes } from 'http-status-codes';
const payWithMpesa = async (req, res, next) => {
  try {
    return res
      .status(StatusCodes.OK)
      .json({ success: true, message: 'paying with mpesa' });
  } catch (error) {
    next(error);
  }
};

export default payWithMpesa;
