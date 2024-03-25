import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      console.log(isDarkTheme)
      const d = isDarkTheme ? 'bg' : 'lg'
      const g = isDarkTheme ? 'l' : 'b'
      return (
        <>
          <Navbar />
          <div className={`home ${d}`}>
            <div className="cen">
              {isDarkTheme ? (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  className="home-img"
                  alt="home"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  className="home-img"
                  alt="home"
                />
              )}
              <h1 className={`${g}`}>Home</h1>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
