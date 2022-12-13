import React from "react";
import styled from "styled-components";
import Form from "../component/Form";

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
    <FormLayout>
      <FormCard>
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
      </FormCard>
    </FormLayout>
  );
};

export default PaystackForm;

const FormLayout = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;
const FormCard = styled.div`
    width: 70%
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: #f3f3f3;
    padding: 30px 50px;
`;
