import './Products.scss'
import List from '../../components/List/List'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort]=useState("")
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Catergories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1}></input>
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='2' value={2}></input>
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id='3' value={3}></input>
            <label htmlFor="3">Coats</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min="0" max="1000" onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id='asc' value='asc' name='price' onChange={()=>setSort("asc")}/>
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type='radio' id='desc' value='desc' name='price' onChange={()=>setSort("desc")}/>
            <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} sort={sort} maxPrice={maxPrice}/>
      </div>
    </div>
  )
}

export default Products