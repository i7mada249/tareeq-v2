import React from 'react'
import './ByRole.css'
import Article from '../../Components/Article'
import Frontend from '../../Pages/Frontend';
import { Link } from 'react-router-dom';


const Main = () => {

  return (

    <div className='main-cont'>

      <div className='txt-cont'>
        <h1 className='grd-txt'>حسب المجال</h1>
        <p>تعلم عن مجال معين وطريقة اتقانه بكافة متطلباته ومهاراته</p>
      </div>

      <div className='layout'>

        <div className='container'>
          <Article text='Cyber security' />
          <Link to="/frontend">
            <Article text='Frontend' />
          </Link>
          <Article text='Backend' />
          <Article text='DevOps' />
          <Article text='Android' />
          <Article text='Mobile dev' />
          <Article text='Computer scince' />
        </div>

      </div>
    </div>
  )
}

export default Main