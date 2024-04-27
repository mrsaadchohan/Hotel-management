import { defineField } from "sanity";

const booking = {
  name: "booking",
  title: "Booking",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hotelRoom",
      title: "Hotel-Room",
      type: "reference",
      to: [{ type: "hotelRoom" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "CheckinDate",
      title: "check-in-Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "CheckoutDate",
      title: "check-out-Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "NumberofDays",
      title: "Number-of-Days",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "adults",
      title: "Adults",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "children",
      title: "Children",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "totalPrice",
      title: "TotalPrice",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
};
export default booking;
