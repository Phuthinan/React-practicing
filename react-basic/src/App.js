import Transaction from "./component/Transaction";
import './App.css'
import FormComponent from "./component/FormComponent";
import { useState,useEffect } from "react";
import DataContext from "./data/DataContext.js";
import ReportComponent from "./component/ReportComponent";

function App() {
  const design = {color:'red',textAlign:"center",fontSize:"1.5rem"}
// จำลอง data
  const initData=[
    // {id:1,title:"เงินเดือน",amount:20000},
    // {id:2,title:"ค่าเดินทาง",amount:-300},
    // {id:3,title:"ค่าอาหาร",amount:-2000},
    // {id:4,title:"ค่าเช่า",amount:-5000},
  ]
  const [items,setItems]=useState(initData)

  const [reportIncome,setReportIncome]=useState(0)
  const [reportExpense,setReportExpense]=useState(0)


  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  useEffect(()=>{
    const amounts=items.map(items=>items.amount)
    const income=amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense=amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)*(-1)
    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])
  return (
     <DataContext.Provider value={
       {
        income:reportIncome,
        expense:reportExpense
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
