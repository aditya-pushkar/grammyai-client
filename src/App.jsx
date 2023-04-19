import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>

    </div>
  )
}

export default App
