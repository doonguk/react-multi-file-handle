import React from 'react'
import './Preview.css'

const Preview = ({id, url, onDelete}) => {
  return (
      <div className='img-box'>
        <div className='close-btn' onClick={() => onDelete(id)}>&times;</div>
        <img src={url} alt='preview'/>
      </div>
  )
}

export default Preview