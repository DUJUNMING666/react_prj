import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
import Home from "./Views/Home/Home.tsx";
import HeatMap from "./Components/Visualise/HeatMap.tsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}  />
          <Route path='/home' element={<Home />} >
            <Route path='heatmap' element={<HeatMap />} />
         </Route>
      </Routes>
    </Router>
  )
}

export default App
