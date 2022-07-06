import './cart.css';

function Cart({ cart, setCart }) {

  return (
    <>
    {
        <div style={{height:'100vh',width:'100vw',background:'transparent',position:'absolute'}}>
            <div className={cart !== false ? 'cart_opener cart_container' : 'cart_closer cart_container'}>
                <div className='cart_header'>
                    <span onClick={()=> setCart(!cart)} className='icon'>&#10060;</span>
                    <h2>Your Cart (2)</h2>
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default Cart