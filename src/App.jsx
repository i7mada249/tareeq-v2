import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Landingpage from './Landingpage'
import Frontend from './Pages/Frontend'
import About from './Pages/About'
import Roadmaps from './Pages/Roadmaps'

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <Nav />
      </div>
      <Routes>
        <Route path='/' exact Component={Landingpage} />
        <Route path='/About' Component={About} />
        <Route path='/Learn' Component={Roadmaps} />
        <Route path='/Learn/frontend' Component={Frontend} />
        {/*<Route path='/Learn/backend' Component={Backend} />
          <Route path='/Learn/android' Component={Android} />
          <Route path='/Learn/devops' Component={DevOps} />
  <Route path='/Learn/cs' Component={CS} />*/}
      </Routes>

    </div>
  )
}

export default App
