import React from 'react'

const Coin = ({name,symbol,price,image}) => {
  return (
    <div className='coin'>
      <h3>{symbol}</h3>
      <p>{name}</p>
      <img src={image} alt="" />
      <h4>₹{price}</h4>
    </div>
  )
}

export default Coin
