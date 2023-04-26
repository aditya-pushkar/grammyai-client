import { Routes, Route, Navigate } from 'react-router-dom'
import ReactGA from 'react-ga4'

import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ContentRewriter from './pages/ContentRewriter'

const TRACKING_ID = "UA-265621307-1"
ReactGA.initialize(TRACKING_ID)

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/writergpt' element={<ContentRewriter/>}/>
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>

    </div>
  )
}

export default App
