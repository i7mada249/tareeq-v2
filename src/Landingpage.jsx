import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Containers/Header/Header'
import ByRole from './Containers/Main/ByRole'
import BySkill from './Containers/Main/BySkill'

function Landingpage() {

    return (
        <div className="App">

            <div className='content'>
                <Header />
                <ByRole />
                <div className='sprt'></div>
                <BySkill />
            </div>

        </div>
    )
}

export default Landingpage