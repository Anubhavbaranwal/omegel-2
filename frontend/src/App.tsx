import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from './components/Landing';
import { Room } from './components/Room';
import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/room" element={<Room />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
