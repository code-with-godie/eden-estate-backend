import express from 'express';
import authorize from '../../../middlewares/authentication.js';
import payWithMpesa from '../payments/mpesa/mpesa.js';
import payWithStripe from '../payments/stripe/stripe.js';
import payWithPayPal from '../payments/paypal/paypal.js';
const Router = express.Router();
Router.route('/stripe').post(authorize, payWithStripe);
Router.route('/mpesa').post(authorize, payWithMpesa);
Router.route('/paypal').post(authorize, payWithPayPal);

export default Router;
