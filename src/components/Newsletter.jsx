import styled from 'styled-components'
import { SendOutlined } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    height: 30vh;
    background-color: #fcf5f5;
    align-items: center;
    padding: 50px;
    flex-direction: column;

    ${mobile({height: "24vh"})};
`;
const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
    letter-spacing: 3px;

    ${mobile({fontSize: "40px"})};
`;
const Description = styled.div`
    font-size: 22px;
    font-family: 'Oswald';
    font-weight: 300px;
    margin-bottom: 25px;

    ${mobile({textAlign: "center"})};
`;
const InputContainer = styled.div`
    width: 40%;
    height: 40px;
    background-color: white;
    display: flex; 
    justify-content: space-between;
    border: 1px solid lightgray;

    ${mobile({width: "80%"})};
`;
const Input = styled.input`
    border: none;
    flex: 9;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #c4bca5;
    color: white;

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get updates on your favorite products.
        </Description>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <SendOutlined />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter