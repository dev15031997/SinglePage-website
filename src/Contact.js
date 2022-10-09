import React,{useState} from 'react'

export default function Contact() {

    const [data,setData ] = useState({
      fullname:'',
      phone:'',
      email:'',
      msg:''
    })

  const inputEvent=(event)=>
  {
    const {name,value}=event.target
    
    setData((prev)=>{
        return {
          ...prev,
          [name]:value
        }
    })
  }

  const formSubmit=(e)=>
  {
      e.preventDefault()
      alert(`Welcome ${data.fullname}`)
      
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control"  placeholder="Enter Your Name" name='fullname' value={data.fullname} onChange={inputEvent} autoComplete="off"  required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
              <input type="text" className="form-control"  placeholder="Your Phone Number" name='phone' value={data.phone} onChange={inputEvent}  autoComplete="off" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control"  placeholder="name@example.com" name='email' value={data.email} onChange={inputEvent}  autoComplete="off" required/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label" name='msg' value={data.email} onChange={inputEvent} autoComplete="off">Message</label>
              <textarea className="form-control"  rows="3"></textarea>
            </div>
            <div class="col-12">
             <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
