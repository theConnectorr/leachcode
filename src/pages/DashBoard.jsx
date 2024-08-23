import { useState } from "react";
import "../styles/DashBoard.css"
import { useEffect } from "react";
import * as q from "../components/query"

export default function DashBoard() {
  const [res, setRes] = useState("");

  useEffect(() => {
    // const go = async () => {
    //   const response = await fetch("https://leetcode.com/graphql/", {
    //     method: "POST",
    //     headers: q.headers,
    //     body: JSON.stringify(q.userPublicProfile("tle_solver")),
    //     mode: 'cors'
    //   });
    
    //   if (response.status !== 200) {
    //     setRes("Something when wrong, error: " + response);
    //     return;
    //   }
    
    //   const json = await response.json();
    //   setRes(JSON.stringify(json, null, 4));
    // }

    const go = async () => {
      const response = await fetch("https://graphql-proxy-server-zjnm.vercel.app/user");
      const json = await response.json();

      setRes(JSON.stringify(json, null, 4));
    }

    go();
  }, []);

  return <div className="main-dashboard">
    <div className="num-solve box">
      num solved
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