import { Dispatch, FC, SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  checkinDate: Date | null;
  setCheckinDate: Dispatch<SetStateAction<Date | null>>;
  checkoutDate: Date | null;
  setCheckoutDate: Dispatch<SetStateAction<Date | null>>;
  setAdults: Dispatch<SetStateAction<number>>;
  setChildren: Dispatch<SetStateAction<number>>;
  calcMinCheckoutDate: () => Date | null; // Ensure this property is included
  price: number;
  discount: number;
  adults: number;
  children: number;
  specialNote: string;
  isBooked: boolean;
  handleBookNowClick: () => void;
};

const BookRoomCta: FC<Props> = ({
  price,
  discount,
  specialNote,
  checkinDate,
  setCheckinDate,
  checkoutDate,
  setCheckoutDate,
  calcMinCheckoutDate,
  setAdults,
  setChildren,
  adults,
  children,
  isBooked,
  handleBookNowClick,
}) => {
  const discountPrice = price - (price / 100) * discount;

  const calcNoOfDays = () => {
    if (!checkinDate || !checkoutDate) return 0;
    const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  return (
    <div className='px-7 py-6'>
      {/* Rest of the component code remains the same */}
    </div>
  );
};

export default BookRoomCta;
