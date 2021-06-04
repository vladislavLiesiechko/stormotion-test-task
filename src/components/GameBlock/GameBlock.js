import React, {Component} from 'react';
import styled from 'styled-components';
import Emoji from "../Emoji/Emoji";

const Block = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    justify-content: safe center;
    align-items: center;
    text-align: center;
    h1{
     font-size: 3.5vw;
    }
    h2{
     font-size: 3.2vw;
    }
     @media (max-width: 900px) {
        h1 {
            font-size: 35px;
        }
        h2 {
            font-size: 30px;
        }
`
export default class GameBlock extends Component {

    render() {
        const {value, playerValue, robotValue, emoji, playerEmoji, robotEmoji, labelWinner,emojiWinner} = this.props;
        return (
            <Block>
                <h1> {labelWinner} <Emoji symbol={emojiWinner}/></h1>
                <h1>
                    <Emoji symbol={emoji}/> takes the match <Emoji symbol="🕯"/>
                </h1>
                <h1>{value} left</h1>
                <h1>
                    <Emoji symbol={playerEmoji}/> has {playerValue} <Emoji symbol={robotEmoji}/> has {robotValue}
                </h1>
            </Block>
        )

    }
}
