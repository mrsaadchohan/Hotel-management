import { Stripe, loadStripe } from "@stripe/stripe-js";
let stripPromise: Promise<Stripe | null>;
export const getstripe = () => {
  if (!stripPromise) {
    stripPromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
  }
  return stripPromise;
};
