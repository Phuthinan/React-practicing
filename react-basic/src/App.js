import Transaction from "./component/Transaction";


function App() {
  const design = {color:'red',textAlign:"center",fontSize:"1.5rem"}
  return (
    <div>
      <h1 style={design}>รายรับ รายจ่าย</h1>
      <Transaction/>
    </div>
    );
}
export default App;
