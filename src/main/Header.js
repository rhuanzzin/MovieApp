import React from 'react';
import styled from 'styled-components'

function header() {
  return (
      <Header>
          <nav>
              <Ul>
                  <Li>
                      <A href='/'> Home </A>
                  </Li>
                  <Li>
                  <A href='/'> About </A>
                  <A href='/'> Login </A>
                  </Li>
              </Ul>
          </nav>
      </Header>
  );
}

const Header = styled.header`
 background: rgba(0, 0, 0, 0.6);
 width:100%;
 height:60px;
 position: fixed;
 box-shadow: 0px 5px 8px 4px rgba(0, 0, 0, 0.2);

    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
`
const A = styled.a`
    color: whitesmoke;
    padding: 0 10px 0 10px;
    margin: 0 10px 0 10px;
    transition: 0.3s;

    &:hover{
    transition: 0.3s;
    font-size:19pt;
}
`
const Ul = styled.ul`

    display:flex;
    justify-content: space-between;
    width:100%;
    padding:15px;
`
const Li = styled.li`

display:flex;
padding: 0px 10px;
font-size: 18pt;
font-weight: 600;
font-family: 'Montserrat', sans-serif;
`

export default header;
