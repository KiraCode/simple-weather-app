import React from 'react'
import Header from './components/Header'
import "./assets/style/index.css"
import DefaultScreen from './components/DefaultScreen'

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <DefaultScreen/>
      <p className="copyright-text">&copy; WSA. All Rights Reserved</p>
    </div>
  )
}

export default App
