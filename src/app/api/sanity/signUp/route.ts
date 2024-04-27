import sanityClient from "@/app/libs/sanity";
import { signUpHandler } from "next-auth-sanity";
export const POST= signUpHandler(sanityClient);