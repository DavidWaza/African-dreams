import React from "react";
import Form from "../component/Form";
import ticketStyles from "../styles/Ticket.module.css"

type paystackProps = {
  price: number;
};

export  const getServerSideProps= (context: { query: { price: number; }; })=> {
  return {
      props: {
         price: context.query.price
      }
  }
}

const PaystackForm: React.FC<paystackProps> = ({ price }) => {
  return (
    <div className={ticketStyles.FormLayout}>
      <div className={ticketStyles.FormCard}>
        <Form
          name={""}
          email={""}
          phone={0}
          amount={price}
          publicKey={""}
          text={""}
          onSubmit={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </div>
  );
};

export default PaystackForm;

