import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white'};

    &:hover{
        background-color: gray;
        color: white;
    }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;

    &:hover{
        color: gray;
    }
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    height: 250px;
    object-fit: contain;
    margin: 10px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    text-align: center;
    font-size: 30px;
    font-weight: 200;
`;

const SummaryItem = styled.div`
    padding: 5px;
    margin: 20px 0px;
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.type === 'final' ? 'black' : 'gray'};
    font-size: ${(props) => props.type === 'final' ? '25px' : '16px'}
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    padding: 10px;
    width: 100%;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;

    &:hover{
        background-color: gray;
        color: white;
    }
`;

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src = '/img/Prod1.jpg'/>
                            <Details>
                                <ProductName><b>Product: </b>Ari Vase</ProductName>
                                <ProductID><b>ID: </b>94233958903</ProductID>
                                <ProductColor color='#b66a50'/>
                                <ProductSize><b>Size: </b>38"</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductPrice>$360</ProductPrice>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src = '/img/Prod2.jpg'/>
                            <Details>
                                <ProductName><b>Product: </b>Naranja Bowl</ProductName>
                                <ProductID><b>ID: </b>939485958903</ProductID>
                                <ProductColor color='orange'/>
                                <ProductSize><b>Size: </b>13"</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductPrice>$180</ProductPrice>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal:</SummaryItemText>
                        <SummaryItemPrice>$ 540</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping:</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Discount:</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='final'>
                        <SummaryItemText>Total:</SummaryItemText>
                        <SummaryItemPrice>$ 540</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Checkout Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Cart