import React from 'react'
import './article.css'

const article = ({text}) => {
  return (
    <div>
        <button className='art-btn' >{text}</button>
    </div>
  )
}

export default article