import {useState} from 'react'

function Student() {
    const [student,setStudent]=useState({
        name:"John",
        grade:"A",
        city:"Lucknow"
    });

    const changeCity = ()=>{
        setStudent({...student,city:"Delhi"})
    }
  return (
    <div>
        <h3>Name : {student.name}</h3>
        <h3>Grade : {student.grade}</h3>
        <h3>City : {student.city}</h3>
        <button onClick={changeCity}>Change City</button>
    </div>
  )
}

export default Student