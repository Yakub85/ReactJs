import ExpenseItem from "./ExpenseItem"
export default function ExpenseList({expenses,onDelete}){
    if(expenses.length===0){
        return <p className="no-expense">Not Item Yet</p>
    }
    return(
        <div className="expense-list">
			{expenses.map((item)=>(
                <ExpenseItem key={item.id} item={item} onDelete={onDelete}/>  
             ))}
		</div>   )
}