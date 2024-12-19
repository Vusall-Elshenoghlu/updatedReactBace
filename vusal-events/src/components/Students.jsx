import React, { useState } from 'react'
import students from '../students'
function Students() {
    let [myStudents,setMyStudents] = useState(students);
    let [newStudentName,setNewStudentName] = useState("")
    function handleDelete(id){
        let filtered = myStudents.filter(student =>student.id != id)
        console.log(filtered);
        setMyStudents(filtered)
    }
    function handleSubmit(e){
        e.preventDefault();
        let newStudent = {
            id: myStudents.length + 1,
            name: newStudentName
        }
        setMyStudents([...myStudents,newStudent])
        
    }    
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" onChange={(e)=>setNewStudentName(e.target.value)} placeholder='student name' />
            <button>Add</button>
        </form>
      <ol>
        {
            myStudents.map(student =>(
                <li key={student.id}>{student.name} <button onClick={()=>handleDelete(student.id)}>delete</button></li>
            ))
        }
      </ol>
    </div>
  )
}

export default Students
