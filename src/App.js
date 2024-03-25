import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
import Navbar from './components/Navbar'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, toggleTheme: this.toggleTheme}}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
