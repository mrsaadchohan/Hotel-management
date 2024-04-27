import { patch } from "sanity/migrate";
import { Booking } from "../models/booking";
import { CreateBookingDto, Rooms } from "../models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";
import axios from "axios";
import hotelRoom from "../../../schemaTypes/hotelRoom";
export async function getFeaturedRoom() {
  const result = await sanityClient.fetch<Rooms>(
    queries.getFeaturedRoomQuery,
    {},
    { cache: "no-cache" }
  );
  return result;
}

export async function getRooms() {
  const result = await sanityClient.fetch<Rooms[]>(queries.getRoomsQuery);
  return result;
}

export async function getRoom(slug: string) {
  const result = await sanityClient.fetch<Rooms>(
    queries.getRoom,
    { slug },
    { cache: "no-cache" }
  );
  return result;
}
export const createbooking = async ({
  adults,
  checkinDate,
  checkoutDate,
  children,
  discount,
  hotelRoom,
  numberOfDays,
  totalPrice,
  user,
}: CreateBookingDto) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "booking",
          user: { _type: "reference", _ref: user },
          hotelRoom: { _type: "reference", _ref: hotelRoom },
          checkinDate,
          checkoutDate,
          numberOfDays,
          adults,
          children,
          totalPrice,
          discount,
        },
      },
    ],
  };

  // const {data}=await axios.post(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  //     mutation,
  //     {headers:{Authorization:`Bearer ${process.env.SANITY_STUDIO_TOKEN}`}}

  // );
  // return data;
  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};
export const updateHotelRoom = async (hotelRoomId: string) => {
  const mutation = {
    mutations: [
      {
        patch: {
          id: hotelRoomId,
          set: {
            isBooked: true,
          },
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};

export async function getUserBookings(userId: string) {
  const result = await sanityClient.fetch<Booking[]>(
    queries.getUserBookingsQuery,
    {
      userId,
    },
    { cache: "no-cache" }
  );

  return result;
}

export async function getUserData(userId: string) {
  const result = await sanityClient.fetch(
    queries.getUserDataQuery,
    { userId },
    { cache: "no-cache" }
  );

  return result;
}
