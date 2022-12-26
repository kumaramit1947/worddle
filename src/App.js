import { useState, useEffect } from "react";
import Wordle from "./components/Wordle";
const App = () => {
  const [solution, setSolution] = useState(null);
  
  useEffect(() => {
    let url = "http://localhost:8000/solutions/";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let index=Math.floor(Math.random()*data.length);
        return setSolution(data[index].word);
      });
  }, [setSolution]);
  return (
    <div id="app">
      <h3 className="title"> Worddle! </h3>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}
export default App;