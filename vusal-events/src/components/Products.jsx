import React, { useState } from 'react'
import products from '../products'
function Products() {
    let [myProducts,setMyproduct] = useState(products)
    let [newProductName,setNewProductName] = useState("")
    let [newProductPrice,setNewProductPrice] = useState("")
    function handleDelete(id){
        let filtered = myProducts.filter(product =>(id != product.id))
        setMyproduct(filtered) 
    }
    function handleSubmit(e){
        
        e.preventDefault()
        if (newProductName.trim() === "" || newProductPrice == 0 || newProductPrice === "") {
            alert("Məhsul adı yaxud qiyməti boş ola bilməz!");
            return;
        }
        let newProduct = {
            id:myProducts.length + 1,
            name:newProductName,
            price: newProductPrice
        }
        setMyproduct([...myProducts,newProduct])
        setNewProductName("")
        setNewProductPrice("")

    }
    function handleClear(){
        setMyproduct([])
    }
    function sortPrices() {
        let sortedList = [...myProducts].sort((a, b) => a.price - b.price);
        setMyproduct(sortedList);
    }
    
  return (
    <div>
        <button onClick={sortPrices}>Sort</button>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" value={newProductName} onChange={(e)=>setNewProductName(e.target.value)} placeholder='product name' />
            <input type="number"  value={newProductPrice} onChange={(e)=>setNewProductPrice(e.target.value)} placeholder='product price' min={0} max={2000}/>
            <button>Add</button>
            <br />
        </form>
      <ol>
        {
            myProducts.map(product =>(
                <li key={product.id}>{product.name} --- {product.price} $<button onClick={()=>handleDelete(product.id)}>delete</button></li>
            ))
        }
      </ol>
      <button onClick={()=>handleClear()}>Clear All</button>
    </div>
  )
}

export default Products
