import React from 'react';


export default function ShoppingCard(){
    const addToCard = (item) => {

    }
    const products = [
        {   id:1,
            name: "product A"
        },
        {   id:2,
            name: "product B"
        },
        {   id:3,
            name: "product C"
        }
    ]
    return(
        <div>
    <h2>Shopping Card</h2>
    <h2>Product List</h2>

    <ul>
        {products.map((product)=>(
           <li key={product.id}>
        {product.name} <button onClick={()=>addToCard(product)}>Add to Card</button>
           </li> 
        ))}
    </ul>

        </div>
    )
}