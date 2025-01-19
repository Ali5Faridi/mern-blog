import React from 'react'

function Post() {
  return (
    <div className='post'>
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2024/12/apple-ios-lockdown-mode-2024.jpg" alt="" />
        </div>
        <div className="texts">
          <h2>
          Apple lists all apps it removed alongside TikTok in the U.S.
          </h2>
          <p className="info">
            <a href="author" className="author">Ali Faridi</a>
            <time>2025-01-18 13:09</time>
          </p>
          <p className='summary'>
          In the support document, Apple noted that the company is following the law by blocking all these apps.

“Apple is obligated to follow the laws in the jurisdictions where it operates. Pursuant to the Protecti
          </p>
        </div>
      </div>
  )
}

export default Post
