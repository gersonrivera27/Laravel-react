import React from 'react'
import "../stylesheets/About.css"
import team from "../images/team.jpg"


export default function About() {
  return (
    <div className=''>
    <div className='prueba'>
      <h1>
      WE ARE GYM AND FITNESS
      </h1>
      <h2>
      Helping people live longer, happier and healthier lives for over 20 years.
      </h2>

      <img src={team} />

      <h1>
      OUR STORY
      </h1>
      <h2>
      Gym and Fitness was founded in 2002 as a family owned and operated business specialising in supplying high-quality gym equipment at great prices.
      </h2>
      </div>
    </div>
  )
}
