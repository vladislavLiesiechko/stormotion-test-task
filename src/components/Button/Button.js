import React, {Component} from 'react';
import styled from 'styled-components'


const ButtonFrame = styled.button`
     color: ${props => props.disabled === true ? 'white' : props.buttonColor};
     font-size:${props => props.buttonFont || "1.1rem"};
     margin: 1em;
     padding: 0.25em 1em;
     border-width: 2px;
     border-style: solid;
     border-color: ${props => props.buttonColor};
     background: ${props => props.disabled === true ? props.buttonColor : 'none'};
     border-radius: 3px;
     cursor: pointer;
     text-align: center;
     transition: background 0.3s ease-in-out, color 0.4s ease-in-out, transform 0.4s ease-in-out; 
     :hover {
        background: ${props => props.buttonColor};
        cursor: ${props => props.disabled === true ? 'default' : 'pointer'};
        transform: ${props => props.disabled === true ? 'none' : 'scale(1.2)'};
        color: white;
     }
     
     @media (min-width: 900px) {
        border-width: 3px;
        border-style: solid;
        border-color: ${props => props.buttonColor};
        height: 6vw;
        width: 18.3vw;
        font-size: ${props => props.buttonFont || "2vw"};
  }
`


export default class Button extends Component {
    render() {
        const {label, color, disabled, DecrementValue} = this.props
        return (
            <ButtonFrame
                type='button'
                onClick={DecrementValue}
                disabled={disabled}
                buttonColor={color}>
                {label}
            </ButtonFrame>
        )
    }
}



