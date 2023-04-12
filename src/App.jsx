import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import GrammarChecker from './pages/GrammarChecker'

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='grammar-checker' element={<GrammarChecker/>}/>
      </Routes>

    </div>
  )
}

export default App
