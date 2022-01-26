import React from 'react';
import Square from './Square';
import './style.css';

const Board = (props) => {

    return (
        <>
            <div className='m-auto h-48 w-48 grid grid-cols-auto'>
                { 
                    props.game.map((value, index) => {
                        return ( 
                        <React.Fragment key={index}>
                            <Square 
                                id={'id-' + index}
                                squareIndex={index}
                                isXTurn={props.isXTurn}
                                turn={props.turn}
                                updateTable={props.updateTable}
                                game={props.game}
                                changePlayer={props.changePlayer}
                                value={value}
                                checkIfThereIsWinner={props.checkIfThereIsWinner}
                                disableSquare={props.disableSquare}
                            />
                        </React.Fragment>
                    )})
                }
            </div>
        </>
    )
}

export default Board;