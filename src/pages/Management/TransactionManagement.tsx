import React, { useState } from 'react'
import AdminSidebar from '../../components/AdminSidebar'
import { OrderItemType, OrderType } from '../../types'
import { Link } from 'react-router-dom';


const img = 'https://cdn.dribbble.com/users/1787717/screenshots/4199420/media/e3fd411dbec7dd64c122b3cf61171112.jpg?resize=400x0';
const orderItems:OrderItemType[]=[
   {
    name:'Puma Shoes',
    photo:img,
    _id:'vafjhj',
    quantity:4,
    price:20000,
   },
];

const TransactionManagement = () => {
    const [order,setOrder] = useState<OrderType>({
        name:'Santosh Kumar',
        address:'Sipra Revira Indra Puram Ghaziabad - 201014, Uttar Pradesh, India',
        city:'Ghaziabaad',
        state:'Uttar Pradesh',
       country:'India',
       pinCode:201014,
       status:'Processing',
       subtotal:4000,
       discount:1200,
       shippingCharges:0,
       tax:200,
       total:4000+200+0-1200,
       orderItems,_id:'fchgjfvjh',
    })
    const {name,address,city,country,state,pinCode,subtotal,shippingCharges,tax,discount,total,status} = order;

    const updateHandler = () => {
        setOrder(prev=>({...prev, status:prev.status === "Processing" ? "Shipped" : "Delivered",}));
    }

    return (
        <div className='admin-container'>
            <AdminSidebar />
            <main className='product-management'>
              <section style={{padding:'2rem'}}>
                <h2>Order Items</h2>
                {order.orderItems.map(i => (
                  <ProductCart name={i.name} photo={i.photo} _id={i._id} price={i.price} quantity={i.quantity}/>   
                ))}
              </section>
              <article className='shipping-info-card'>
                <h1>Order Info</h1>
                <h5>User Info</h5>
                <p>Name: {name}</p>
                <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>
                <h5>Amount Info</h5>
                <p>Subtotal: {subtotal}</p>
                <p>ShippingCharges: {shippingCharges}</p>
                <p>Tax: {tax}</p>
                 <p>Discount: {discount}</p>
                <p>Total: {total}</p>
                <h5>Status Info</h5>
                <p>Status: <span className={status === 'Delivered'? 'purple' : status === 'Shipped'? 'green' : 'red'}>{status}</span></p>
              <button onClick={updateHandler}>Process Status</button>
              </article>
            </main>
        </div>
    )
}

const ProductCart = ({name,photo,price,quantity,_id,}:OrderItemType) => (
    <div className='transaction-product-card'>
        <img src={photo} alt={name} />
        <Link to={`/product/${_id}`}>{name}</Link>
        <span>${price} X {quantity} = ${price * quantity}</span>
    </div>
)

export default TransactionManagement