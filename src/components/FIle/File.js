import React from 'react'
import './File.css'


const File = ({imagePreview, onImageChange}) => {
  const loadPreviewImage = (urls) => {
    if(urls === []){
      return ( <div> Image is not Selected </div>)
    }
    else{
      return urls.map( url => {
        const { previewUrl , id } = url
        console.log(url)
        return <img key={id} src={previewUrl} alt="preview" />
      })
    }
  }
  return(
      <div>
        <form>
          <input type="file" name="myInput" onChange={onImageChange} multiple/>
        </form>
        <div className='preview'>
          {loadPreviewImage(imagePreview)}
        </div>
      </div>
  )
}

export default File