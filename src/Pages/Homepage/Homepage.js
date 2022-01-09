import { useState } from "react";
import { useNavigate } from 'react-router';
import Navbar from "../../Components/Navbar/Navbar";
import TextComponent from "../../Components/TextComponent/TextComponent";

export const Homepage = () => {
    let navigate = useNavigate();
    const  handleClick = (slug) => {
        navigate(`/${slug}`)

    };
    const [firstName, setFirstName] = useState('Prakash');
    setFirstName('Pramod')
    return(
      
       <div className='mainpage'>

            
<div className='Heading'>
    
    <img src='image/bg for ec.jpg' className='images ' />
    <div className="Btn">
    <button type='button'   onClick={handleClick}>Shop now</button>
    </div>
</div>


</div>

)
}
  

export default Homepage;