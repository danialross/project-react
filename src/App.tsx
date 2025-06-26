import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import LogoBanner from "./components/LogoBanner";
import Intro from "./components/Intro";

function App() {
  const [isRegistering, setIsRegistering] = useState(false);
  return (
    <div className="relative bg-secondary w-screen h-screen grid grid-cols-2">
      <Login setRegistering={setIsRegistering} />
      <Register setRegistering={setIsRegistering} />
      <LogoBanner
        className={`absolute transition-transform duration-300 ease-in-out ${isRegistering ? "translate-x-0" : "translate-x-full"} `}
      />
      <Intro />
    </div>
  );
}

export default App;
