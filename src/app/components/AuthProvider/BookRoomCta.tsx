"use client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
type Props = {
  price: number;
  checkinDate: Date | null;
  checkoutDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setChildren: Dispatch<SetStateAction<number>>;
  calMinCheck: () => Date | null;
  discount: number;
  specialNote: string;
  children: number;
  adults: number;
  isBooked: boolean;
  handleBookNowClick: () => void;
};
const BookRoomCta: FC<Props> = (props) => {
  const {
    price,
    discount,
    specialNote,
    checkinDate,
    setCheckinDate,
    checkoutDate,
    setCheckoutDate,
    calMinCheck,
    children,
    setChildren,
    adults,
    setAdults,
    isBooked,
    handleBookNowClick,
  } = props;
  const discountprice = price - (price / 100) * discount;
  // const [adults, setAdults] = useState(1);
  // const [children, setChildren] = useState(0);
  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };
  return (
    <div className="px-7 py-6">
      <h3>
        <span
          className={`${discount ? "text-gray-400" : ""} font-bold text-xl`}
        >
          $ {price}
        </span>
        {discount ? (
          <span className="font-bold text-xl">
            {" "}
            | discount {discount}%. Now{" "}
            <span className="text-tertiary-dark">$ {discountprice}</span>
          </span>
        ) : (
          ""
        )}
      </h3>
      <div className="w-full border-b-2 border-tertiary-dark my-2" />
      <h4 className="my-8">{specialNote}</h4>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="Check in Date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check In Date
          </label>
          <ReactDatePicker
            selected={checkinDate}
            onChange={(date) => setCheckinDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            id="check-in-date"
            className="w-full border text-black
          border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="w-1/2 pr-2">
          <label
            htmlFor="Check in Date"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Check Out Date
          </label>
          <ReactDatePicker
            selected={checkoutDate}
            onChange={(date) => setCheckoutDate(date)}
            dateFormat="dd/MM/yyyy"
            disabled={!checkinDate}
            minDate={calMinCheck()}
            id="check-out-date"
            className="w-full border text-black
          border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-1/2 pr-2">
          <label
            htmlFor="adults"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Adults
          </label>
          <input
            type="number"
            id="adult"
            value={adults}
            className="w-full border border-x-gray-300 rounded-lg p-2.5"
            onChange={(e) => setAdults(+e.target.value)}
            min={1}
            max={5}
          />
        </div>

        <div className="w-1/2 pr-2">
          <label
            htmlFor="children"
            className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Children
          </label>
          <input
            type="number"
            id="children"
            value={children}
            className="w-full border border-x-gray-300 rounded-lg p-2.5"
            onChange={(e) => setChildren(+e.target.value)}
            min={0}
            max={3}
          />
        </div>
      </div>
      {calcNoOfDays() > 0 ? (
        <p className="mt-3">Total Price: $ {calcNoOfDays() * discountprice}</p>
      ) : (
        <></>
      )}
      <button
        disabled={isBooked}
        onClick={handleBookNowClick}
        className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed"
      >
        {isBooked ? "Booked" : "Book Now"}
      </button>
    </div>
  );
};

export default BookRoomCta;
