import './FormComponent.css'
const FormComponent=()=>{
    const inputName = (event)=>{
        console.log(event.target.value)
    }    
    const inputAmount = (event)=>{
        console.log(event.target.value)
    }
    const saveItem = (event) =>{
        event.preventDefault()
        console.log("save")
    }
    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputName}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="+ รายรับ, - รายจ่าย" onChange={inputAmount}/>
                </div>
                <div>
                    <button type="submit" className="btn">บันทึก</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent