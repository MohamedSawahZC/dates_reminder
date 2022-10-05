import React from 'react'

 const DateItem = ({img,name,date}) => {
  return (
    <div className="d-flex border-bottom mx-3">
    <img className="img-avatar" alt="img" src={img} />
    <div className="px-3">
      <p className="d-inline fs-5">{name}</p>
      <p className="fs-6">{date}</p>
    </div>
  </div>
  )
}

export default DateItem;
