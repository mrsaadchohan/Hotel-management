"use client";
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import themeContext from "../context/themeContext";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Header() {
  const { darkTheme, setDarkTheme } = useContext(themeContext);
  const { data: session } = useSession();

  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:w-2/3">
        <Link href="" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            {session?.user ? (
              <Link href={`/users/${session.user.id}`}>
                {session.user.image ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={session.user.image}
                      alt={session.user.name ? session.user.name : "User Image"}
                      width={40}
                      height={40}
                    />
                  </div>
                ) : null}
              </Link>
            ) : (
              <Link href="/auth">
                <FaUserCircle className="cursor-pointer" />
              </Link>
            )}
          </li>
          <li className="flex items-center ml-2">
            <Link href="">
              {darkTheme ? (
                <MdOutlineLightMode
                  className="cursor-pointer"
                  onClick={() => {
                    setDarkTheme(false);
                    localStorage.removeItem("hotel-theme");
                  }}
                />
              ) : (
                <MdDarkMode
                  className="cursor-pointer"
                  onClick={() => {
                    setDarkTheme(true);
                    localStorage.setItem("hotel-theme", "true");
                  }}
                />
              )}
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/room">Rooms</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
