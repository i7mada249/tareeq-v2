import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Header from './Containers/Header/Header'
import ByRole from './Containers/Main/ByRole'
import BySkill from './Containers/Main/BySkill'
import Landingpage from './Landingpage'
import Frontend from './Pages/Frontend'

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <Nav />
      </div>
      <Routes>
        <Route path='/' exact Component={Landingpage}/>
        <Route path='/main/frontend' Component={Frontend}/>
        <Route path='/tareeq-v2' exact component={Landingpage}/>
      </Routes>

    </div>
  )
}

export default App
