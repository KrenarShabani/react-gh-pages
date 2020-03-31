import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'
function App(){
  return(
    <div>
      <Header />
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
