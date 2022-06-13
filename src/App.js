import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from '@components/Header/Registration/index'

import Home from '@pages/Home/index'
import Explosion from '@pages/Explosion/index'
import Photography from '@pages/Photography/index'

import RayMarching from '@pages/RayMarching/index'
import GrowingSunflowers from '@pages/GrowingSunflowers/index'

import './App.scss'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/explosion' element={<Explosion />} />
          <Route path='/photography' element={<Photography />} />

          <Route path='/ray_marching' element={<RayMarching />} />
          <Route path='/growing_sunflowers' element={<GrowingSunflowers />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
