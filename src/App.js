import React, { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Main from './components/Main'

const charactersData = 
[
  { id: uuidv4(), name: 'Banjo & Kazooie' },
  { id: uuidv4(), name: 'Bowser' },
  { id: uuidv4(), name: 'Captain Falcon' },
  { id: uuidv4(), name: 'Cloud' },
  { id: uuidv4(), name: 'Falco' },
  { id: uuidv4(), name: 'Ganondorf' },
  { id: uuidv4(), name: 'Incineroar' },
  { id: uuidv4(), name: 'Inklings' },
  { id: uuidv4(), name: 'Joker' },
  { id: uuidv4(), name: 'Link' },
  { id: uuidv4(), name: 'Lucina' },
  { id: uuidv4(), name: 'Luigi' },
  { id: uuidv4(), name: 'Mario' },
  { id: uuidv4(), name: 'Mr. Game and Watch' },
  { id: uuidv4(), name: 'Pac Man' },
  { id: uuidv4(), name: 'Pikachu' },
  { id: uuidv4(), name: 'Piranha Plant' },
  { id: uuidv4(), name: 'Ridley' },
  { id: uuidv4(), name: 'Roy' },
  { id: uuidv4(), name: 'Sephiroth' },
  { id: uuidv4(), name: 'Shulk' },
  { id: uuidv4(), name: 'Simon Belmont' },
  { id: uuidv4(), name: 'Terry' },
  { id: uuidv4(), name: 'Toon Link' },
  { id: uuidv4(), name: 'Wolf' },
  { id: uuidv4(), name: 'Yoshi' },
  { id: uuidv4(), name: 'Young Link' },
]

function App() 
{
  const [data, setData] = useState(charactersData);
  
  const handleArray = (a) => 
  {
    let newArray = [];
    let i = 0;
    
    data.forEach(object => 
    {
      object.active = false;
      object.hit = false;
    });

    while (i < a)
    {
      let num = Math.floor(Math.random() * data.length);

      if (data[num].active === false)
      {
        data[num].active = true;
        newArray[i] = data[num];
        i++;
      }
    }
    // console.log(newArray);

    return newArray;
  };

  const [characters, setCharacters] = useState(handleArray(5));
  // const [count, setCount] = useState(0);

  // const counterScore = 
  // [
  //   {
  //     id: uuidv4(),
  //     current: 0,
  //     best: 0,
  //   },
  // ]
  
  // const [count, setCount] = useState(counterScore);

  // const handleLevelUp = (levelUp) =>
  // {
  //   if (levelUp)
  //     setCount(count + 1);
  //   else
  //     setCount(0);
  // } 


  return (
    <div className="App">
      <div className='mainAppContent'>
        <Header />
        <Main characters={characters} handleArray={handleArray} />
      </div>
    </div>
  );
}

export default App;
