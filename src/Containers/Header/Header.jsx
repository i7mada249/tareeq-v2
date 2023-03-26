import React from 'react'
import './Header.css'
import img from '../../assets/react.svg'

const Header = () => {
  return (
    <div className="header">
        <div className="content">
            <h1 className="tareeq grd-txt">طريق</h1>
            <h1 className='expl'>رحلتك تبدأ من هنا</h1>
            <p className="tagline">يساعدك الموقع على معرفة خارطة طريق مجالك التقني ومهارتك التي تريد تعلمها بصورة سهلة ومبسطة بالإضافة الى تزويدك بأفضل محتوى تعليمي من الإنترنت حتى تكون رحلتك أسهل</p>
        </div>

        <div className="img">
            <img src={img} alt="main" />
        </div>
    </div>
  )
}

export default Header