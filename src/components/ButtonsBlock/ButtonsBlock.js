import React, {Component} from 'react';
import Button from '../Button/Button';
import styled from 'styled-components'

const ButtonsList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
           
    @media(max-width: 900px) {
         flex-direction: column;
         button {
         width: 200px;
         height: 50px;
    }
}
`

export default class ButtonsBlock extends Component {
    render() {
        const {buttons, DecrementValue, value} = this.props
        const elements = buttons.map(item => {
            const {id, ...propsItem} = item
            return (
                <Button {...propsItem}
                        key={id}
                        disabled={id > value}
                        DecrementValue={() => DecrementValue(id)}
                />
            )
        })
        return (
            <ButtonsList>
                {elements}
            </ButtonsList>

        );
    }
}