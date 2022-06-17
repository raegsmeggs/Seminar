import styled from 'styled-components'
import {useState} from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { sliderItems } from '../data'
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({display: "none"})};
`;

const Arrow = styled.div`
  height: 25px;
  width: 25px;
  background-color: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props=> props.direction === 'left' && '10px'};
  right: ${props=> props.direction === 'right' && '10px'};
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props=>props.slideIndex * -100}vw)

`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props=>props.bg}
  margin: 20px;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex:1;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex:1;
  position: absolute;
  top: 20%;
  left: 10%;
  width: 600px;
  color: white;
  align-items: center;
  justify-content: flex-left;
`;

const Title = styled.h1`
  font-size: 60px;
  letter-spacing: 6px;
  font-weight: 900;
`;

const Desc = styled.p`
  font-size: 40px
  font-family: "Oswald";
  margin: 45px 0px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  color: white;
  border-color: transparent;
  border-radius: 10%;
`;


const Slider = () => {

  let [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction==="left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
    } else {
     setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0);
    }
    
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined style={{color:'white'}}/>
      </Arrow>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined style={{color:'white'}}/>
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {sliderItems.map((item) => (
        <Slide bg={item.bg}>
          <ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop the Collection</Button>
            </InfoContainer>
            <Image src={item.img}/>
          </ImgContainer>
        </Slide>
        ))}
      </Wrapper>
     
    </Container>
  )
}

export default Slider;
