import React from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction == "left" && "10px"};
    right: ${props => props.direction == "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(0vh);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-style: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

    };

  return (
      <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
          <ArrowLeftOutlinedIcon/>
          </Arrow>
          <Wrapper>
              <Slide bg="f5fafd">
                <ImgContainer>
                <Image src="https://i.ibb.co/YXTDnSS/pic3.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Summer Sale</Title>
                    <Desc>Dont compromise on style! Get flat 40% off</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="fcf1ed">
                <ImgContainer>
                <Image src="https://i.ibb.co/YXTDnSS/pic3.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Winter Sale</Title>
                    <Desc>Dont compromise on style! Get flat 40% off</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            <Slide bg="fbf0f4">
                <ImgContainer>
                <Image src="https://i.ibb.co/YXTDnSS/pic3.jpg"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Rainy Sale</Title>
                    <Desc>Dont compromise on style! Get flat 40% off</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
          </Wrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}>
          <ArrowRightOutlinedIcon/>
          </Arrow>
      </Container>
  )
}

export default Slider