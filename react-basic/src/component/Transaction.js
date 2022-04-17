import Item from "./Item";
import './Transaction.css'
import { v4 as uuidv4 } from 'uuid';


const Transaction = () => {
  const data=[
    {title:"โรงพยาบาล" ,amount:2000},
    {title:"ค่าเดินทาง" ,amount:500},
    {title:"ค่ากิน" ,amount:2000},
    {title:"เงินเดือน" ,amount:20000},
  ]
    return (
      <ul className="item-list">
        {data.map((element)=>{
          // return <Item title={element.title} amount={element.amount}/>
          return <Item {...element} key={uuidv4()}/>
        })}
      </ul>
    );
  }
  export default Transaction;