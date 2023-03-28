import React from 'react'
import './ByRole.css'
import Article from '../../Components/Article'

const Main = () => {
  return (


    <div className='main-cont'>

      <div className='txt-cont'>
        <h1 className='grd-txt'>حسب المجال</h1>
        <p>تعلم عن مجال معين وطريقة اتقانه بكافة متطلباته ومهاراته</p>
      </div>

      <div className='layout'>

        <div className='container'>
          <Article text='component' />
          <Article text='component' />
          <Article text='component' />
          <Article text='component' />
          <Article text='component' />
          <Article text='component' />
          <Article text='component' />
        </div>

      </div>
    </div>
  )
}

export default Main