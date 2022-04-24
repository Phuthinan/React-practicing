import Transaction from "./component/Transaction";
import './App.css'
import FormComponent from "./component/FormComponent";
import { useState } from "react";

function App() {
  const design = {color:'red',textAlign:"center",fontSize:"1.5rem"}
  const initData=[]
  const [items,setItems]=useState(initData)
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
    <div className="container">
      <h1 style={design}>บัญชี รายรับ รายจ่าย</h1>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {items}/>
    </div>
    );
}
export default App;
