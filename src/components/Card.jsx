import '../styles/Card.css';

function Card(props) 
{
  return (
    <div className="cardContent" onClick={() => props.handleGame(props.character)}>
      <button>
        <img 
            className='cardImg' 
            src={require(`../images/${props.character.name}.png`)}
            alt={`${props.character.name} Card`}
        />
        <p>{props.character.name}</p>
      </button>
    </div>
  );
}

export default Card;
