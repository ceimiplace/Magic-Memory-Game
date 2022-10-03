import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent";
const cards = [
  {
    src: "/img/helmet-1.png",
    match: false,
  },
  {
    src: "/img/potion-1.png",
    match: false,
  },
  {
    src: "/img/ring-1.png",
    match: false,
  },
  {
    src: "/img/scroll-1.png",
    match: false,
  },
  {
    src: "/img/shield-1.png",
    match: false,
  },
  {
    src: "./img/sword-1.png",
    match: false,
  },
];
function App() {
  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [turn, setTurns] = useState();
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  useEffect(() => {
    if (choiseOne && choiseTwo) {
      if (choiseOne.src === choiseTwo.src) {
        console.log("same");
      } else {
        console.log("not the same");
      }
      resetChoises();
    }
  }, [choiseOne, choiseTwo]);
  function resetChoises() {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns((prev) => prev + 1);
  }
  function startGame() {
    let suffledCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((elem) => ({ id: Math.random(), ...elem }));
    setCardsToDisplay(suffledCards);

    setTurns(0);
  }

  function handleChoise(card) {
    choiseOne ? setChoiseTwo(card) : setChoiseOne(card);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={() => startGame()}>New Game</button>
      <div className="card-grid">
        {cardsToDisplay.map((elem) => {
          return (
            <CardComponent
              card={elem}
              key={elem.id}
              src={elem.src}
              handleClick={handleChoise}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
