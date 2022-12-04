import React from "react";
import styled from "styled-components";
import Form from "../component/Form";

const PaystackForm = () => {
  return (
    <PaystackFormContainer>
      <FormLayout>
        <FormCard>
          <Form
            name={""}
            email={""}
            phone={0}
            amount={0}
            publicKey={""}
            text={""}
          />
        </FormCard>
      </FormLayout>
    </PaystackFormContainer>
  );
};

export default PaystackForm;

const PaystackFormContainer = styled.div`
  background-position: center;
  background-size: cover;
`;
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
