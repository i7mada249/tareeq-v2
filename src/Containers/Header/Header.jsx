import React from 'react'
import './Header.css'
import img from '../../assets/coding2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (

    <div>
      <div className="header">
        <div className="content">
          <h1 className="tareeq grd-txt">طريق</h1>
          <h1 className='expl'>رحلتك تبدأ من هنا</h1>
          <p className="tagline">يساعدك الموقع على معرفة خارطة طريق مجالك التقني ومهارتك التي تريد تعلمها بصورة سهلة ومبسطة بالإضافة الى تزويدك بأفضل محتوى تعليمي من الإنترنت حتى تكون رحلتك أسهل</p>
          <div className='btns'>
            <button className='scnd-btn'>شارك معرفتك</button>
            <button className='scnd-btn'>لماذا طريق؟</button>
            <button className='main-btn'>إدعم طريق</button>
          </div>
        </div>

        <div className="img">
          <img src={img} alt="main" />
        </div>
      </div>

{/*
      <div className='start-cont'>
        <div className='start'>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
  */}
    </div>
  )
}

export default Header