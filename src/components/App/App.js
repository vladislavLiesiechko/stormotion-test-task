import React, {Component} from 'react'
import ButtonsBlock from "../ButtonsBlock/ButtonsBlock";
import GameBlock from "../GameBlock/GameBlock";
import Emoji from "../Emoji/Emoji";
import styled from 'styled-components';

const AppBlock = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: safe center;
    align-items: center;
    text-align: center;
`

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 25,
            robotValue: 0,
            playerValue: 0,
            turn: "👦",

            labelWinner: '',
            emojiWinner: ''


        }
        this.emoji = {
            robotEmoji: "🤖",
            personEmoji: "👦"
        }
        this.buttons = [
            {id: 1, color: "#64b433", label: "1 match", disabled: false},
            {id: 2, color: "#5094cb", label: "2 matches", disabled: false},
            {id: 3, color: "#FF5959", label: "3 matches", disabled: false}
        ]

        this.DecrementValue = this.DecrementValue.bind(this);
    }

    DecrementValue(id) {
        this.setState(({value, playerValue}) => {
            value = this.state.value;
            playerValue = this.state.playerValue
            if (value <= 0) return

            return {
                turn: this.emoji.robotEmoji,
                value: value - id,
                playerValue: playerValue + id,
            }

        });
        this.endGame()
        this.robotTurn(id);

    }

    robotTurn(id) {
        const robotState = Math.floor(Math.random() * 10) % 2 === 0;

        setTimeout(() => {

            (this.setState(({value, robotValue, matches}) => {
                value = this.state.value;

                if (value <= 3) {
                    matches = 1;
                } else if ((value - id) % 4 === 1 || (value - id) % 4 === 0) {
                    matches = id;
                } else if (robotState === true) {
                    matches = 3;
                } else if (robotState === false) {
                    matches = 1;

                }

                value = this.state.value;
                robotValue = this.state.robotValue;


                if (value <= 0) return
                return {
                    turn: this.emoji.personEmoji,
                    value: value - matches,
                    robotValue: robotValue + matches
                }
            }))


            this.endGame()


        }, 1000);


    }


    endGame() {
        if (this.state.value === 0) {
            this.setState(({label, emoji}) => {
                label = 'Congratulations';
                emoji = this.state.playerValue % 2 === 0 ? this.emoji.personEmoji : this.emoji.robotEmoji;
                return {
                    labelWinner: label,
                    emojiWinner: emoji
                }
            })
        }
    }

    render() {
        const {value, playerValue, robotValue, turn, labelWinner, emojiWinner} = this.state;
        const {personEmoji, robotEmoji} = this.emoji;

        return (
            <AppBlock>
                <GameBlock
                    value={value}
                    playerValue={playerValue}
                    robotValue={robotValue}
                    emoji={<Emoji symbol={turn}/>}
                    playerEmoji={personEmoji}
                    robotEmoji={robotEmoji}
                    labelWinner={labelWinner}
                    emojiWinner={emojiWinner}
                />

                <ButtonsBlock buttons={this.buttons}
                              value={value}
                              DecrementValue={this.DecrementValue}
                              disabled={value}
                />


            </AppBlock>
        )
    }

}


