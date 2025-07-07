import { useState } from 'react'

function App() {
  const [formdata, setformdata] = useState({

    firstname: "",
    lastname: "",
    email: "",
  })

  const handlechange = (e) => {
    e.preventDefault();
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  }

  console.log(formdata);

  const handlesubmit = function (e) {
    e.preventDefault();

    fetch("http://localhost:5000/submit", {
      method: "PoST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(formdata)
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
  }


  return (
    <div className='mx-auto w-1/2 mt-20'>

      <form className='flex flex-col gap-2 px-10 py-10'>

        <label htmlFor="firstname">Firstname</label>
        <input type="text" name='firstname' className='w-80 h-12 rounded-md border' onChange={handlechange} />

        <label htmlFor="lastname">Lastname</label>
        <input type="text" name='lastname' className='w-80 h-12 rounded-md border' onChange={handlechange} />

        <label htmlFor="Email">Email</label>
        <input type="text" name='email' className='w-80 h-12 rounded-md border' onChange={handlechange} />

        <button className='w-80 h-12 rounded-md border' onClick={handlesubmit}>Submit</button>

      </form>

    </div>
  )
}

export default App
