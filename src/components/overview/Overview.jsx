import React from 'react'
import './overview.css'




export const Overview = () => {
  return (
    <div className="overview-section">

      <div className="overview-title">
        <h1 >Overview - Today</h1>
      </div>
      <div className="overview-grid">

                      {/****** Facebook Views Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Page Views</p>
              <h2>87</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-facebook.svg" alt="Fb-logo" />
              <p><img className='arrow' src="/src/assets/icon-up.svg" alt="up-arrow" />3%</p>
            </div>
          </div>
        </div>
                      {/****** Facebook Likes Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Likes</p>
              <h2>52</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-facebook.svg" alt="Fb-logo" />
              <p className='like-loss'>
                <img className='arrow' src="/src/assets/icon-down.svg" alt="down-arrow" />
                2%</p>
            </div>
          </div>
        </div>
                      {/****** Instagram Likes Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Likes</p>
              <h2>5462</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-instagram.svg" alt="Instagram-logo" />
              <p className='like-gain'>
                <img className='arrow' src="/src/assets/icon-up.svg" alt="up-arrow" />
                2257%</p>
            </div>
          </div>
        </div>
                      {/****** Instagram Views Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Views</p>
              <h2>52k</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-instagram.svg" alt="Instagram-logo" />
              <p className='like-gain'>
                <img className='arrow' src="/src/assets/icon-up.svg" alt="up-arrow" />
                1375%</p>
            </div>
          </div>
        </div>
                      {/****** Twitter Retweets Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Retweets</p>
              <h2>117</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-twitter.svg" alt="Twitter-logo" />
              <p className='like-gain'>
                <img className='arrow' src="/src/assets/icon-up.svg" alt="up-arrow" />
                303%</p>
            </div>
          </div>
        </div>
                      {/****** Twitter Likes Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Likes</p>
              <h2>507</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-twitter.svg" alt="Twitter-logo" />
              <p className='like-gain'>
                <img className='arrow' src="/src/assets/icon-up.svg" alt="up-arrow" />
                553%</p>
            </div>
          </div>
        </div>
                      {/****** YouTube Likes Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Likes</p>
              <h2>107</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-youtube.svg" alt="YouTube-logo" />
              <p className='like-loss'>
                <img className='arrow' src="/src/assets/icon-down.svg" alt="down-arrow" />
                19%</p>
            </div>
          </div>
        </div>
                      {/****** YouTube Total Views Card ******/}
        <div className="overview-card">
          <div className="overview-body">
            <div className="body-left">
              <p>Total Views</p>
              <h2>1407</h2>
            </div>
            <div className="body-right">
              <img className='logo' src="/src/assets/icon-youtube.svg" alt="YouTube-logo" />
              <p className='like-loss'>
                <img className='arrow' src="/src/assets/icon-down.svg" alt="down-arrow" />
                12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
