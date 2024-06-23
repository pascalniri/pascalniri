import './App.css'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
