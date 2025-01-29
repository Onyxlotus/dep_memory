function Card ({index, card, onClick}) {
    return ( 
        <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={()=>onClick(index)}>
            <div className="cardInner">
                <div className="cardFront">
                    <img src={card.image} alt="" />
                </div>
                <div className="cardBack" />
            </div>
        </div>
     );
}

export default Card ;