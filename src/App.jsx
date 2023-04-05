import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import "../src/Css/Navbar.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
