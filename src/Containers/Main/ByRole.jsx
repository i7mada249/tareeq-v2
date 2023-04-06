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
          <Link to="/Learn/frontend">
            <Article text='Frontend' />
          </Link>
          <Link to="/Learn/backend">
            <Article text='Backend' />
          </Link>
          <Link to="/Learn/devops">
            <Article text='DevOps' />
          </Link>
          <Link to="/Learn/android">
            <Article text='Android' />
          </Link>
          <Link to="/Learn/mob">
            <Article text='Mobile dev' />
          </Link>
          <Link to="/Learn/cs">
            <Article text='Computer scince' />
          </Link>

        </div>

      </div>
    </div>
  )
}

export default Main