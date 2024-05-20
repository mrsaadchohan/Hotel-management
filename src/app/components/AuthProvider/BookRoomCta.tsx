import React from 'react';

const BookRoomCta = ({
  discount,
  price,
  specialNote,
  checkinDate,
  setCheckinDate,
  checkoutDate,
  setCheckoutDate,
  calMinCheck,
  children, // Ensure children is not destructured unless used within the component
  setChildren,
  adults,
  setAdults,
  isBooked,
  handleBookNowClick,
}) => {
  return (
    <div className="book-room-cta">
      <h2>Book this room</h2>
      <p>Discount: {discount}%</p>
      <p>Price: ${price}</p>
      <p>Special Note: {specialNote}</p>
      <p>Check-in Date: {checkinDate?.toLocaleDateString()}</p>
      <p>Check-out Date: {checkoutDate?.toLocaleDateString()}</p>
      <p>Adults: {adults}</p>
      <p>Children: {children}</p>
      <button onClick={handleBookNowClick} disabled={isBooked}>
        {isBooked ? 'Booked' : 'Book Now'}
      </button>
    </div>
  );
};

export default BookRoomCta;
