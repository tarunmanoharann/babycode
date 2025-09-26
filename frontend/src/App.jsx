


import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Universities from './components/Universities'
import Comparison from './components/Comparison'
import './App.css'
import AnimatedSections from './components/Comparison'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Universities />
      <AnimatedSections/>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
