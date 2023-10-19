import React from 'react'

function Image({image}) {
  return (
    <div>
        <img src={image} alt='' width={'320px'}/>
    </div>
  )
}

export default Image