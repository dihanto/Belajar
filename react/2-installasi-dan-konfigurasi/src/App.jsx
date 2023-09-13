import { useState } from 'react'

function Header({ place }) {
  return <h1> Welcome to {place ? place : "Grand Line"} 🏴‍☠️ </h1>;
}

function App() {
  const students = ["Luffy", "Zoro", "Sanji"];
  const [likes, setLikes] = useState(0);
  const [counts, setCounts] = useState(0);

  function HandleClick() {
    setLikes(likes + 1);
  }

  function HandleCount(change) {
    setCounts(counts + change);
  }

  function ResetCount() {
    setCounts(counts * 0);
  }

  return (
    <>
      <Header />
      <Header place="Alabasta" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
      <button onClick={HandleClick}>Like ({likes})</button>
      <br />
      <button className="min" onClick={() => HandleCount(-1)}>
        -
      </button>
      ({counts})
      <button className="plus" onClick={() => HandleCount(1)}>
        +
      </button>
      <br />
      <button onClick={ResetCount}>Reset</button>
    </>
  );
}

export default App
