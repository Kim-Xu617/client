import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0)
  const [quantity, setQuantity] = useState(0)
  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compressbcs=tinysrgbaw=1600o1lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgbow=16006lazy=load"
  ];
    
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={()=>{setSelectImg(0)}}/>
          <img src={images[1]} alt="" onClick={()=>{setSelectImg(1)}} />
        </div>
        <div className="mainImg">
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, modi! Quod, eius at optio aut non odit quis sed, illo iste ipsam sunt beatae ea id reiciendis necessitatibus voluptatem officiis.</p>
        <div className="quantity">
          <button onClick={()=>{setQuantity(quantity===1?1:quantity-1)}}>-</button>
          {quantity}
          <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/>
          ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/>
            ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/>
            ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product