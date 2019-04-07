import React from 'react'
import Preview from "../Preview"


const File = ({imagePreview, onImageChange, onDelete}) => {
  const loadPreviewImage = (urls) => {
    if(urls.length<1){
      return ( <div> Image is not Selected </div>)
    }
    else{
      return urls.map( (url, index ) => {
        const { previewUrl } = url
        return (
              <Preview
                       key={index}
                       id={index}
                       url={previewUrl}
                       onDelete={onDelete}
              />
            )
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