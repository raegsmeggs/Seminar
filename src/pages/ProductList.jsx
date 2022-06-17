import styled from "styled-components"
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from "../responsive"

const Container = styled.div`
    
`;

const Title = styled.h1`
    margin: 20px;
    font-weight: 100;
    font-size: 55px;
    font-family: 'Oswald';

    ${mobile({margin: "10px", fontSize:"40px"})};
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 10px;

    ${mobile({width: "0px 20px", display:'flex', flexDirection: "column"})};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600px;
    font-family: 'Oswald';
`;

const Select = styled.select`
    padding: 10px;
    margin: 20px;

    
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement />
        <Title>Home Decor</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products </FilterText>
                <Select>
                    <Option disabled selected>
                        Color 
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option> 
                    <Option>Red</Option>
                    <Option>Blue</Option> 
                    <Option>Yellow</Option> 
                    <Option>Green</Option> 
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option> 
                    <Option>M</Option>
                    <Option>L</Option> 
                    <Option>XL</Option> 
                    <Option>Non-Clothing</Option> 
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option selected>
                        Highest Rated
                    </Option>
                    <Option>High to Low</Option>
                    <Option>Low to High</Option> 
                    <Option>Recommended</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList