import React,{useState} from 'react';
import FormSignup from './Registerpage/FormSignup.js';
import FormSuccess from './Pages/Registerpage/FormSuccess.js';
import './Form.css';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)  ;
    function submitForm(){
        setIsSubmitted(true);
    };
    return (
        <>
    
        <div className="background-image">
                    <img src='img/register.jpg' alt="onlineshopping" className='form-img'/>
                </div>
            <div className='form-container'>
                <span className='close-btn'></span>
                
                {!isSubmitted ? <FormSignup submitForm ={submitForm}/>:
            <FormSuccess />
            }
            </div>  
        </>
    );
};

export default Form;
