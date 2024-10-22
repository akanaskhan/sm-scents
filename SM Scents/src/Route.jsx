import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Loader.css'
import './Icon.js'
import Navbar from './components/Navbar.jsx'
import NavBar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import Intro from './components/Intro.jsx'
import Spinner from './components/Spinner.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/home.jsx'
import AboutUs from './pages/about Us.jsx'
import ContactUs from './pages/contactUs.jsx'
import SignUp from './pages/auth/signup.jsx'
import LogIn from './pages/auth/login.jsx'

function AppRouter() {
  const [count, setCount] = useState(0)
  const image1 = "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  const image2 = "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
  const image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
  


  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    {/* <Route path='Home' element={<Home/>} /> */}
    <Route path='/AboutUs' element={<AboutUs/>} />
    <Route path='/ContactUs' element={<ContactUs/>} />
    <Route path='/SignUp' element={<SignUp/>} />
    <Route path='/Login' element={<LogIn/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default AppRouter
