import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import "../stylesheets/Show.css";


const endpoint = 'http://127.0.0.1:8000/api'
const ShowPerson = () => {
    const [person, setPerson] = useState([])
    useEffect(() => {
        getAllPerson()
    },[])


    const getAllPerson =  async() =>{
      const response =  await axios.get(`${endpoint}/gyms`) 
      setPerson(response.data)

    }
    const deletePerson = async (id) =>{
        axios.delete(`${endpoint}/gym/${id}`)
        getAllPerson()


    }

  return (
    <div>
        <div className='d-grip gap-2'>

        </div>

        <table className='table table-striped'>
            <thead className='bg-primary text-white'>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Edit/Delete</th>
            </tr>


            </thead>

            <tbody className='bg-white'>
            {person.map ( (person) =>(
                <tr  key={person.id}>
                <td>{person.name}</td>
                <td>{person.lname}</td>
                <td>{person.gender}</td>
                <td>{person.age}</td>
                <td>{person.phone}</td>
                <td>
                    <Link to ={`/edit/${person.id}`} className='btn btn-warning'>Edit</Link>
                    <button onClick={()=>deletePerson(person.id)} className='btn btn-danger'>Delete</button>
                </td>

                </tr>

            ))}

            </tbody>
        </table>
        <Outlet/>
    </div>
  )
}

export default ShowPerson