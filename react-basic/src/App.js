import Transaction from "./component/Transaction";
import './App.css'
import FormComponent from "./component/FormComponent";
import { useState } from "react";
import DataContext from "./data/DataContext.js";
import ReportComponent from "./component/ReportComponent";

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
     <DataContext.Provider value={
       {
        income:50000,
        expense:-8000
       }
     }>
       <div className="container">
        <h1 style={design}>บัญชี รายรับ รายจ่าย</h1>
        <ReportComponent/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
     </DataContext.Provider>
    );
}
export default App;
