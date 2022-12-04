import React, { useState } from "react";
import TicketStyles from "../../styles/Ticket.module.css";
import { PaystackButton } from "react-paystack";

// type PaystackProps = {
//   name: string;
//   email: string;
//   phone: number;
//   amount: number;
//   publicKey: string;
//   text: string;
// };

// // Button Props
// type PaystackButtonProps = {
//   email: string;
//   phone: number;
//   amount: number;
//   publicKey: string;
//   onSuccess: () => void;
//   onClose: () => void;
//   alert: () => void;
//   children: any;
//   className: any;
// };


const handleForm = (e) => {
  e.preventDefault;
};

const Form = ({price}) => {
  const publicKey = "pk_test_7aff12d91ec4b92eabed43cc84fe830253f6d7a1";
  const amount = 10000;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
      email,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this product!"),
  };
  return (
    <div>
      <p>{`You selected ${price}`}</p>
      <form onSubmit={handleForm} className={TicketStyles.form}>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          value={phone}
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <PaystackButton
          className={TicketStyles.paystackButton}
          {...componentProps}
        />
      </form>
    </div>
  );
};

export default Form;
