import Stripe from 'stripe';
import { TPaymentInfo } from './payment.interface';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

const createPaymentSecret = async (payload: TPaymentInfo) => {
  const price = payload.price;
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    payment_method_types: ['card'],
  });

  const result = { clientSecret: paymentIntent.client_secret };
  return result;
};



export const PaymentService = {
  createPaymentSecret,
};
