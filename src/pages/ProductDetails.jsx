import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const ProductDetails = () =>{
    const params = useParams()
    const[product,setProduct]=useState({})//for single data use {} ,and for more data use []
    useEffect(()=>{
        const id=params.product_id
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <>
<div className="container my-5">
    <div className="row d-flex justify-content-evenly shadow">
        <div className="col-md-5">
            <img src={product.image} alt={product.title} width={'500'}/>
        </div>
        <div className="col-md-6">
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h3>Category:{product.category}</h3>
            <p>{product.description}</p>
            <div className="my-2">
                <Link to="#" className="btn btn-warning">Add to Cart</Link>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default ProductDetails

