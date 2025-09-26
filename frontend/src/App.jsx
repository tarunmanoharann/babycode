


import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Universities from './components/Universities'
import Comparison from './components/Comparison'
import MobileApp from './components/MobileApp'
import './App.css'

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Universities />
      <Comparison />
      <Testimonials />
      <MobileApp />
      <Footer />
      <Chatbot />
    </div>
  )
}

export default App
