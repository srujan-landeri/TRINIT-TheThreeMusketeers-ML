import React from "react";

/* importing assets */
import wave from "../assets/wave.png";
import rocket from '../assets/rocket.png';
import {useNavigate} from "react-router-dom"

export function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="home">
      <img className="wave" src={wave} alt="wave" />
      <img className="rocket" src={rocket} alt="" />
      <div className="home-heading">
        <h2>PaveGuardian</h2>
        <p>AI-Powered Rad Damage Detection For Safer, Smoother Journeys</p>
        <button onClick={() => navigate('/login')}>SIGNUP</button>
      </div>
    </div>
  );
}
