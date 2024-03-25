import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="home-img"
                  alt="not found"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  className="home-img"
                  alt="not found"
                />
              )}
              <h1 className={`${f}`}>Lost Your Way</h1>
              <p className={`${f}`}>"We cannot seem to find the page"</p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
