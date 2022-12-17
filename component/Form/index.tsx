import React, { useState } from "react";
import TicketStyles from "../../styles/Ticket.module.css";
import { PaystackButton } from "react-paystack";

type PaystackProps = {
  name: string;
  email: string;
  phone: number;
  amount: number;
  publicKey: string;
  text: string;
  onSubmit: () => void;
};
  
// Button Props
type PaystackButtonProps = {
  email: string;
  phone: number;
  amount: number;
  publicKey: string;
  onSuccess: () => void;
  onClose: () => void;
  alert: () => void;
  children: any;
  className: any;
  metadata: Record<string, any>
};


const handleForm = (e: any) => {
  e.preventDefault();
};

const Form: React.FC<PaystackProps> = ({ amount }) => {
  const publicKey = "pk_test_faccaa1b758f1c8e0b3327df6e141d96899b78f6";

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
      custom_fields: []
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this product!"),
  };
  return (
    <div>
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
          amount={amount}
          text="Pay Now"
          onSuccess={() => console.log('')}
          onClose={() => console.log('')}
        />
      </form>
    </div>
  );
};

export default Form;
