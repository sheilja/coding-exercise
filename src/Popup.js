import React, {useEffect,useState} from 'react'
import './Popup.css'


const Popup = (props) =>{
    const [data,setData] =useState(null)
    useEffect(()=>{
        const fetchMessage=async ()=>{
            const response = await fetch('http://localhost:5000/api/data');
            const result = await response.json();
            setData(result.message);
        }
        fetchMessage()
    },[])
    return <>
    <div className='popup-background'>
        <div className='popup'>
            {data}
            <button className='close-button' onClick={props.onClose}>CLOSE</button>
        </div>
    </div></>
}

export default Popup