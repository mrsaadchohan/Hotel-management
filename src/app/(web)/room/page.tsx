"use client";
import RoomCard from "@/app/components/RoomCard";
import Search from "@/app/components/Search";
import { getRooms } from "@/app/libs/apis";
import { Rooms } from "@/app/models/room";
// import { Room } from '@/app/models/room';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Room = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("searchQuery");
    const roomType = searchParams.get("roomType");
    // console.log(searchQuery);
    // console.log(roomType);
    if (roomType) setRoomTypeFilter(roomType);
    if (searchQuery) setSearchQuery(searchQuery);
  }, [searchParams]);
  async function fetchData() {
    return getRooms();
  }
  const { data, error, isLoading } = useSWR("get/hotelRooms", fetchData);
  if (error) throw new Error("Cannot fetch Data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch data");
  // console.log(data)

  const filterRooms = (rooms: Rooms[]) => {
    return rooms.filter((room) => {
      if (
        roomTypeFilter &&
        roomTypeFilter.toLowerCase() !== "all" &&
        room.type.toLowerCase() !== roomTypeFilter.toLowerCase()
      ) {
        return false;
      }

      //   Apply search query filter
      if (
        searchQuery &&
        !room.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  };

  const filteredRoom = filterRooms(data || []);
  // console.log(filteredRoom)
  return (
    <div className="container mx-auto pt-10">
      <Search
        roomtypefilter={roomTypeFilter}
        searchquery={searchQuery}
        setRoomtypefilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex mt-20 justify-between flex-wrap">
        {filteredRoom.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Room;
