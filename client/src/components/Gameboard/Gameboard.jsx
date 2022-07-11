import React, { useEffect, useState } from "react";
import "./Gameboard.css";
import queryString from "query-string";
import io from "socket.io-client";

// Winner and Tie is being printed OK TESTED

//let socket = io("http://localhost:3500");

function Gameboard({ location }) {
  const [arrCell, setCell] = useState([]);
  const [x_turn, setX_Turn] = useState(true);
  const [text, setText] = useState("Player 1: X");
  // const [name, setName] = useState("");
  //const [room, setRoom] = useState("");
  const ENDPOINT = "localhost:3500";

  // socket.emit("welcome", (data) => {
  //   console.log(data);
  // });

  //socket = io(ENDPOINT);

  //, [ENDPOINT, location.search]

  function restart() {
    for (let i = 0; i < 9; i++) {
      var id = 0;
      id = i + 1;
      document.getElementById(id).innerText = "";
    }
    setCell([]);
    setX_Turn(true);
    setText("Player 1: X");
  }
  function checkWinner() {
    var winner = "";
    var c1, c2, c3, c4, c5, c6, c7, c8, c9;
    c1 = document.getElementById("1").innerHTML;
    c2 = document.getElementById("2").innerHTML;
    c3 = document.getElementById("3").innerHTML;
    c4 = document.getElementById("4").innerHTML;
    c5 = document.getElementById("5").innerHTML;
    c6 = document.getElementById("6").innerHTML;
    c7 = document.getElementById("7").innerHTML;
    c8 = document.getElementById("8").innerHTML;
    c9 = document.getElementById("9").innerHTML;

    // Winning conditions for X
    if (c1 === "X" && c2 === "X" && c3 === "X") {
      winner = " X";
      return winner;
    } else if (c1 === "X" && c4 === "X" && c7 === "X") {
      winner = " X";
      return winner;
    } else if (c7 === "X" && c8 === "X" && c9 === "X") {
      winner = " X";
      return winner;
    } else if (c3 === "X" && c6 === "X" && c9 === "X") {
      winner = " X";
      return winner;
    } else if (c1 === "X" && c5 === "X" && c9 === "X") {
      winner = " X";
      return winner;
    } else if (c3 === "X" && c5 === "X" && c7 === "X") {
      winner = " X";
      return winner;
    } else if (c2 === "X" && c5 === "X" && c8 === "X") {
      winner = " X";
      return winner;
      // document.getElementById("b9").disabled = true;
      // window.alert("Player X won");
    } else if (c4 === "X" && c5 === "X" && c6 === "X") {
      winner = " X";
      return winner;
    } else if (c1 === "O" && c2 === "O" && c3 === "O") {
      winner = "O";
      return winner;
    } else if (c1 === "O" && c4 === "O" && c7 === "O") {
      winner = "O";
      return winner;
    } else if (c7 === "O" && c8 === "O" && c9 === "O") {
      winner = "O";
      return winner;
    } else if (c3 === "O" && c6 === "O" && c9 === "O") {
      winner = "O";
      return winner;
    } else if (c1 === "O" && c5 === "O" && c9 === "O") {
      winner = "O";
      return winner;
    } else if (c3 === "O" && c5 === "O" && c7 === "O") {
      winner = "O";
      return winner;
    } else if (c2 === "O" && c5 === "O" && c8 === "O") {
      winner = "O";
      return winner;
      //window.alert("Player 0 won");
    } else if (c4 === "O" && c5 === "O" && c6 === "O") {
      winner = "O";
      return winner;
      //window.alert("Player 0 won");
    } else return winner;
  }

  function handleClick(e) {
    let currentCell = parseInt(e.target.id);

    if (e.target.innerText === "") {
      if (x_turn) {
        e.target.innerText = "X";
        currentCell = parseInt(e.target.id);

        setCell((prevArr) => {
          return [...prevArr, parseInt(e.target.id)];
        });
      } else {
        e.target.innerText = "O";
        currentCell = parseInt(e.target.id);
        setCell((prevArr) => {
          return [...prevArr, parseInt(e.target.id)];
        });
      }
    }

    const resultArray = [...arrCell, currentCell];
    setX_Turn(!x_turn);

    const winEr = checkWinner();
    console.log(winEr);
    if (winEr) {
      setText("Winner is " + winEr + " 🥳");
    } else {
      if (!x_turn) {
        if (resultArray.length === 9) {
          setText("Match Tie");
        } else {
          setText("Player 1: X");
        }
      } else {
        if (resultArray.length === 9) {
          setText("Match Tie");
        } else {
          setText("Player 2: O");
        }
      }
    }

    console.log(resultArray);
  }

  const customStyle = { display: "none" };
  //

  return (
    <div>
      <div className="winner-msg">
        <h2 id="score-card">{text}</h2>
      </div>
      <div className="game-board">
        <div id="1" onClick={handleClick} className="box"></div>
        <div id="2" onClick={handleClick} className="box"></div>
        <div id="3" onClick={handleClick} className="box"></div>
        <div id="4" onClick={handleClick} className="box"></div>
        <div id="5" onClick={handleClick} className="box"></div>
        <div id="6" onClick={handleClick} className="box"></div>
        <div id="7" onClick={handleClick} className="box"></div>
        <div id="8" onClick={handleClick} className="box"></div>
        <div id="9" onClick={handleClick} className="box"></div>
      </div>

      <div className="btn-container">
        <button className="btn btn-1">Last Step</button>

        <button onClick={restart} className="btn btn-1">
          Restart
        </button>
      </div>
    </div>
  );
}

export default Gameboard;
