import React from 'react';
import styled from 'styled-components'
import ScrollIntoView from 'react-scroll-into-view'

import Rolldown from './Animations/Rolldown'
import BlurIn from './Animations/BlurIn'

import Camera from '../../img/camera.jpg'
import film from '../../img/film.jpg'

import Prices from './Prices'


function home() {

  return (
    <>
      <Container>
        <Div>
          <H1>MAKE YOUR ROOM A CINEMA</H1>
          <H2>JOIN FOCUS, ALL THE BEST CULT MOVIES<br/> ARE HERE</H2>
         
          <A><H3>JOIN</H3><H4>NOW</H4></A>
          
          <A>
            <ScrollIntoView selector="#prices">
            <Button>Know More</Button>  
            </ScrollIntoView>
          </A>
          
        </Div>
      </Container>
      
      <RedContainer id="prices">
        <Prices/>
      </RedContainer>
    </>
  );
}

const RedContainer = styled.section`
  background: rgba(240, 40, 30);
  height:700px;
  width:100%;
  display:flex;
  justify-content:center;
  box-shadow: inset 0px 0px 15px 10px rgba( 0,0,0)
`
const Button = styled.button`
    background:none;
    margin-top:50px;  
    font-family:'ultra', serif;
    font-size: 24pt;
    align-self:center;
    width:300px;
    cursor:pointer;  
    color: rgba(255, 185, 0);
    text-shadow: 0px 4px 0px rgba(255, 60, 0);
    transition: 0.5s;

    &:hover{
      transition:0.2s;
      text-shadow: 0px 6px 0px rgba(255, 60, 0);
    }
`
   
const Container = styled.section`
    text-align:center;
    color: rgba(255, 185, 0);
    height:650px;
    width:100%;
    background-image: url(${Camera});
    background-attachment:fixed;
    background-repeat: no-repeat;
`

const Div = styled.div`
  display: flex;
  flex-direction:column;
  cursor:default;
  font-family: 'ultra', serif;
`

const H1 = styled.h1`
  margin:80px 0px 0px 0px;
  font-size:40pt;
  animation: 1s ${ Rolldown } ease-in-out;
`

const H2 = styled.h1`
    font-size:20pt;
    animation: 1s ${ Rolldown } ease-in-out;
`

const A = styled.a`
align-self:center;
width:300px;
cursor:pointer;  
text-shadow: 0px 10px 0px rgba(255, 60, 0);
transition: 0.5s;

  &:hover{
  transition:0.2s;
  text-shadow: 0px 13px 0px rgba(255, 60, 0);

  }
`

const H3 = styled.h1`
  font-size:80pt;
`
const H4 = styled.h1`
  font-size:80pt;
  line-height: 60px;

`

export default home;