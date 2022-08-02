const GameDetail = ({ game }) => {

    return (
      <div className="game-details">
        <h4>{game.title}</h4>
        <p><strong>Category: </strong>{game.category}</p>
        <p><strong>Mode: </strong>{game.mode}</p>
        <p>{game.createdAt}</p>
      </div>
    )
  }
  
  export default GameDetail