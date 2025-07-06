
import React, { useState } from "react";

export default function HandleBlurCom() {

    const [formdata, setformdata] = useState({
        firstname: "",
        lastname: "",
    })

    let tempvalue = '';

    const handlechange = (e) => {
        tempvalue = e.target.value;
    }

    const handleblur = (field) => {

        setformdata((prev) => ({ ...prev, [field]: tempvalue }));
    }

    console.log(formdata)


    return (
        <div >

            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                <input type="text" name="firstname" style={{ border: "1px solid black", width: "200px", height: "20px" }} onChange={handlechange} onBlur={() => handleblur('firstname')} />

                <input type="text" name="lastname" style={{ border: "1px solid black", width: "200px", height: "20px" }} onChange={handlechange} onBlur={() => handleblur('lastname')} />
            </form>

        </div>
    )
}