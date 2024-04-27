import { defineField } from "sanity";

const verificationToken = {
  name: "Verification-token",
  title: "VerificationToken",
  type: "document",
  fields: [
    defineField({
      name: "identifier",
      title: "Identifier",
      type: "string",
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
    }),
    defineField({
      name: "expires",
      title: "Expires",
      type: "date",
    }),
  ],
};
export default verificationToken;
