import React from 'react'

const Button = ({
    children,
    type,
    onClick,
}) => {


  return (
    <div id='root'>
      <button>{children}</button>
    </div>
  
  )
}

export default Button