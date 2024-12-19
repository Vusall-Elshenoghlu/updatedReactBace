import React, { useEffect, useState } from 'react'
import axios from "axios"
function FourthTask() {
    let [suppliers, setSuppliers] = useState([])
    let [show, setShow] = useState(true)
    let [newSupplierName, setNewSupplierName] = useState("")
    let [newStock, setNewStock] = useState("")

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

    async function handleDelete(id) {

        await axios.delete("https://northwind.vercel.app/api/products/" + id)
        let filtered = suppliers.filter(supplier => supplier.id !== id)
        setSuppliers(filtered)

    }
    async function handleSubmit(e) {
        e.preventDefault()
        let newSupplier = {
            name: newSupplierName,
            unitsInStock: newStock,
            discontinued: false
        }
        let response = await axios.post("https://northwind.vercel.app/api/products", newSupplier)
        setSuppliers([...suppliers, response])
        getData()
    }

    return (

        <div>
            <form onSubmit={(e) => handleSubmit(e)}>

                <input type="text" onChange={(e) => setNewSupplierName(e.target.value)} value={newSupplierName} />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    value={newStock}
                    onChange={(e) => setNewStock(e.target.value)}/>
                    <button>Add</button>
            </form>
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
                                        <td style={{ backgroundColor: supplier.discontinued == true ? "red" : "green" }}>{supplier?.discontinued}</td>
                                        <td style={{ color: supplier.unitsInStock > 10 ? "green" : "black" }}>{supplier.unitsInStock}</td>
                                        <td><button onClick={() => handleDelete(supplier.id)}>Delete</button></td>
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
