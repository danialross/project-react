import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import LogoBanner from "./components/LogoBanner";

import Intro from "./components/Intro";
import { User } from "./types";
import Outro from "./components/Outro";

function App() {
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  return (
    <div className="relative bg-secondary w-screen h-screen grid grid-cols-2">
      <Login
        setRegistering={setIsRegistering}
        setSuccessLogin={setIsSuccessLogin}
        users={users}
      />
      <Register
        setRegistering={setIsRegistering}
        setUsers={setUsers}
        users={users}
      />
      <LogoBanner
        className={`absolute transition-transform duration-300 ease-in-out ${isRegistering ? "translate-x-0" : "translate-x-full"} `}
      />
      <Intro />
      {isSuccessLogin && <Outro />}
    </div>
  );
}

export default App;
