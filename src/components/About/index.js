import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      const d = isDarkTheme ? 'bg' : 'lg'
      const f = isDarkTheme ? 'l' : 'b'
      return (
        <>
        <Navbar />
          <div className={`home ${d}`}>
            <div className="cen">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="home-img"
                  alt="about"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="home-img"
                  alt="about"
                />
              )}
              <h1 className={`${f}`}>About</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
