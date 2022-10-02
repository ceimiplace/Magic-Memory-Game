import { useState } from "react";
import "./App.css";
const cards = [
  {
    src: "/image/helmet-1.png",
  },
  {
    src: "/image/potion-1.png",
  },
  {
    src: "/image/ring-1.png",
  },
  {
    src: "/image/scroll-1.png",
  },
  {
    src: "/image/shield-1.png",
  },
  {
    src: "/image/sword-1.png",
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
    </div>
  );
}

export default App;
