import React, { useState } from 'react'

import { data } from './data'
import toast from 'react-hot-toast'
const TextGenerator = () => {
    const [value, setValue] = useState("")
    const [mydata, setMydata] = useState([])
    
    const handleGen = (e) =>
    {
        e.preventDefault()
         
          
        if (value)
        {
            if (value > data.length)
            {
                toast.error("Enter length must be less than data length")
            }
            else
            {
                toast.success("Done")
           const newdata = data.slice(0, value)
          setMydata(newdata)
            setValue("")
                
                }
            
            
        }
        else
        {
            toast.error("Enter length must be")
            }
       
        
       
    }
  return (
      <>
          <div className="container">
              <div className="col-lg-5  mx-auto rounded-3 shadow p-3 my-2">
                  <form action="">
                  <label htmlFor="">Enter Number Of Paras</label>
                      <input value={value} onChange={(e)=> setValue(e.target.value)} type="number" placeholder='e.g-4' className='form-control' name="" id="" />
                      <button onClick={handleGen} className="btn btn-success my-1 d-block mx-auto">Enter</button>
                  </form>
                  
              </div>
              <div className="container shadow p-3 rounded-3">
                  {
                      
                      mydata?.map((item, index) =>
                      {
                          return <p key={index}>{item}</p>
                    })
                }
              </div>
          </div>
      </>
  )
}

export default TextGenerator