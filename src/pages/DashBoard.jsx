import { useState, useEffect, useRef } from "react";
import "../styles/DashBoard.css"
import BarChart from "../components/BarChart";
import ProgressCircle from "../components/ProgressCircle";
import PublicProfile from "../components/PublicProfile";

export default function DashBoard() {
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("username", e.target.firstChild.value);
    setUsername(e.target.firstChild.value);
    console.log("changed");
  };

  return (
    <>
      <form className="input-wrapper" onSubmit={submitHandler}>
        <input id="username-input" type="text" />
        <button type="submit">&gt;</button>
      </form>
      <div className="main-dashboard">
        <PublicProfile id="public_profile" className="box" username={username} />
        <div id="progress_circle" className="box"></div>
        <div id="progress_bars" className="box"></div>
        <div id="submission_tracker" className="box"></div>
        <div id="skill_stats" className="box"></div>
        <div id="ratings" className="box"></div>
        <div id="recent_submission" className="box"></div>
      </div>
    </>
  )
}