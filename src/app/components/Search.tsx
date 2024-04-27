"use client";
import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { FC } from "react";
type Props = {
  roomtypefilter: string;
  searchquery: string;
  setRoomtypefilter: (value: string) => void;
  setSearchQuery: (value: string) => void;
};
const Search: FC<Props> = ({
  roomtypefilter,
  searchquery,
  setRoomtypefilter,
  setSearchQuery,
}) => {
  const router = useRouter();

  const handleRoom = (event: ChangeEvent<HTMLSelectElement>) => {
    setRoomtypefilter(event.target.value);
  };
  const handleSearchquery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handlefilterClick = () => {
    router.push(
      `/room?roomTypes=${roomtypefilter}&&searchQuery=${searchquery}`
    );
  };

  return (
    <section className="bg-tertiary-light px-4 py-6 rounded-lg">
      <div className="container mx-auto flex gap-4 flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 lg:w-auto mb-6 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Room Type
          </label>
          <div className="relative">
            <select
              value={roomtypefilter}
              onChange={handleRoom}
              className="w-full px-6 py-2 capitalize rounded leading-tight dark:bg-black focus:outline-none"
            >
              <option value="All">All</option>
              <option value="Basic">Basic</option>
              <option value="Luxury">Luxury</option>
              <option value="Suite">Suite</option>
            </select>
          </div>
        </div>
        <div className="w-full md:w-1/3 lg:w-auto mb-4 md:mb-0">
          <label className="block text-sm font-medium mb-2 text-black">
            Search
          </label>
          <input
            type="search"
            id="search"
            value={searchquery}
            onChange={handleSearchquery}
            placeholder="Search.."
            className="w-full px-4 py-3 rounded leading-tight dark:bg-black focus:outline-none "
          />
        </div>
        <button
          className="btn-primary"
          type="button"
          onClick={handlefilterClick}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Search;
