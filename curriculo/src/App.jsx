import {Home} from './pages/home'
import {PasswordGameScreen} from './pages/passwordgameScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'


import './global.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passwordgameScreen" element={<PasswordGameScreen/>} />
      </Routes>
    </Router>
  )
}

export default App
