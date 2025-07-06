
import React from "react"
import { useState } from "react"


export default function HandleChangeCom() {

  const [formData, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  const handlechange = (e) => {

    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))


  }

  const handlesubmit = () => {
    console.log(formData)
  }


  return (
    <div style={{ color: "orange", textAlign: "center" }}>

      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        <input type="text" name="firstname" value={formData.firstname} style={{ border: "1px solid black", width: "400px", height: "30px" }} onChange={handlechange} />

        <input type="text" name="lastname" value={formData.lastname} style={{ border: "1px solid black", width: "400px", height: "30px" }} onChange={handlechange} />

        <input type="text" name="email" value={formData.email} style={{ border: "1px solid black", width: "400px", height: "30px" }} onChange={handlechange} />

        <button type="button" onClick={handlesubmit}>Submit</button>
      </form>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>{formData.firstname}

          {formData.lastname}</h1>

        {formData.email}
      </div>

    </div>
  )
}