import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";

const endpoint = 'http://127.0.0.1:8000/api/gym/'


const EditPerson = () => {
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState()
    const [phone, setPhone] =useState()
    const navigate = useNavigate()
    const {id} = useParams()



    const update = async (e) =>{
        e.preventDefault()
            await axios.put(`${endpoint}${id}`,{
            name : name,
            lname : lname,
            gender : gender,
            age : age,
            phone : phone

        })
        navigate('/show')

    }

    useEffect(() =>{
        const getNameById =async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLname(response.data.lname)
            setGender(response.data.gender)
            setAge(response.data.age)
            setPhone(response.data.phone)
        }
        getNameById()
    },[])


  return (
    <div className='text-white'>
    <h3>Edit register</h3>
    <form onSubmit={update}>
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

export default EditPerson