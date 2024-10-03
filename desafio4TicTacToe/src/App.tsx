import { useEffect, useState, useCallback } from 'react';
import './App.css';

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState<{ indexes: number[], orientation: string } | null>(null);

  const handleClick = (clickIndex: number) => {
    console.log(`Clicou no ${clickIndex}`);
    if (gameData[clickIndex] !== 0 || winningCombo) {
      return;
    }
    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickIndex] = turn;
      return newGameData;
    });
    setTurn((prev) => (prev === 1 ? 2 : 1));
  };

  const winPossibility = [
    /* horizontal */
    { indexes: [0, 1, 2], orientation: 'horizontal' },
    { indexes: [3, 4, 5], orientation: 'horizontal' },
    { indexes: [6, 7, 8], orientation: 'horizontal' },

    /* vertical */
    { indexes: [0, 3, 6], orientation: 'vertical' },
    { indexes: [1, 4, 7], orientation: 'vertical' },
    { indexes: [2, 5, 8], orientation: 'vertical' },

    /* diagonal */
    { indexes: [0, 4, 8], orientation: 'diagonal1' },
    { indexes: [2, 4, 6], orientation: 'diagonal2' },
  ];

  const checkGameEnded = () => {
    if (gameData.every((item) => item !== 0)) {
      alert("Fim de jogo, empatou!");
    }
  }
  const checkWinner = useCallback(() => {
    console.log('checkWinner');
    let winner = null;
    for (const combination of winPossibility) {
      const { indexes } = combination;
      if (
        gameData[indexes[0]] === 1 &&
        gameData[indexes[1]] === 1 &&
        gameData[indexes[2]] === 1
      ) {
        winner = 'player1';
      }
      if (
        gameData[indexes[0]] === 2 &&
        gameData[indexes[1]] === 2 &&
        gameData[indexes[2]] === 2
      ) {
        winner = 'player2';
      }
      if (winner) {
        setWinningCombo(combination);
        break;
      }
    }
    console.log({ winner });
  }, [gameData, winPossibility]);

  useEffect(() => {
    checkWinner();
    checkGameEnded();
  }, [gameData, checkWinner, checkGameEnded]);

  // Esse useEffect vai logar a sequência vencedora quando o estado winningCombo for atualizado
  useEffect(() => {
    if (winningCombo) {
      console.log("Sequência vencedora:", winningCombo);
      alert('Temos um vencedor!');
    }
  }, [winningCombo]);

  return (
    <>
      <div className="board-game">
        {gameData.map((value, index: number) => (
          <span onClick={() => handleClick(index)} key={index}
            className={winningCombo?.indexes.includes(index) ? winningCombo.orientation : undefined}
          >
            <abbr title="">{index}</abbr>
            {value === 1 && '❌'}
            {value === 2 && '⭕'}
          </span>
        ))}
      </div>
    </>
  );
}

export default App;
