import React from 'react'
//import styles from "../styles/Box.module.css"
import styled from 'styled-components';

const Box = (props) => {

    //se crea un componente con styled components , este componente box llama a box si queremos añadir props estaticos o dinamicos https://styled-components.com/docs/basics#attaching-additional-props
    const Square = styled.div`
        background-color : ${props.colorcito};
        width: ${props.tam || "200px" };
        height: ${props.tam || "200px" };
    
    `
    
  return (
    <Square/>
  )
}

export default Box