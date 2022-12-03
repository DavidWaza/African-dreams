import React from "react";
import Booking from "../Booking/index";

type EventProps = {
  eventTitle: string;
  date: any;
  buttonText: string;
};

const BookingCard: React.FC<EventProps> = () => {
  return (
    <div>
      <Booking
        eventTitle="Bush Doings"
        date="December 15th"
        buttonText="Book Now"
      />
    </div>
  );
};

export default BookingCard;
