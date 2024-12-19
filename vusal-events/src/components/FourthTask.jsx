import React, { useEffect, useState } from 'react'
import axios from "axios"
function FourthTask() {
    let [suppliers, setSuppliers] = useState([])
    let [show, setShow] = useState(true)

    function getData() {
        axios.get("https://northwind.vercel.app/api/products")
            .then(respo => {
                setSuppliers(respo.data)
                setShow(false)
            })

    }
    useEffect(() => {
        getData()
        console.log(suppliers)
    }, [])

    async function handleDelete(id){
       
     await   axios.delete("https://northwind.vercel.app/api/products/"+id)
       let filtered= suppliers.filter(supplier=>supplier.id!==id)
        setSuppliers(filtered)

    }

    return (
        <div>

            {
                show == true ? (<div className="loader"></div>) : (
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>discontinued</th>
                                <th>unitsInStock</th>
                            </tr>

                        </thead>

                        <tbody>
                            {

                                suppliers.map(supplier => (
                                    <tr key={supplier.id}>
                                        <td>{supplier.name}</td>
                                        <td style={{backgroundColor:supplier.discontinued == true ? "red" : "green"}}>{supplier?.discontinued}</td>
                                        <td style={{ color: supplier.unitsInStock > 10 ? "green" : "black" }}>{supplier.unitsInStock}</td>
                                        <td><button onClick={ ()=>handleDelete(supplier.id)}>Delete</button></td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                )
            }

        </div>
    )
}

export default FourthTask
