import React, { useEffect, useState } from 'react';
import Board from './Board';
import Popup from 'reactjs-popup';
import './style.css';

const Game = () => {
    
    const [game, setGame] = useState([null, null, null,
                                    null, null, null,
                                    null, null, null]);
    const [isXTurn, setIsXTurn] = useState(null);
    const [turn, setTurn] = useState(null);
    const [winner, setWinner] = useState(null);
    const [tie, setTie] = useState(false);

    const choosePlayer = (player) => {
        if(player === 'X' && isXTurn === null) {
            setIsXTurn(true);
            setTurn('X');
        } else if (player === 'O' && isXTurn === null) {
            setIsXTurn(false);
            setTurn('O');
        }
    }

    const updateTable = (i) => {
        const arrTable = [...game];
        arrTable[i] = turn;
        setGame(arrTable);
    }

    const changePlayer = () => {
        if(turn !== null && turn === 'X') {
            setTurn('O');
            setIsXTurn(false);
            checkIfThereIsWinner();
        } else if (turn !== null && turn === 'O') {
            setTurn('X');
            setIsXTurn(true);
            checkIfThereIsWinner();
        }
    }

    useEffect(()=> {
		checkIfThereIsWinner();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[game]);

    const checkIfThereIsWinner = () => {
        if(!winner && game[0] === 'X' && game[1] === 'X' && game[2] === 'X') {
            setWinner('X');
        } else if(!winner && game[0] === 'O' && game[1] === 'O' && game[2] === 'O') {
            setWinner('O');
        } else if(!winner && game[3] === 'X' && game[4] === 'X' && game[5] === 'X') {
            setWinner('X');
        } else if(!winner && game[3] === 'O' && game[4] === 'O' && game[5] === 'O') {
            setWinner('O');
        } else if(!winner && game[6] === 'X' && game[7] === 'X' && game[8] === 'X') {
            setWinner('X');
        } else if(!winner && game[6] === 'O' && game[7] === 'O' && game[8] === 'O') {
            setWinner('O');
        } else if(!winner && game[0] === 'X' && game[3] === 'X' && game[6] === 'X') {
            setWinner('X');
        } else if(!winner && game[0] === 'O' && game[3] === 'O' && game[6] === 'O') {
            setWinner('O');
        } else if(!winner && game[1] === 'X' && game[4] === 'X' && game[7] === 'X') {
            setWinner('X');
        } else if(!winner && game[1] === 'O' && game[4] === 'O' && game[7] === 'O') {
            setWinner('O');
        } else if(!winner && game[2] === 'X' && game[5] === 'X' && game[8] === 'X') {
            setWinner('X');
        } else if(!winner && game[2] === 'O' && game[5] === 'O' && game[8] === 'O') {
            setWinner('O');
        } else if(!winner && game[0] === 'X' && game[4] === 'X' && game[8] === 'X') {
            setWinner('X');
        } else if(!winner && game[0] === 'O' && game[4] === 'O' && game[8] === 'O') {
            setWinner('O');
        } else if(!winner && game[2] === 'X' && game[4] === 'X' && game[6] === 'X') {
            setWinner('X');
        } else if(!winner && game[2] === 'O' && game[4] === 'O' && game[6] === 'O') {
            setWinner('O');
        } else if (isFinishedGame()) {            
            setTie(true);
        }
    }

    const resetGame = () => {
        setGame([null, null, null,
            null, null, null,
            null, null, null]);
        setIsXTurn(null);
        setTurn(null);
        setWinner(null);
        setTie(false);
    }

    const isFinishedGame = () => {
        let i = 0;
        for(i = 0; i <= 9; i++) {
            if(game[i] === null) {
                return false;
            }
        }
        return true;
    };


    return (
        <>
            <Popup className='my-popup' closeOnDocumentClick={false} open={isXTurn === null ? true : false}>
                <div className='text-sm mt-7 mb-2'>Choose a Player:</div>
                <div className='game-body mb-4 h-10 leading-10'>
                    <div className='player w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl cursor-pointer bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 hover:backdrop-blur hover:shadow-custom' onClick={() => choosePlayer('X')}>
                        <span className='text-white'>X</span>
                    </div>
                    <div className='player w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl cursor-pointer bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 hover:backdrop-blur hover:shadow-custom' onClick={() => choosePlayer('O')}>
                        <span className='text-white'>O</span>
                    </div>
                </div>
            </Popup>
            <div className='h-[45vh] flex-col items-center flex justify-center'>
                { turn && 
                    <div className='game-body mb-6 h-10 leading-10'>
                        <div className={
                            (winner !== null || isFinishedGame()) ? 'player-disabled w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl transition-all duration-300 bg-gradient-to-r from-fucsialight to-orangedark pointer-events-none opacity-40' :
                            turn === 'X' ? 'w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 backdrop-blur shadow-custom' :
                            'player w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl cursor-pointer bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 hover:backdrop-blur hover:shadow-custom'
                        } onClick={() => choosePlayer('X')}>
                            <span className='text-white'>X</span>
                        </div>
                        <div className={
                            (winner !== null || isFinishedGame()) ? 'player-disabled w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl transition-all duration-300 bg-gradient-to-r from-fucsialight to-orangedark pointer-events-none opacity-40' :
                            turn === 'O' ? 'w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 backdrop-blur shadow-custom' :
                            'player w-12 h-6 leading-6 inline-block mx-2 border-none rounded-2xl cursor-pointer bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 hover:backdrop-blur hover:shadow-custom'
                        } onClick={() => choosePlayer('O')}>
                            <span className='text-white'>O</span>
                        </div>
                    </div>
                }
                <Board 
                    game={game}
                    isXTurn={isXTurn}
                    turn={turn}
                    updateTable={updateTable}
                    changePlayer={changePlayer}
                    checkIfThereIsWinner={checkIfThereIsWinner}
                    disableSquare={winner !== null ? true : winner === null && isFinishedGame() ? true : false}
                />
                <Popup className='my-popup'  closeOnDocumentClick={false} open={winner ? true : tie ? true : false}>                        
                    <div className={winner ? 'mb-4' : 'hidden'}>
                        <div><span>The winner is:</span></div>
                        <div><span className='font-bold text-2xl text-gray-500 font-sans'>{winner}</span></div>
                    </div>
                    <div className={tie ? 'mb-4' : 'hidden'}>
                        <span>There are no winners.</span>
                    </div>
                    <div className='mx-auto'>
                        <div className={winner || tie ? 'w-16 h-6 leading-6 border-none rounded-2xl cursor-pointer bg-gradient-to-r from-fucsialight to-orangedark transition-all duration-300 text-white items-center hover:backdrop-blur hover:shadow-custom' : 'hidden'} onClick={() => resetGame()}>Restart</div>
                    </div>
                </Popup>
            </div>
        </>
    )
}

export default Game;