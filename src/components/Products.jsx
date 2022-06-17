import styled from "styled-components"
import { streetproducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
`;

const Products = () => {
  return (
    <Container>
        {streetproducts.map(item=>(
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default Products