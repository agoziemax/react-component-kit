import React from 'react'
import { useState } from 'react'
function Accordion({items}) {

  const [content, showContent] = useState(false)

const renderedItems = items.map((item, index) =>{
  return <div key={index}>
    <h1>{item.label}</h1>
    <p>{item.content}</p>
  </div>
})


  return (
    <div>
     {renderedItems}
    </div>
  )
}

export default Accordion
