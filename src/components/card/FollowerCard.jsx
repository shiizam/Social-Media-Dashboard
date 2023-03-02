import React from 'react'
import './follower-card.css'


export const FollowerCard = () => {
  return (
  <div className="grid">

    {/* FACEBOOK CARD */}
    <div className="card">
      <div className='card-facebook'>
        <div className="card-head">
          <img src="/src/assets/icon-facebook.svg" alt="facebook-logo" />
          <p className='user-handle'>@nathanf</p>
        </div>

        <div className="card-body">
          <h1 className='actual-count'>1987</h1>
          <p>FOLLOWERS</p>
        </div>

          <div className="card-footer">
            <img src="/src/assets/icon-up.svg" alt="up-arrow" />
            <p className='count-increase'>12 Today</p>
          </div> 

      </div>
    </div>

    {/* TWITTER CARD */}
    <div className='card'>
      <div className='card-twitter'>
        <div className="card-head">
          <img src="/src/assets/icon-twitter.svg" alt="twitter-logo" />
          <p className='user-handle'>@nathanf</p>
        </div>

        <div className="card-body">
          <h1>1044</h1>
          <p>FOLLOWERS</p>
        </div>

          <div className="card-footer">
            <img src="/src/assets/icon-up.svg" alt="up-arrow" />
            <p className='count-increase'>99 Today</p>
          </div> 

      </div>
    </div>

    {/* INSTAGRAM CARD */}
    <div className='card'>
      <div className='card-insta'>
        <div className="card-head">
          <img src="/src/assets/icon-instagram.svg" alt="instagram-log" />
          <p className='user-handle'>@realnathanf</p>
        </div>

        <div className="card-body">
          <h1>11k</h1>
          <p>FOLLOWERS</p>
        </div>

        <div className="card-footer">
          <img src="/src/assets/icon-up.svg" alt="up-arrow" />
          <p className='count-increase'>1099 Today</p>
        </div> 

      </div>
    </div>

    {/* YOUTUBE CARD */}
    <div className='card'>
      <div className='card-youtube'>
        <div className="card-head">
          <img src="/src/assets/icon-youtube.svg" alt="youtube-logo" />
          <p className='user-handle'>Nathan F.</p>
        </div>

        <div className="card-body">
          <h1>8239</h1>
          <p>SUBSCRIBERS</p>
        </div>

        <div className="card-footer">
          <img src="/src/assets/icon-down.svg" alt="down-arrow" />
          <p className='count-decrease'>144 Today</p>
        </div> 

      </div>
    </div>
  </div>
  )
}
