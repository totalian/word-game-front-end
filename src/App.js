import GameFrame from "./components/GameFrame";
import Header from "./components/Header";
import MoveListSection from "./components/MoveListSection";

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <div className="flex h-full">
      <GameFrame />
      <MoveListSection />
      </div>
    </div>
  );
}

export default App;
