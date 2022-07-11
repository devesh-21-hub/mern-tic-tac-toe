import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

import Navbar from "../Nav/Navbar";

//import Footer from "./components/Footer";

function Welcome() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="mainContainer">
      <Navbar />
      <div className="welcomeContainer">
        <div className="innerContainer">
          <h1 className="heading">Welcome to the game!</h1>

          <div>
            <input
              placeholder="Enter your name"
              className="welcomeInput"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              placeholder="Enter the room you want to join"
              className="welcomeInput top-margin"
              type="text"
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
          </div>

          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button top-margin" type="submit">
              {" "}
              Join
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
