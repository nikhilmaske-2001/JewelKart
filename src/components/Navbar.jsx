import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px; /* top-bottom left-right*/
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex:1;
`;

const Center = styled.div`
  flex:1;
`;

const Right = styled.div`
  flex:1;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar