import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
  
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          <p>
            I'm a 20 years old very ambitious full-stack developer and currently
            a Computer Science student (with bashelor degree) at the university
            of science and technology Houari Boumediene in algeria.
          </p>
          <p align="LEFT">
            I dont have much of a professional work experience all tought i
            participated in multiple hackathons and IT events and built multiple
            projects using different kind of technologies (you can check it in
            the portfolio page).
          </p>
          <p align="LEFT">
            I'm the type of person who is always looking to improve myself,
            that's why I've worked in many part-time non-IT jobs at least to
            learn essential skills such as selling, talking to people, trading,
            ... .<br />
            Some of the jobs I've worked at : Home appliances salesperson, Home
            decoration products salesperson, and Construction products
            salesperson.
          </p>
          <p align="LEFT">
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skills and knowledge.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, hard worker, a sports addict, AI enthusiast, and
            tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faHtml5} color="#f06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
