import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
