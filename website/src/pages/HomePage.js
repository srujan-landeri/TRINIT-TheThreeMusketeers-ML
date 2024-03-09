import React from 'react'

import { Signin } from '../Components/Signin'

import road from '../assets/road.svg'

export function HomePage() {
  return (
    <div className='home'>
      <img className = 'road' src={road} alt="" />
        <div className='heading'>
            <h1>PaveGuardian</h1>
            <p>AI-Powered Road Damage Detection For Safer, Smoother Journeys</p>
        </div>
        <div className='login'>
            <Signin />
        </div>
    </div>
  )
}