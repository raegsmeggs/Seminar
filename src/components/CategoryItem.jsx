import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    flex:1;
    margin: 4px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({height: "40vh"})};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.div`
    color: white;
    font-size: 45px;
    margin: 3px;
    font-weight: 600;
`;

const Button = styled.button`
    border: none;
    padding: 8px;
    background-color: white;
    color: gray;
    cursor: pointer;
`;

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem