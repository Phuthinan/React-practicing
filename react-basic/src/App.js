import Transaction from "./component/Transaction";
import './App.css'
import FormComponent from "./component/FormComponent";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const design = {color:'red',textAlign:"center",fontSize:"1.5rem"}
  const initData=[
    {id:1,title:"โรงพยาบาล" ,amount:2000},
    {id:2,title:"ค่าเดินทาง" ,amount:500},
    {id:3,title:"ค่ากิน" ,amount:2000},
    {id:4,title:"เงินเดือน" ,amount:20000},
  ]
  const onAddNewItem = (newItem)=>{
    console.log("send:  "+newItem)
  }
  return (
    <div className="container">
      <h1 style={design}>บัญชี รายรับ รายจ่าย</h1>
      <FormComponent onAddItem={onAddNewItem}/>
      <Transaction items = {initData}/>
    </div>
    );
}
export default App;
