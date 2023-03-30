import React from 'react'
import './BySkill.css'
import Article from '../../Components/Article'

const BySkill = () => {
  return (
    <div className='main-cont'>

      <div className='txt-cont'>
        <h1 className='grd-txt'>حسب المهارة</h1>
        <p>تعلم مهارة معينة وتطبيقاتها</p>
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
          <Article text='component' />
          <Article text='component' />
        </div>

      </div>
    </div>
  )
}

export default BySkill