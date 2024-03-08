import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  background: rgb(93, 4, 138);
  background: linear-gradient(
    90deg,
    rgba(93, 4, 138, 1) 0%,
    rgba(108, 9, 121, 1) 61%,
    rgba(179, 0, 255, 1) 100%
  );
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const Title = styled.div`
  margin: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: sans-serif;
  &:hover {
      color: yellow
  }
`;

const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
  color: black;
`;

const CartIcon = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartCount = styled.div`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  
  visibility: ${(props) => (props.show ? "visible" : "hidden")}
  
 
`;

class Navbar extends Component {
  render() {
    return (
      
        <Nav>
          <Title>Movie-App</Title>
          <CartContainer>
            <CartIcon
              alt="cart icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <CartCount color="yellow" show={true}>
              0
            </CartCount>
          </CartContainer>
        </Nav>
      
    );
  }
}

export default Navbar;
