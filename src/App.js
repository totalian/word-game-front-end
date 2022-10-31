import { useEffect, useState } from "react";
import GameFrame from "./components/GameFrame";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import MoveListSection from "./components/MoveListSection";
import { checkWord } from "./scoringFunctions/checkWord.js"
import { playMove } from "./scoringFunctions/playMove.js"

function App() {
  const [startWord, setStartWord] = useState("grape")
  const [targetWord, setTargetWord] = useState("suit")
  const [currentScore, setCurrentScore] = useState(0)
  const [playerBestScore, setPlayerBestScore] = useState(0)
  const [globalBestScore, setGlobalBestScore] = useState(200)
  const [playedMoves, setPlayedMoves] = useState([])
  const [checkingWord, setCheckingWord] = useState(false)
  const [currentWord, setCurrentWord] = useState(startWord)
  const [gameOver, setGameOver] = useState(false)

  const calculateCurrentScore = () => {
    if(playedMoves.length > 0){
      return playedMoves.reduce((pre, cur) => pre + cur.cost, 0)
    } else return 0
  }

  const playWord = async inputWord => {
    setCheckingWord(true)
    if (await checkWord(inputWord)) {
      setCheckingWord(false)
      if (playMove(inputWord, currentWord)) {
        const bestMove = playMove(inputWord, currentWord)
        setPlayedMoves([...playedMoves, { word: inputWord, name: bestMove.name, color: bestMove.color, cost: bestMove.moveCost }])
        setCurrentWord(inputWord)
      } else {
        return alert("invalid move")
      }
    } else {
      setCheckingWord(false)
      return alert("invalid word")
    }
  }

  useEffect(() => {
    setCurrentScore(calculateCurrentScore())
  }, [playedMoves])

  const restart = () => {
    setGameOver(false)
    setPlayedMoves([])
  }

  const endGame = () => {
    if(currentScore < playerBestScore || playerBestScore == 0){
      setPlayerBestScore(currentScore)
    }
    setGameOver(true)
  }

  useEffect(() => {
    if(currentWord == targetWord){
      return endGame()
    }
  },[currentWord,targetWord])


  return (
    <div className="App h-screen">
      <Header />
      {gameOver && <GameOver currentScore={currentScore} restart={restart} />}
      <div className="flex h-full">
        <GameFrame
          targetWord={targetWord}
          startWord={startWord}
          currentScore={currentScore}
          playerBestScore={playerBestScore}
          globalBestScore={globalBestScore}
          playedMoves={playedMoves}
          playWord={playWord}
          checkingWord={checkingWord}
        />
        <MoveListSection />
      </div>
    </div>
  );
}

export default App;
