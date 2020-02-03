import React from 'react';
import styled from 'styled-components'

import Placa from './../../img/placa.png'

function Prices() {

    return (
      <>
      <Container>
        <Sign>
            <img src={Placa} height="250px" alt="prices-sign"/>           
        <H1>PRICES</H1>
        </Sign>
        
      </Container>
      </>
    )
};

const Container = styled.section`
    display:flex;
    justify-content:top;
    flex-direction:column;
    text-align: center;
    height:700px;
    width:80%;
    margin-top:60px;
    `
const H1 = styled.h1`
color: white;
    `
const Sign = styled.div`
`

export default Prices;