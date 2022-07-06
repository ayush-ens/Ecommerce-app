import React,{useEffect, useState} from 'react';
import axios from 'axios'
import './Home.css'
import Navbar from '../../components/nav/Navbar';

function Index() {

  const[loader, setLoader] = useState(true)
  const[product, setProduct] = useState(null)

  useEffect( ()=>{
    
    const fetchProduct = () =>{
    // product === null && setLoader(false)
      const url ='https://fakestoreapi.com/products';
      axios.get(url)
      .then((res)=>{setProduct(res.data)});
        //  product !== null && setLoader(true)
    };
    fetchProduct()
    console.log(product);  

    // eslint-disable-next-line react-hooks/exhaustive-deps 
  },[])




  return (
    <div>
      <Navbar />
      {
        loader=== false && 
        <div style={{position:'absolute',textAlign:'center'}}>LOADING..... </div>
      }
      <div className='product'>
      {
        product &&
        product.map(item=>
          <div key={item.id} >
            <img src={item.image} alt={item.title} width='100px' height='120px' loading='lazy'/>
            <h3 style={{color:'green'}}>Rs. {item.price}</h3>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>Add To Cart</button>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Index