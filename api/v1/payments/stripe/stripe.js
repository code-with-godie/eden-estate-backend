import { StatusCodes } from 'http-status-codes';
import Stripe from 'stripe';
import dotenv from 'dotenv';
dotenv.config();
const KEY = process.env.STRIPE_SECRET;

const stripe = new Stripe(KEY);

const payWithStripe = async (req, res, next) => {
  try {
    const { body } = req;
    const { userID, roomID, amount } = body;

    // Create a customer
    const customer = await stripe.customers.create({
      metadata: {
        userID,
        roomID,
      },
    });

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Total amount to be charged
      currency: 'usd',
      customer: customer.id,
      payment_method_types: ['card'],
    });

    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Stripe payment intent created',
      clientSecret: paymentIntent.client_secret, // Client secret to confirm the payment on the client side
    });
  } catch (error) {
    next(error);
  }
};

export default payWithStripe;
