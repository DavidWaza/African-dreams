import React from "react";
import Booking from "../Booking/index";

type EventProps = {
  eventTitle: string;
  date: any;
  location:string;
  buttonText: string;
};

const BookingCard: React.FC<EventProps> = () => {
  return (
    <div>
      <Booking
        eventTitle="Bush Doings"
        date="16th - 18th December"
        location="Katampe Extention Abuja"
        buttonText="Book Now"
      />
    </div>
  );
};

export default BookingCard;
