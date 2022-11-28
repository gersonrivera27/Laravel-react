import React, {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const endpoint = 'http://127.0.0.1:8000/api/gym'
const CreatePerson = () => {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState()
    const [phone, setPhone] =useState()
    const navigate = useNavigate()

    const gym = async (e) => {
      e.preventDefault()
      await axios.post(endpoint,{name : name, lname : lname, gender : gender, age : age, phone: phone})
      navigate('/show')
    }
    

   

  return (
    <div className='text-white'>
    <Link className='btn btn-primary' to= "/show"> <button>Show register</button></Link>
      <h3>Create register</h3>
      <form onSubmit={gym}>
      <div className='mb-3'>
      <label className='form-label'>Name:</label>
      <input
        value={name}
        onChange={(e)=>setName(e.target.value)}
        type='text'
        className='form-control'/>
      </div>

      <div className='mb-3'>
      <label className='form-label'>Last Name:</label>
      <input
        value={lname}
        onChange={(e)=>setLname(e.target.value)}
        type='text'
        className='form-control'/>
      </div>

      <div className='mb-3'>
      <label className='form-label'>Gender:</label>
      <input
        value={gender}
        onChange={(e)=>setGender(e.target.value)}
        type='text'
        className='form-control'/>
      </div>

      <div className='mb-3'>
      <label className='form-label'>Age:</label>
      <input
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        type='number'
        className='form-control'/>
      </div>

      <div className='mb-3'>
      <label className='form-label'>Phone:</label>
      <input
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        type='number'
        className='form-control'/>
      </div>

      <button type='submit' className='btn btn-primary'>Register</button>


      </form>
    </div>
  )
}

export default CreatePerson