"use client";
import React, { useState } from "react";
import Search from "./Search";

function PageSearch() {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <Search
        roomtypefilter={roomTypeFilter}
        searchquery={searchQuery}
        setRoomtypefilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
      />
    </div>
  );
}

export default PageSearch;
