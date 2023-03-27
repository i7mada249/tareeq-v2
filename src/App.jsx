import './App.css'
import Nav from './Components/Nav'
import Header from './Containers/Header/Header'
import Main from './Containers/Main/Main'

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <Nav />
      </div>

      <div className='content'>
        <Header />
        <Header />
        <Main />
      </div>
    </div>
  )
}

export default App
