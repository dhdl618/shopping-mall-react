import React from 'react'
import {useNavigate} from 'react-router-dom'

const ProductCard = ({item}) => {
    const nav = useNavigate()
    const showDetailPage = () => {
        nav(`/product/${item.id}`)
    }
  return (
    <div className='card' onClick={showDetailPage}>
      <img src={item?.img} />
      <div>{item?.choice === true? "Concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard
