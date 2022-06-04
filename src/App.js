import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '@pages/Home/index'

import './App.scss'

function App() {
  return (
    <Router>
      {/* <Header setMySmallWorldActivated={setMySmallWorldActivated} /> */}

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
