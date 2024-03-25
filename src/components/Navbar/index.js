import {Link, withRouter} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const btnCliked = () => {
        console.log(isDarkTheme)
        toggleTheme()
      }

      const d = isDarkTheme ? 'bg' : 'lg'

      const k = isDarkTheme ? 'l' : 'b'

      return (
        <div className={`nav ${d}`}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            className="image"
            alt="website logo"
          />
          <ul className="links-con">
            <li className="list">
              <Link to="/" className={`link ${k}`}>
                Home
              </Link>
            </li>
            <li className="list">
              <Link to="/about" className={`link ${k}`}>
                About
              </Link>
            </li>
          </ul>
          <button className="btn" onClick={btnCliked} data-testid="theme">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                className="image"
                alt="theme"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                className="image"
                alt="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default withRouter(Navbar)
