import { useNavigate } from 'react-router';
import './Navbar.css';

export const Navbar = () => {
    let navigate = useNavigate();
    const  handleClick = (slug) => {
        navigate(`/${slug}`)

    };
    return(
        <div className='maindivision'>

                <h2> Wishfix</h2>

                <div className="pagelink">

                    <ul>

                      <li>
                          <a href='Login'
                          onClick={() => handleClick('Login')}>Login</a>
                      </li>
                      <li>
                          <a href='Register'onClick={() => handleClick('Register')}>Register</a>
                      </li>

                      <li>
                          <a 
                          onClick={() => handleClick('')}>Home</a>
                      </li>
                      <li>
                          <a onClick={() => handleClick('about')}>About</a>
                      </li>
                      <li>
                          <a onClick={() => handleClick('contact')}>Contact</a>
                      </li>
                      

                    </ul>
                    
                </div>

            
            </div>
    )
}

export default Navbar;