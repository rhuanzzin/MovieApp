import React from 'react';
import styled from 'styled-components'

import Camera from '../../img/camera.jpg'
import film from '../../img/film.jpg'

function home() {
  return (
    <>
      <Container>
        <Div>
          <H1>MAKE YOUR ROOM A CINEMA</H1>
          <H2>JOIN FOCUS, ALL THE BEST CULT MOVIES<br/> ARE HERE</H2>
          <A><H3>JOIN</H3><H4>NOW</H4></A>
        </Div>
      </Container>
    </>
  );
}

const Container = styled.section`
    text-align:center;
    color: rgba(255, 185, 0);
    height:1000px;
    width:100%;
    background-image: url(${Camera});
    background-size:100%;
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
  `

const H2 = styled.h1`
    font-size:20pt;

  `

const A = styled.a`
align-self:center;
width:300px;
cursor:pointer;  
text-shadow: 0px 10px 0px rgba(255, 60, 0);
transition: 0.5s;

  &:hover{
  transition:0.2s;
  text-shadow: 0px 15px 0px rgba(255, 60, 0);

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