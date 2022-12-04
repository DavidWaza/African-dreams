import React from "react";
import styled from "styled-components";
import Form from "../component/Form";
import Link from "next/link";


const PaystackForm = ({price}:any) => {
  return (
    <FormLayout>
      <FormCard>
          <Form price={price} />
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
