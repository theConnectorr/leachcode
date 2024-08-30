import { useState, useEffect, useRef } from "react";
import "../styles/DashBoard.css"
import BarChart from "../components/BarChart";
import ProgressCircle from "../components/ProgressCircle";

export default function DashBoard() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [res, setRes] = useState("");
  const [histogram, setHistogram] = useState([]);
  const [percentage, setPercentage] = useState(25);

  useEffect(() => {
    const go = async (username) => {
      const response = await fetch(`https://graphql-proxy-server.vercel.app/api/user/public_profile?username=${username}`);
      const json = await response.json();

      setRes(JSON.stringify(json, null, 4));
    }

    if (username !== "") {
      go(username);
    }
  }, [username]);

  useEffect(() => {
    const go = async () => {
      const response = await fetch(`https://graphql-proxy-server.vercel.app/api/global/contest_rating_histogram`);
      const json = await response.json();

      setHistogram(json.data.contestRatingHistogram);
    }
    go();

  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("username", e.target.firstChild.value);
    setUsername(e.target.firstChild.value);
  };

  return (
    <>
      <form className="input-wrapper" onSubmit={submitHandler}>
        <input id="username-input" type="text" />
        <button type="submit">&gt;</button>
        {/* <input id="slider" type="range" onChange={(e) => setPercentage(e.target.value)} /> */}
      </form>
      <div className="main-dashboard">
        <div className="num-solve box">
          <ProgressCircle percentage={percentage} color="violet" />
        </div>
        <div className="difficulties box">
          <BarChart
            height={100}
            width={450}
            data={histogram}
            drawValue="userCount"
            styleConfig={{ color: "gray", hoverColor: "violet" }}
          />
        </div>
        <div className="rating-chart box">
          hihi
        </div>
        <div className="skill box">
          skill
        </div>
        <div className="recent-solve box">
          recently solved
        </div>
        <div className="test box">
          {res}
        </div>
      </div>
    </>
  )
}