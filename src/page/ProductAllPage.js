import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductCard from '../component/ProductCard'
import {useNavigate, useSearchParams} from 'react-router-dom'

const ProductAllPage = () => {
  const nav = useNavigate()
  const [product, setProduct] = useState()
  const [query, setQuery] = useSearchParams()

  const getProducts = async () => {
    let searchQuery = query.get('q') || "" // q로 시작하는 쿼리 가져온다는 의미
    let url = `https://my-json-server.typicode.com/dhdl618/shopping-mall-react/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()

    setProduct(data)
  }

  useEffect(()=> {
    getProducts()
  },[query])

  return (
    <div>
      <Container>
        <Row>
          {product?.map((menu)=>(
          <Col lg={3}>
            <ProductCard item={menu}/>
          </Col>))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAllPage
