import React, {useState} from 'react'
import Popup from './Popup';
import './Page1.css'

const Page1=()=>{
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = () => {
      setIsPopupOpen(true)
    }
  
    const closePopup = () =>{
      setIsPopupOpen(false)
    }
    return(
        <div className='main-buuton'>
        <button className='open-button' onClick={openPopup}>Open</button>
        {isPopupOpen && <Popup onClose={closePopup}/>}
    </div>
    )
}

export default Page1;