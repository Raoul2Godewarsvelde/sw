import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Header } from '@components/Header/Registration/index'
import Home from '@pages/Home/index'

import './App.scss'

function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
