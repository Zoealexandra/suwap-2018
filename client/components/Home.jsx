import React from 'react'
// import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='people-list'>

      <h5 className='text'><strong>Help Me Get Through </strong> is a do it yourself one
       stop shop that helps you source what you need for your event.  From
       birthdays, weddings to funerals, this online tool connects you with a
       variety of established as well as community ad-hoc suppliers around
       Auckland that can provide you options that suit your needs, budget and
       convenience.</h5>
      <br />
      
      <h5 className='text'>Select the culture you most closely identify with:</h5>

      <div className='gallery'>
        <a target="_blank" href="/samoa">
          <img src="/images/samoa.jpeg" alt="Samoa" width="600" height="400"></img>
        </a>
        <div className="desc"><a href="/samoa">Samoa</a></div>
      </div>

      <div className='gallery'>
        <a target="_blank" href="/fiji">
          <img src="/images/fiji.jpeg" alt="Fiji" width="600" height="400"></img>
        </a>
        <div className="desc"><a href="/fiji">Fiji</a></div>
      </div>

      <div className='gallery'>
        <a target="_blank" href="/tonga">
          <img src="/images/tonga.jpeg" alt="Tonga" width="600" height="400"></img>
        </a>
        <div className="desc"><a href="/tonga">Tonga</a></div>
      </div>

    </div>
  )
}

export default Home
