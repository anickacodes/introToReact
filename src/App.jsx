import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Headers";
import Footer from "./footer";



function App() {
  const photoOfTheDay = "https://loremflickr.com/320/240";
const currentDate = new Date();

  return (
    <div className="App">
      <Header />
      <Header />
      <Header />
      <h2>React is NUTS </h2>
      <img src={photoOfTheDay} alt={currentDate} />
      <Footer />
    </div>
  );
}

export default App;

{
  /* function App() {const [count, setCount] = useState(0)const [count, setCount] = useState(0)
<a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */
}
