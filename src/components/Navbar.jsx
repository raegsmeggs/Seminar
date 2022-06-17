import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60px;
  background-color: white;
  ${mobile({height: "50px"})};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({padding: "20px 0px"})};
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: lightgray;
  font-size: 16px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: black;
  ${mobile({display: "none"})};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;

  ${mobile({marginLeft: "10px"})};
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  font-size: 25px;
`;

const Logo = styled.span`

  ${mobile({fontSize: "20px", marginLeft: "10px"})};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({flex: '2', justifyContent: "center"})};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({fontSize: "10px", marginLeft: "15px"})};
`;

const Navbar = () => {
  return(
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{fontSize:'16px'}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>SEMINAR</Logo></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
export default Navbar;
