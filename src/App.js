import "./App.css";

function App() {

  return (
    <div
      className="App"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}>
      <iframe
        title="Mystery-game-frame"
        src="https://i.simmer.io/@Tobby340602/mystery-game"
        style={{ width: "100%", height: "100%", border: "none" }}></iframe>
    </div>
  );
}

export default App;
