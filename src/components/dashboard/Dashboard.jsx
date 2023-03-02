import React from 'react'
import './dashboard.css'


import { FollowerCard } from '../card/FollowerCard'
import { Overview } from '../overview/Overview'

export const Dashboard = ({ toggleTheme }) => {
  
  return (
    <main>
      
      <header className="dashboard-header">
        <div className='dashboard-title'>
          <h1>Social Media Dashboard</h1>
          <p className='total-followers'>Total Followers: 23,004</p>
        </div>
      
        <div>
          <div className="main-title">
            <p>Dark Mode</p>
            <div className="toggle-container">
              <input type="checkbox" id="switch" name="theme" onClick={toggleTheme} />
              <label htmlFor="switch"></label>
            </div>
          </div>
        </div>
      </header>

      <div className='cards'>
        <FollowerCard />
      </div>

      <div className="overview">
        <Overview />
      </div>

      
    </main>
    
  )
}
