import GameFrame from "./components/GameFrame";
import Header from "./components/Header";

function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Header />
      <GameFrame />
    </div>
  );
}

export default App;
