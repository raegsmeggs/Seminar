import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
  height: 30px;
  background-color: #c4bca5;
  color: white;
  font-family: 'Oswald';
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

  ${mobile({fontSize: "12px"})};
`;

const Announcement = () => {
  return (
    <div>
      <Container>
        Save 20% off your entire purchase with code IMPRETTYDEEP
      </Container>
    </div>
  )
}
export default Announcement;
