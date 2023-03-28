import './App.css'
import Nav from './Components/Nav'
import Header from './Containers/Header/Header'
import ByRole from './Containers/Main/ByRole'
import BySkill from './Containers/Main/BySkill'

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <Nav />
      </div>

      <div className='content'>
        <Header />
        <ByRole />
        <BySkill />
      </div>
    </div>
  )
}

export default App
