import React from 'react'
import "./List.scss"
import Card from '../Card/Card'


const List = ({catId,sort,maxPrice})=>{
    const data=[
        {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgbSw=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress6cs=tinysrgb&w=1600",
            title: "Long sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgblw=1600",
            title: "Coat",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compressics=tinysrgblw=1600",
            title: "Skirt",
            oldPrice: 19,
            price: 12,
        },
        {
            id:4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb8w=160",
            title: "Hat",
            oldPrice: 19,
            price: 12,
        },
    ]
    const data2 = data.filter(element=>
        element.price<maxPrice
    )
  return (
    <div className='list'>
        {data2.map(item => 
            <Card item={item}/>
        )}          
    </div>
  )
}

export default List