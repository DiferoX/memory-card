import '../styles/Main.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';

function Main(props) 
{
  const [characters, setCharacters] = useState(props.characters);
  const [counter, setCounter] = useState(0);

  const sortCards = () =>
  {
    let newArray = [];
    let i = 0;
    
    characters.forEach(object => object.active = false )

    while (i < characters.length)
    {
      let num = Math.floor(Math.random() * characters.length);

      if (characters[num].active === false)
      {
        characters[num].active = true;
        newArray[i] = characters[num];
        i++;
      }
    }
    setCharacters(newArray);
  }

  const hideCards = () =>
  {
    let cards = document.querySelectorAll('.cardContent');
    cards.forEach(card => card.classList.add('hide'));

    setTimeout(displayCards, 1000);
  }

  const displayCards = () =>
  {
    let cards = document.querySelectorAll('.cardContent');
    cards.forEach(card => card.classList.remove('hide'));
  }

  const validateGame = () => 
  {
    let levelUp = true;
    characters.forEach(character => 
    {
      if (!character.hit)
        levelUp = false;
    });
    if (levelUp)
    {
      console.log("Level Up");
      setCharacters(props.handleArray(characters.length + 5));
    }
  }

  const handleGame = (character) =>
  {
    if (character.hit === true)
    {
      console.log("Game Over");
      setCharacters(props.handleArray(5));
      setCounter(0);
    }
    else
    {
      character.hit = true;
      setCounter(counter + 1);
      sortCards();
    }
    props.objectData.currentScore = counter;
    console.log(counter);
    validateGame();
  }

  return (
    <div className="mainContent">
      <div className='cardMainContent'>
        {
          characters.map((character) => 
            <Card 
              key={character.id}
              character={character}
              handleGame={handleGame}
            />
          )
        }
      </div>
    </div>
  );
}

export default Main;
