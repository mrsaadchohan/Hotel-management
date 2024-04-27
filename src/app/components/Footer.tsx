import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

// object
const footerdata = [
  {
    name: "Our Story",
  },
  {
    name: "Get in Touch",
  },
  {
    name: "Our Privacy Commitment",
  },
  {
    name: "Terms of Service",
  },
];
const data2 = [
  {
    name: "Dinning Experience",
  },
  {
    name: "Wellness",
  },
  {
    name: "Fitness",
  },
  {
    name: "Sports",
  },
];

function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>
        <h4 className="font-semibold text-[40px] py-6"> Contact</h4>
        <div className="flex flex-wrap gap-16 items-center justify-center">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">code with chohan</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-000</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">code with chohan</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            {footerdata.map((data, key) => {
              return (
                <div key={key}>
                  <p className="pb-4">{data.name}</p>
                </div>
              );
            })}
            <p>Customer Assistance</p>
          </div>
          <div className="flex-1 md:text-right">
            {data2.map((data, key) => {
              return (
                <div key={key}>
                  <p className="pb-4">{data.name}</p>
                </div>
              );
            })}
            <p>Events</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
}

export default Footer;
