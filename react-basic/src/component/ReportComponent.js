import DataContext from "../data/DataContext";

const ReportComponent=()=>{
    return(
        <div>
            <DataContext.Consumer>
                {context=><p>รายรับ: {context.income} รายจ่าย: {context.expense}</p>}
            </DataContext.Consumer>
        </div>
    );
}
export default ReportComponent