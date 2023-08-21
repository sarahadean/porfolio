import { Link, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <section id="about">
      <div >

        <div>
          <h1>
            Hi, I'm Sarah Dean
            <br/>I love to build amazing
            apps.
            </h1>
      {/* <Typography> Hi, I'm Sarah Dean. A passionate, goal-oriented software engineer with a background in biology and 9 years of professional experience</Typography>
    
      <Link href="#contact">Work with me</Link>
   
      <Link href="#projects">See my past work</Link> */}
      <p>
      Dedicated and motivated software engineer with a unique background in Biology. I have a strong foundation building Full-Stack applications using Python, Flask, JavaScript and React. I thrive in collaborative environments and I am eager to contribute my technical expertise to make a positive impact on any team.
          </p>

          <div >
            <a href="#contact">
              Work With Me
            </a>
            <a
              href="#projects"
              >
              See My Past Work
            </a>
          </div>
        
        </div>

        {/* <div >
          <img
            alt="coding cat"
            src="https://img.freepik.com/premium-vector/simple-cat-coding-laptop-tech-software-engineer-design-vector-illustration_773815-96.jpg?w=2000"
          />
      </div> */}
      </div>


    </section>
  )
}

export default About