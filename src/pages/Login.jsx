import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(white,lightblue);
    background-image: '/img/Slide1.jpg';
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({width: "75%"})};
    
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 15px 0px;
    padding: 5px;
`;

const Button = styled.button`
    width: 25%;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign in</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>Sign In</Button>
                <Link>Forgot Password</Link>
                <Link>Create New Account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login