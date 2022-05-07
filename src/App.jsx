import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Graph from './Components/graph'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Graph />} />
      </Routes>
    </Router>
  )
}

export default App