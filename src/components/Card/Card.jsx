import "./Card.scss";
import {Link} from 'react-router-dom'

import React from 'react'

const Card = ({item}) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew&&<span>New Season</span>}
          <img src={item.img} className="mainImg" alt="item 1" />
          {item.img2&&<img src={item.img2} className="secondImg" alt="item 2" />}
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>

  )
}

export default Card