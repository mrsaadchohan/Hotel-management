"use client";

import { getUserBookings } from "@/app/libs/apis";
import { User } from "@/app/models/user";
import axios from "axios";
import useSWR from "swr";
import { signOut } from "next-auth/react";
import Image from "next/image";
import LoadingSpinner from "../../loading";
import { FaSignOutAlt } from "react-icons/fa";
import Table from "@/app/components/Table";
import { SetStateAction } from "react";

const UserDetail = (props: { params: { id: string } }) => {
  const {
    params: { id: userId },
  } = props;
  
  const fetchUserBookings = async () => getUserBookings(userId);
  const fetchUserData = async () => {
    const { data } = await axios.get<User>("/api/users");
    return data;
  };

  const {
    data: userBooking,
    error: bookingError,
    isLoading: loadingBooking,
  } = useSWR(`/api/userbooking/${userId}`, fetchUserBookings);

  const {
    data: userData,
    isLoading: loadingUserData,
    error: userError,
  } = useSWR("/api/users", fetchUserData);

  if (bookingError || userError) throw new Error("Cannot fetch data");
  if (!userBooking && !loadingBooking) throw new Error("Cannot fetch data");
  if (!userData && !loadingUserData) throw new Error("Cannot fetch data");

  if (loadingUserData || loadingBooking) return <LoadingSpinner />;
  if (!userData) throw new Error("Cannot fetch data");

  function setRoomId(value: SetStateAction<string | null>): void {
    throw new Error("Function not implemented.");
  }

  function toggleRatingModal(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="container mx-auto px-2 md:px-4 py-10">
      <div className="grid md:grid-cols-12 gap-10">
        <div className="hidden md:block md:col-span-4 lg:col-span-3 shadow-lg h-fit sticky top-10 bg-[#eff0f2] text-black rounded-lg px-6 py-4">
          <div className="md:w-[143px] w-28 h-28 md:h-[143px] mx-auto mb-5 rounded-full overflow-hidden">
            <Image
              src={userData.image}
              alt={userData.name}
              width={143}
              height={143}
              className="img scale-animation rounded-full"
            />
          </div>
          <div className="font-normal py-4 text-left">
            <h6 className="text-xl font-bold pb-3">About</h6>
            <p className="text-sm">{userData.about ?? ""}</p>
          </div>
          <div className="font-normal text-left">
            <h6 className="text-xl font-bold ">{userData.name}</h6>
          </div>
          <div className="flex items-center">
            <p className="mr-2">Sign Out</p>
            <FaSignOutAlt
              className="text-3xl cursor-pointer"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            />
          </div>
        </div>
        <div className="md:col-span-8 lg:col-span-9">
          <div className="flex items-center">
            <h5 className="text-2xl font-bold mr-3">Hello, {userData.name}</h5>
          </div>
          <div className="md:hidden w-14 h-14 rounded-l-full overflow-hidden">
            <Image
              src={userData.image}
              width={56}
              height={56}
              className="img scale-animation rounded-full"
              alt="User Name"
            />
          </div>
          <div className="md:hidden flex items-center my-2">
            <p className="mr-2">Sign Out</p>
            <FaSignOutAlt
              className="text-3xl cursor-pointer"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
            />
          </div>
          {userBooking && (
            <Table bookingDetails={userBooking} setRoomId={setRoomId} toggleRatingModal={function (): void {
              throw new Error("Function not implemented.");
            } } />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
