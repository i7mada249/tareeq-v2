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
                <div className='sprt'></div>
                <ByRole id="learn"/>
                <div className='sprt'></div>
                <BySkill />
                <div className='sprt'></div>
            </div>

        </div>
    )
}

export default Landingpage