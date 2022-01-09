import React from 'react';
import useForm from './Pages/Registpage/useForm';
import validate from './Pages/Registerpage/validateinfo';
import './Form.css';

const FormSignup = (submitForm) => {
    const{handleChange, values,handleSubmit,errors} =
     useForm(
         submitForm,
        validate);
    return (
       <div className='form-content-rights'>
           <form className='form'onSubmit ={handleSubmit}>
               <h1>Register</h1>
        
           <div className='form_inputs'>
               <label htmlfor='username'
               className='form_label'>
                   Username :
                   </label>
                   <input
                         id='username'
                        type='text'
                        name='username'
                        className='form-input'
                        placeholder='Enter your username'
                        value={values.username}
                        onChange={handleChange}
                        />
                        {errors.username && <p>{errors.username}</p>}
               
           </div>
           <div className='form_inputs'>
               <label htmlfor='email'
               className='form_label'>
                   Email :
                    </label>
                   <input
                         id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                        />
                         {errors.email && <p>{errors.email}</p>}
           </div>
           <div className='form_inputs'>
               <label htmlfor='password'
               className='form_label'>
                   Password :
                    </label>
                   <input
                         id='password'
                        type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        />
                         {errors.password && <p>{errors.password}</p>}
           </div>
           <div className='form_inputs'>
               <label htmlfor='password2'
               className='form_label'>
                   Conform Password :
                    </label>
                   <input
                         id='password2'
                        type='password'
                        name='password2'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password2}
                        onChange={handleChange}
                        />
                         {errors.password2 && <p>{errors.password2}</p>}
           </div>
           <button className='form-input-btn ' type='submit'>
               Sign up
           </button>
           <span className='form-input-login'>
               Already have account? Login
               <a href='#'> here</a>
           </span>
           </form>
       </div>

    );
}

export default FormSignup;
