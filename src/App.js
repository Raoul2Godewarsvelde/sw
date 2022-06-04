import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from '@components/Header/Registration/index'
import Home from '@pages/Home/index'
import Photography from '@pages/Photography/index'

import './App.scss'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/photography' element={<Photography />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
