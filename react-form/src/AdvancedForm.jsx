import {useState} from 'react'

function AdvancedForm() {
   const [formData,setFormData]=useState({
                                           gender:"",
                                           country:"India",
                                           agree:false
                                           })
       
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
           
    }
    const handleChange=(e)=>{
        const {name, type, value,checked} = e.target;
        setFormData((prev)=>({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2>Form with checkbox, radio and select</h2>
        <label htmlFor="">
            <input 
            type="radio" 
            name='gender' 
            value='Male'
            checked={formData.gender==='Male'} 
            onChange={handleChange}
             />
            Male
        </label>
        <br/>
        <label htmlFor="">
            <input 
            type="radio" 
            name='gender' 
            value='Female' 
            checked={formData.gender==='Female'} 
            onChange={handleChange}
            />
            Female
        </label>
        <br/>
        <label htmlFor="">
            Country:
            <select 
                name="country" 
                id="" 
                value={formData.country}
                onChange={handleChange}
            >
                <option value="India">India</option>
                <option value="Iran">Iran</option>
                <option value="Rassia">Rassia</option>
            </select>
        </label>
        <br/>
        <label>
            <input 
                type="checkbox" 
                name="agree" 
                checked={formData.agree}
                onChange={handleChange} 
            />
            Agree with term & condition
        </label>
        <br/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default AdvancedForm