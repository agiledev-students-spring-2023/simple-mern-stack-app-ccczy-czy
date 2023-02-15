// import { Link } from 'react-router-dom'
import './About.css'
import picture from './assets/picture.jpg'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <div className='aboutContainer'>
      <h1 className='aboutTitle'>About Me</h1>
      
      <div className='intro'>
        <img src={picture} alt='my_photo'></img>
        <ul className='aboutList'>
            <li>
                👋 Hello, I'm Zander. 
            </li>

            <li>
                👀 I'm interested in full-stack web development, web design, and percussions!
            </li>

            <li>
                🌱 I'm currently studying at New York Univeristy. 
            </li>

            <li>
                📫 How to reach me: zc2122@nyu.edu
            </li>
        </ul>
      </div>
    </div>
  )
}

// make this component available to be imported into any other file
export default About
