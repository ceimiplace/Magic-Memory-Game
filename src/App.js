import { useState } from "react";
import "./App.css";
const cards = [
  {
    src: "/img/helmet-1.png",
  },
  {
    src: "/img/potion-1.png",
  },
  {
    src: "/img/ring-1.png",
  },
  {
    src: "/img/scroll-1.png",
  },
  {
    src: "/img/shield-1.png",
  },
  {
    src: "./img/sword-1.png",
  },
];
function App() {
  const [cardsToDisplay, setCardsToDisplay] = useState([]);
  const [turn, setTurns] = useState();
  function startGame() {
    let suffledCards = [...cards, ...cards]
      .sort(() => Math.random() - 0.5)
      .map((elem) => ({ id: Math.random(), ...elem }));
    setCardsToDisplay(suffledCards);

    setTurns(0);
  }
  console.log(cardsToDisplay, turn);
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={() => startGame()}>New Game</button>
      <div className="card-grid">
        {cardsToDisplay.map((elem) => {
          return (
            <div id={elem.id}>
              <img src={elem.src} alt="card-image" />
              <img src="/img/cover.png" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
