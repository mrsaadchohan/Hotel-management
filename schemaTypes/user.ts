import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isAdmin",
      title: "isAdmin",
      type: "boolean",
      description: "Check if the user is admin",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the user",
      readOnly: true,
    }),
    defineField({
      name: "Image",
      title: "Image",
      type: "url",
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
    }),
    defineField({
      name: "emailVerified",
      type: "datetime",
      hidden: true,
    }),
    defineField({
      name: "password",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "about",
      title: "about",
      type: "text",
    }),
  ],
};
export default user;
