import Transaction from "./component/Transaction";
import './App.css'
import FormComponent from "./component/FormComponent";
import { useState,useEffect, useReducer } from "react";
import DataContext from "./data/DataContext.js";
import ReportComponent from "./component/ReportComponent";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

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

  //reducer state
  const [showReport,setShowReport]=useState(false)
  const reducer = (state,action)=>{
    switch(action.type){
      case "SHOW" : 
        return setShowReport(true)
      case "HIDE" :
        return setShowReport(false)
    }
  }
  const [result,dispatch] =useReducer(reducer,showReport)
  return (
     <DataContext.Provider value={
       {
        income:reportIncome,
        expense:reportExpense
       }
     }>
       <div className="container">
        <h1 style={design}>โปรแกรม บัญชี รายรับ รายจ่าย</h1>
        <Router>
        <div>
          <ul className="horizontal-menu">
            <li>
              <Link to="/">ข้อมูลบัญชี</Link>
            </li>
            <li>
              <Link to="/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<ReportComponent/>}/>
            <Route exact path="/insert" element={
            <div>
              <FormComponent onAddItem={onAddNewItem}/>
              <Transaction items = {items}/>
              </div>
            }/>
              
            {/* <Route path="/insert">
              <FormComponent onAddItem={onAddNewItem}/>
              <Transaction items = {items}/>
            </Route> */}
          </Routes>
        </div>
        </Router>
        
      </div>
      {/* <div align="center">
        <h1>{result}</h1>
        <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
      </div> */}
     </DataContext.Provider>
    
    );
}
export default App;
