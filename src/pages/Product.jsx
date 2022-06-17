import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons"

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    height: 100%;
    width: 90vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    font-family: 'Oswald';
    margin: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 20px;

`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    display: flex;
    justify-content: space-between;
`;
const FilterTitle = styled.span`
    margin: 0px 1px;
`;

const FilterColor = styled.div`
    width: 17px;
    height: 17px;
    border-radius: 50%;
    margin 3px;
    background-color: ${props=>props.color}
`;
const FilterSize = styled.select`
    width: 130%;
    margin-left: 10px;
`;
const FilterSizeOption = styled.option`
    width: 10%;
`;

const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 10px;
    margin-left: 30px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: teal;
        color: white;
    }
`;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='/img/prod1.jpg' />
            </ImgContainer>
            <InfoContainer>
                <Title>Ari Vase</Title>
                <Desc>A light dress, perfect for summer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nostrum sapiente quaerat, dolorum accusamus necessitatibus omnis eius consequatur impedit blanditiis porro harum eum excepturi dignissimos error repellendus minima in beatae?</Desc>
                <Price>$360</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                    </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Add />
                        <Amount>1</Amount>
                        <Remove />
                        <Button>Add to Cart</Button>
                    </AmountContainer>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product