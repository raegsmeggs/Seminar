import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;

    ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const DescContainer = styled.div`
    margin: 10px 0px 10px 0px;
`;

const Desc = styled.p`
    font-size: 12px;
    width: 50%;
    font-family: 'Oswald';

    ${mobile({width: "90%"})};
`;

const SocialContainer = styled.div`
    display: flex; 
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    cursor: pointer;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({display: "none"})};
`;

const Title = styled.h3`
    margin: 10px 0px 10px 0px;
    font-size: 20px;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-size: 14px;
    font-family: 'Oswald';
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    align-items: center;

    ${mobile({backgroundColor: "#fff8f8"})};
`;

const Contact = styled.div`
    margin: 10px 0px 10px 0px;
    font-size: 20px;
    
`;

const ContactItem = styled.div`
    font-size: 14px;
    font-family: 'Oswald';
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SEMINAR</Logo>
            <DescContainer>
                <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium porro officia 
                    odio placeat maiores totam cumque, saepe, repellat esse tenetur alias error pariatur perferendis 
                    delectus? Accusamus atque rerum numquam.
                </Desc>
            </DescContainer>
            <SocialContainer>
                <SocialIcon color="#3b5999">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="#e4405F">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="#55acee">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="#e60023">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Careers</ListItem>
                <ListItem>Mens Clothing</ListItem>
                <ListItem>Womens Clothing</ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Contact Us</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Track My Order</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Contact>Contact</Contact>
            <ContactItem><Room style={{marginRight: "10px"}}/> 626 Pearl St. New York, New York 78364</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/>+1(234)567-8901</ContactItem>
            <ContactItem><Mail style={{marginRight: "10px"}}/>info@seminarcollective.org</ContactItem>
        </Right>
    </Container>
  )
}

export default Footer