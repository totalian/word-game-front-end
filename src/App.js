import { useEffect, useState } from "react";
import GameFrame from "./components/GameFrame";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import HistoryJump from "./components/HistoryJump";
import MoveListSection from "./components/MoveListSection";
import { checkWord } from "./scoringFunctions/checkWord.js"
import { playMove } from "./scoringFunctions/playMove.js"
import { words } from "./database"

function App() {
  const [startWord, setStartWord] = useState("grape")
  const [targetWord, setTargetWord] = useState("suit")
  const [currentScore, setCurrentScore] = useState(0)
  const [playerBestScore, setPlayerBestScore] = useState(null)
  const [globalBestScore, setGlobalBestScore] = useState(200)
  const [playedMoves, setPlayedMoves] = useState([])
  const [checkingWord, setCheckingWord] = useState(false)
  const [currentWord, setCurrentWord] = useState(startWord)
  const [gameOver, setGameOver] = useState(false)
  const [showHistoryJump, setShowHistoryJump] = useState(false)
  const [historyIndex, setHistoryIndex] = useState(0)
  const [showMoveSection, setShowMoveSection] = useState(false)

  const calculateCurrentScore = () => {
    if (playedMoves.length > 0) {
      return playedMoves.reduce((pre, cur) => pre + cur.cost, 0)
    } else return 0
  }

  useEffect(() => {
    const todaysWords = words.find(word => word.date == new Date().toDateString())
    setStartWord(todaysWords.startWord)
    setCurrentWord(todaysWords.startWord)
    setTargetWord(todaysWords.endWord)
    setPlayedMoves([{ word: startWord, cost: 0, color: "bg-red-800", name: "Start word" }])
  }, [startWord, targetWord])

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
    if (!playerBestScore || currentScore <= playerBestScore) {
      setPlayerBestScore(currentScore)
    }
    setGameOver(false)
    setPlayedMoves([{ word: startWord, cost: 0, color: "bg-red-800", name: "Start word" }])
  }

  useEffect(() => {
    if (currentWord == targetWord) {
      return setGameOver(true)
    }
  }, [currentWord, targetWord])

  const jumpToHistory = index => {
    setPlayedMoves(playedMoves.slice(0, index + 1))
    setCurrentWord(playedMoves[index].word)
  }


  return (
    <div className="flex flex-col h-screen lg:overflow-clip">
        <Header />
        {gameOver && <GameOver currentScore={currentScore} restart={restart} />}
        {showHistoryJump && <HistoryJump setShowHistoryJump={setShowHistoryJump} jumpToHistory={jumpToHistory} playedMoves={playedMoves} index={historyIndex} />}
        <div className="flex grow">
          <GameFrame
            targetWord={targetWord}
            startWord={startWord}
            currentScore={currentScore}
            playerBestScore={playerBestScore}
            globalBestScore={globalBestScore}
            playedMoves={playedMoves}
            playWord={playWord}
            checkingWord={checkingWord}
            setShowHistoryJump={setShowHistoryJump}
            setHistoryIndex={setHistoryIndex}
            showMoveSection={showMoveSection}
            setShowMoveSection={setShowMoveSection}
          />
          <MoveListSection setShowMoveSection={setShowMoveSection} showMoveSection={showMoveSection} />
      </div>
    </div>
  );
}

export default App;
