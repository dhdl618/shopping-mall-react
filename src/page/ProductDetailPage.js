import React from 'react'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Container, Row, Col, Dropdown} from 'react-bootstrap'

const ProductDetailPage = () => {
  let {id} = useParams()
  const [product, setProduct] = useState()
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/dhdl618/shopping-mall-react/products/${id}`
    let response = await fetch(url)
    let data = await response.json()

    setProduct(data)
  }
  useEffect(() => {
    getProductDetail()
  },[])
  return (
    <Container className='product-detail-container'>
      <Row>
        <Col className='product-img'><img src={product?.img} /></Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <div className='product-choice'>{product?.choice === true ? "Concious choice" : ""}</div>
          <div className='product-new'>{product?.new === true ? "신제품" : ""}</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant='secondary' id="dropdown">사이즈</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>S</Dropdown.Item>
                <Dropdown.Item>M</Dropdown.Item>
                <Dropdown.Item>L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <button className='add-item-btn'>추가</button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetailPage
