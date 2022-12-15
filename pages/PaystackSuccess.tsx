import styled from "styled-components";

const PaystackSuccess = () => {
    return(
        <>
        <SuccessContainer>
            <SuccessContent>
                <p>Congratulations!!</p>
            </SuccessContent>
        </SuccessContainer>
        </>
    )
}
export default PaystackSuccess;

const SuccessContainer = styled.div`
background-color: #fff;
width:50%;
margin: 10% auto
`
const SuccessContent = styled.p`
padding:20px 0px
display:grid;
place-content: center;
`