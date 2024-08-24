import { useState, useEffect } from "react";
import "../styles/DashBoard.css"

export default function DashBoard() {
  const [res, setRes] = useState("");
  const [percentage, setPercentage] = useState(25);

  // useEffect(() => {
  //   const go = async () => {
  //     const response = await fetch("https://graphql-proxy-server.vercel.app/user/public_profile?username=tle_solver");
  //     const json = await response.json();

  //     setRes(JSON.stringify(json, null, 4));
  //   }

  //   go();
  // }, []);

  return <div className="main-dashboard">
    <div className="num-solve box">
      <svg viewBox="0 0 110 110" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="55" cy="55" rx="50" ry="50"
          style={{
            fill: "none",
            strokeWidth: 2,
            stroke: "gray",
          }}
        />
        <ellipse cx="55" cy="55" rx="50" ry="50"
          style={{
            fill: "none",
            strokeWidth: 2,
            stroke: "violet",
            strokeDasharray: `${2 * 50 * Math.PI * percentage / 100} ${2 * 50 * Math.PI * (100 - percentage) / 100}`,
            strokeLinecap: "round"
          }}
        />
        <text x="50%" y="50%" 
          dominant-baseline="middle"
          text-anchor="middle"
          className="question-percentage"
          transform={`rotate(${percentage * 3.6 - 90}, 55, 55)`}
        >{percentage}</text>
      </svg>
    </div>
    <div className="difficulties box">
      3 difficulties
    </div>
    <div className="rating-chart box">
      rating chart
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
}