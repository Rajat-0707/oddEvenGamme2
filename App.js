import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedSide, setSelectedSide] = useState(""); 
  const [num, setNum] = useState(0);     
  const [inum, setInum] = useState(0);    

  function m() {
    if (!selectedSide) {
      alert("Please select 'Odd' or 'Even' before playing!");
      return;
    }
    if (inum === 0) {
      alert("Please select your number before playing!");
      return;
    }

    const rand = Math.floor(Math.random() * 5) + 1;
    setNum(rand);

    const total = rand + inum;
    const isEven = total % 2 === 0;

    if ((selectedSide === "odd" && isEven) || (selectedSide === "even" && !isEven)) {
      alert("You lose");
    } else {
      alert("You win!");
    }
  }

  return (
    <>
      <div className="head">
        <p className='p1'>SELECT YOUR SIDE:</p>
        <br />
        <input
          type="radio"
          name="side"
          id="odd"
          value="odd"
          onChange={(e) => setSelectedSide(e.target.value)}
        />
        <label htmlFor="odd">Odd</label>

        <input
          type="radio"
          name="side"
          id="even"
          value="even"
          onChange={(e) => setSelectedSide(e.target.value)}
        />
        <label htmlFor="even">Even</label>
      </div>

      <hr />

      <div className="container">
        <div className="box1">
          <div className="box11">{inum}</div>
          <div className="p"><p>YOU</p></div>
        </div>

        <div className="box2">
          <div className="box21">{num}</div>
          <div className="p"><p>COMPUTER</p></div>
        </div>
      </div>

      <div className="foot">
        <div className="foot1"><p>SELECT YOUR NUMBER</p></div>

        <div className="foot2">
          {[1, 2, 3, 4, 5].map(n => (
            <span key={n}>
              <input
                type="radio"
                name="userNumber"
                id={`num${n}`}
                value={n}
                onChange={(e) => setInum(parseInt(e.target.value))}
              />
              <label htmlFor={`num${n}`}>{n}</label>
            </span>
          ))}
          <br />
        </div>

        <div className="buu">
          <button className="bu" onClick={m}>PLAY</button>
        </div>
      </div>
    </>
  );
}

export default App;
