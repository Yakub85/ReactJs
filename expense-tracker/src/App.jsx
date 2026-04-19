import {useState,useEffect} from "react"
import ExpenseForm from "./ExpenseForm"
import ExpenseList from "./ExpenseList"
import './App.css'

function App() {
  const[expenses,setExpenses]=useState(()=>{
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved):[]
  });

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])

  const addExpenses = (expenses) =>{
    setExpenses((prev)=> [...prev,expenses])
  }
  const deleteExpense = (id) =>{
    const updateExpense =(prev)=>prev.filter((item)=>item.id !==id)
    setExpenses(updateExpense)
  }

  const totalAmount = expenses.reduce((sum,item)=>{
    return sum+item.amount;
  },0);

  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm onAddExpenses={addExpenses}/>
      <h3 className="total">Total Expense: ₹{totalAmount.toFixed(2)}</h3> 
      <ExpenseList expenses={expenses} onDelete={deleteExpense}/> 
	</div>
  )
}
export default App
