import Item from "./Item";
import './Transaction.css'
import DataContext from "../data/DataContext.js";

const Transaction = (props) => {
    const {items} =props
    return (
      <div>
        <ul className="item-list">
        {items.map((element)=>{
          // return <Item title={element.title} amount={element.amount}/>
          return <Item {...element} key={element.id}/>
        })}
      </ul>
      <DataContext.Consumer>
        {value=><p>{value}</p>}
      </DataContext.Consumer>
      </div>
    );
  }
  export default Transaction;