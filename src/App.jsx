import { useEffect } from "react";
import { useState } from "react"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
import TotalPrice from "./components/TotalPrice";


export default function App() {
  const [products, setProducts] = useState({
    id:Date.now(),
    name:"",
    category:"",
    price:""
  })

  

  const [productsPge, setProductPage] = useState(JSON.parse(localStorage.getItem("product"))||[])
  function addProducts(event) {
    const {name, value} = event.target;
    const newProduct =  (prevPro => ({
      ...prevPro,
      [name]: value,
    }))
    setProducts(newProduct)
  }

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(productsPge))
  }
  ,[productsPge])

  function hundleClick() {
    if(products.name!="" && products.category!="" && products.price!=""){
      setProductPage(prevPage => [...prevPage, products])
    }
    setProducts({
      id:Date.now(),
      name:"",
      category:"",
      price:""
    })
  }
   
  function deleteProduct(event, prodId) {
    event.stopPropagation()
    setProductPage(oldProd => oldProd.filter(product => product.id != prodId))
   /*  console.log("deleted", prodId) */
  }

  const [inputText, setInputText] = useState("");
  
  const [sub, setSub] = useState(0)
  function substract( price) {
    setSub(prevPrice => prevPrice + +price)
  }

  function resetTotalPrice() {
    setSub(0)
  }

  const [dark, setDark] = useState(false)
  function darkMode() {
    setDark(prevState => !prevState)

  }

  return(
    <div className= {dark ? "darkApp" : "app"}>
      <Navbar darkMode={dark} change= {darkMode}/>
      <TotalPrice totalPrice={sub} click={resetTotalPrice} dark={dark}/>
      <div className="input">
        <input
        className="search"
        type="search"
        placeholder="Search here"
        onChange={(e) => setInputText(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Product Name"
          name="name"
          onChange={addProducts}
          value={products.name}
        />
        <input 
          type="text" 
          placeholder="Category"
          name="category"
          onChange={addProducts}
          value={products.category}
        />
        <input 
          type="number" 
          placeholder="Price"
          name="price"
          onChange={addProducts}
          value={products.price}
        />
        <button className="create" onClick={hundleClick}>Create</button>
      </div>
      {productsPge.filter((product) => {
        return inputText.toLocaleLowerCase() === "" 
          ? product 
          : product.name.toLocaleLowerCase().includes(inputText)
      })
      .map((product, index) => (
        <Product  
          key={index} 
          id={product.id} 
          name={product.name} 
          category={product.category} 
          price={product.price} 
          delete={deleteProduct}
          add={substract}
          dark={dark}
        />
      ))}
    </div>
  )
}