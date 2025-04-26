import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function AddContact() {
const [name, setName]= useState ("")
const [email, setEmail]= useState ("")
const [phone, setPhone]= useState ("")
const [address, setAddress]= useState ("")
const navigate = useNavigate ()

async function handleSubmit (e) {
    e.preventDefault();

    const newUser={
        name: name,
        email: email,
        phone: phone,
        address: address,
    }
    const url = "https://playground.4geeks.com/contact/agendas/rafael/contacts"
    const options = {
        method: "POST", 
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(newUser)
    }
    const response = await fetch (url, options)
    const data = await response.json()
    navigate ("/")
}

    return (
        <div className="container">
            <h2 className= "text-center">add new contact</h2>

            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />

                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  />

                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />

                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">address</label>
                    <input type="text" className="form-control" id="address" value={address} onChange={(e)=>{setAddress(e.target.value)}} />

                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>

                <div>
                    <button type="button" class="btn btn-link">or get back to contact</button>
                </div>



            </form>





        </div>
    )

}

export default AddContact