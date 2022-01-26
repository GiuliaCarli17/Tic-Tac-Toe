import React from 'react';
import './style.css';

const Square = (props) => {
    
    const handleClick = (i) => {
        if(props.game[i] === null) {
            props.updateTable(i);
            props.changePlayer();
        }
    };

    return (
        <>
            <div id={props.disableSquare ? 'disabled-' + props.id : props.id}
            className={
                ( props.disableSquare && props.id === 'id-0' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-r-2 border-b-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-0' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-r-2 border-b-2 border-gray-300' :
                ( props.disableSquare && props.id === 'id-1' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-r-2 border-b-2 border-l-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-1' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-r-2 border-b-2 border-l-2 border-gray-300' : 
                ( props.disableSquare && props.id === 'id-2' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-l-2 border-b-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-2' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-l-2 border-b-2 border-gray-300' : 
                ( props.disableSquare && props.id === 'id-3' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-r-2 border-b-2 border-t-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-3' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-r-2 border-b-2 border-t-2 border-gray-300' :
                ( props.disableSquare && props.id === 'id-4' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-4' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-2 border-gray-300' :
                ( props.disableSquare && props.id === 'id-5' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-l-2 border-b-2 border-t-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-5' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-l-2 border-b-2 border-t-2 border-gray-300' :
                ( props.disableSquare && props.id === 'id-6' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-r-2 border-t-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-6' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-r-2 border-t-2 border-gray-300' :
                ( props.disableSquare && props.id === 'id-7' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-r-2 border-t-2 border-l-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-7' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-r-2 border-t-2 border-l-2 border-gray-300' :
                ( props.disableSquare && props.id === 'id-8' ) ?
                'pointer-events-none opacity-40 w-16 h-16 text-center leading-16 border-l-2 border-t-2 border-gray-300' :
                ( !props.disableSquare && props.id === 'id-8' ) ?
                'w-16 h-16 text-center leading-16 cursor-pointer border-l-2 border-t-2 border-gray-300' : ''
            }
            onClick={() => handleClick(props.squareIndex)}>
                <span className='text-5xl font-sans'>
                    { props.value }
                </span>
            </div>
        </>
    )
}

export default Square;