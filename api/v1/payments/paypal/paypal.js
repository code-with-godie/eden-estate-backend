import { StatusCodes } from 'http-status-codes';
const payWithPayPal = async (req, res, next) => {
  try {
    return res
      .status(StatusCodes.OK)
      .json({ success: true, message: 'paying with paypal' });
  } catch (error) {
    next(error);
  }
};

export default payWithPayPal;
