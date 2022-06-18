import React from 'react'

export const Button = (props) => {
  return  ( 
     <div>
        <button className={`btntyp-btn ${props.type}`}>{props.text}</button> 
    </div>
  )
}
