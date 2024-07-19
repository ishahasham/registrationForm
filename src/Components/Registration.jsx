import React, { useState } from 'react';

export const Registration = () => {
  const [form, setForm]=useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    organizationName: '',
    organizationSize: '',
    industry: '',
    agreement: false,
  })

  const [submittedData, setSubmittedData] = useState([]);


  const onSubmit =(e)=>{
    e.preventDefault();
    console.log(form)
    setSubmittedData((prevData) => [...prevData, form]);
     // Optionally reset the form after submission
     setForm({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      organizationName: '',
      organizationSize: '',
      industry: '',
      agreement: false,
    });
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    // form
    <div className='main'>
        <div className='signup'>
            <h3>Try <span className='span1'>Sign</span> for 14 days</h3><br />
            <p> Already have a Formstack Account? <span className="span2">Start your trial in app   <i class="fa-solid fa-greater-than"></i> </span></p>
        </div>
        <form className='container' onSubmit={onSubmit}>
        <div className='form1'>
           <div className='in1'>
           <label htmlFor="first" >FIRST NAME</label><br />
           <input type="text" name='firstname' placeholder='John' className='form-control'  value={form.firstname}
              onChange={handleChange} />
           </div>
           <div className='in2'>
           <label htmlFor="Last">LAST NAME</label><br />
           <input type="text" name='lastname' placeholder='Doe' className='form-control'  value={form.lastname}
              onChange={handleChange} />
           </div>
            </div>
            <br />
          <div className='form2'>
            <label htmlFor="email">WORK EMAIL</label><br />
            <input type="email" name='email' placeholder='johndoe@gmail.com' className='form-control'  value={form.email}
              onChange={handleChange} /><br />
            <label htmlFor="password">PASSWORD</label><br />
            <input type="password" name='password' placeholder='Password' className='form-control'  value={form.password}
              onChange={handleChange} /><br />
            <label htmlFor="organization">ORGANIZATION NAME</label><br />
            <input type="text" name='organizationName' placeholder='ABC Organization' className='form-control'  value={form.organizationName}
              onChange={handleChange} /><br />
            <label htmlFor="organizationSize">ORGANIZATION SIZE</label><br />
            <select name="organizationSize" required className='select'  value={form.organizationSize}
              onChange={handleChange} >
                        <option selected="selected" disabled>--SELECT--</option>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                        <option>Option4</option>
                    </select><br />
            <label htmlFor="Industry">INDUSTRY</label><br />
            <select name="industry" required className='select'  value={form.industry}
              onChange={handleChange} >
                        <option selected="selected" disabled>--SELECT--</option>
                        <option>Option1</option>
                        <option>Option2</option>
                        <option>Option3</option>
                        <option>Option4</option>
                    </select>
                  <p class="formstack">Formstack has updated our Terms of Service effective January 4,2023. <br/>
                    We encourage you to read the document in its entirely.</p>
                  <div className='checkbox'>
                    <input type="checkbox"  name='agreement' checked={form.agreement}  onChange={handleChange}    />
                    I understand and agree to the <a href="#">Formstack,privacy,policy,Software</a> <br />
                    <a href="">Services Agreement</a> and <a href="">Acceptable Use Policy.</a>
                  </div><br /><br />
                  <div className='button1'>
                        <button>Start free trail</button>
                    </div>
            </div>         
        </form><br /><br />
        {/* now rendering submitted data */}
        <div className='data'>
          <h3>DATA:</h3>
          <ul>{submittedData.map((e,i)=>(
            <li key={i}>
             {e.firstname} {e.lastname}, {e.email}, {e.organizationName}
            </li>
          ))}
          </ul>
        </div>
    </div>
  )
}


