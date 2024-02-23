import "./App.css";
import { useRef, useState } from 'react';

import Landing from "./Pages/Landing";
import MainGame from "./Pages/MainGame";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  // const ref = useRef();
  const startGame = () => {
    setIsStarted(true);
    // if(!document.fullscreenElement){
    //   ref.current.requestFullscreen&&ref.current.requestFullscreen();
    // } else {
    //   document.exitFullscreen();
    // }
  }

  return (
    <div
      onClick={startGame}
      className="App"
      // ref={ref}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
      }}>
        {
          isStarted ? (
            <MainGame/>
          ) : (<Landing/>)
        }

    </div>
  );
}

export default App;
