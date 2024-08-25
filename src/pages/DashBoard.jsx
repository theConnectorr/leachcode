import { useState, useEffect, useRef } from "react";
import "../styles/DashBoard.css"

export default function DashBoard() {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [res, setRes] = useState("");
  const [histogram, setHistogram] = useState([]);
  const [percentage, setPercentage] = useState(25);

  useEffect(() => {
    const go = async (username) => {
      const response = await fetch(`https://graphql-proxy-server.vercel.app/user/public_profile?username=${username}`);
      const json = await response.json();

      setRes(JSON.stringify(json, null, 4));
    }

    if (username !== "") {
      go(username);
    }
  }, [username]);

  useEffect(() => {
    const go = async () => {
      const response = await fetch(`https://graphql-proxy-server.vercel.app/contest_rating_histogram`);
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

  const getPath = (a, maxWidth, maxHeight) => {
    const maxUserCount = Math.max(...a.map(i => i.userCount));
    const gap = maxWidth / a.length;

    return a.map((col, i) => {
      const height = maxHeight - 80 * (col.userCount / maxUserCount);
      return (<>
        <path
          d={`M${(gap + 1) * (i + 1)} ${maxHeight} L${(gap + 1) * (i + 1)} 0`}
          style={{
            stroke: "gray",
            strokeWidth: 15,
            strokeDasharray: `${maxHeight - height} ${height}`,
            zIndex: 1,
          }}
          onMouseEnter={(e) => e.target.style.stroke = "violet"}
          onMouseLeave={(e) => e.target.style.stroke = "gray"}
        />
      </>)
    });
  }

  return (
    <>
      <form className="input-wrapper" onSubmit={submitHandler}>
        <input id="username-input" type="text" />
        <button type="submit">&gt;</button>
        {/* <input id="slider" type="range" onChange={(e) => setPercentage(e.target.value)} /> */}
      </form>
      <div className="main-dashboard">
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
              dominantBaseline="middle"
              textAnchor="middle"
              className="question-percentage"
            >{percentage}</text>
          </svg>
        </div>
        <div className="difficulties box">
          <svg viewBox="0 0 400 100">
            {getPath(histogram, 360, 100)}
          </svg>
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