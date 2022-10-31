import { useState } from "react";
import GameFrame from "./components/GameFrame";
import Header from "./components/Header";
import MoveListSection from "./components/MoveListSection";
// import {checkWord} from "./scoringFunctions/checkWord.js"

function App() {
  const [startWord, setStartWord] = useState("grape")
  const [targetWord, setTargetWord] = useState("suit")
  const [currentScore, setCurrentScore] = useState(0)
  const [playerBestScore, setPlayerBestScore] = useState(0)
  const [globalBestScore, setGlobalBestScore] = useState(200)
  const [playedMoves, setPlayedMoves] = useState([])
  const [checkingWord, setCheckingWord] = useState(false)
  const [currentWord, setCurrentWord] = useState(startWord)



  return (
    <div className="App h-screen">
      <Header />
      <div className="flex h-full">
        <GameFrame
          targetWord={targetWord}
          startWord={startWord}
          currentScore={currentScore}
          playerBestScore={playerBestScore}
          globalBestScore={globalBestScore}
          playedMoves={playedMoves}
        />
        <MoveListSection />
      </div>
    </div>
  );
}

export default App;
