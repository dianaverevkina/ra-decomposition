import React from 'react'

export const Banner = ({ img }) => {
  return (
    <div className='banner'>
      <img src={img} alt="Баннер рекламы" />
    </div>
  )
}
