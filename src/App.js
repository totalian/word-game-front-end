import { useEffect, useState } from "react";
import GameFrame from "./components/GameFrame";
import GameOver from "./components/GameOver";
import Header from "./components/Header";
import HistoryJump from "./components/HistoryJump";
import MoveListSection from "./components/MoveListSection";
import { checkWord } from "./scoringFunctions/checkWord.js"
import { playMove } from "./scoringFunctions/playMove.js"
import {words} from "./database"

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
  const [showHistoryJump,setShowHistoryJump] = useState(false)
  const [historyIndex,setHistoryIndex] = useState(0)

  const calculateCurrentScore = () => {
    if(playedMoves.length > 0){
      return playedMoves.reduce((pre, cur) => pre + cur.cost, 0)
    } else return 0
  }

  useEffect(() => {
    const todaysWords = words.find(word => word.date == new Date().toDateString())
    console.log(todaysWords)
    setStartWord(todaysWords.startWord)
    setCurrentWord(todaysWords.startWord)
    setTargetWord(todaysWords.endWord)
    setPlayedMoves([{word:startWord,cost:0,color:"bg-red-800",name:"Start word"}])
  },[startWord, targetWord])

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
    setPlayedMoves([{word:startWord,cost:0,color:"bg-red-800",name:"Start word"}])
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

  const jumpToHistory = index => {
    setPlayedMoves(playedMoves.slice(0,index + 1))
    setCurrentWord(playedMoves[index].word)
  }


  return (
    <div className="App h-screen">
      <Header />
      {gameOver && <GameOver currentScore={currentScore} restart={restart} />}
      {showHistoryJump && <HistoryJump setShowHistoryJump={setShowHistoryJump} jumpToHistory={jumpToHistory} playedMoves={playedMoves} index={historyIndex}/>}
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
          setShowHistoryJump={setShowHistoryJump}
          setHistoryIndex={setHistoryIndex}
        />
        <MoveListSection />
      </div>
    </div>
  );
}

export default App;
