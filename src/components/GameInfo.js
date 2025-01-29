function GameInfo({matchedCards, onReset}) {
    return ( 
        <div className="gameInfo">
            <div>Matched Pairs: {matchedCards.length / 2}</div>
            <button onClick={onReset}>Reset Game</button>
        </div>
     );
}

export default GameInfo;