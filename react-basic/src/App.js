
const Title =()=><h1>โปรแกรมรายรับ รายจ่าย</h1>
const Description =()=><p>บันทึกข้อมูลในแต่ละวัน</p>

const Item = ()=><li>ค่าเดินทาง <span>-200</span></li>

const Transaction = () => {
  return (
    <ul>
      <Item/>
      <li>เงินเดือน <span>+20000</span></li>
      <li>อาหาร <span>-300</span></li>
    </ul>
  );
}
function App() {
  return (
    <div>
      <Title/>
      <Description/>
      <Transaction/>

    </div>
    );
}
export default App;
