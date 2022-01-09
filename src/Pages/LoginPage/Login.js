import React from "react";
import './Loginbar.css';


class Login extends React.Component {
    state = {
        email: '',
        pawd: ''
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }

    hnadleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div className="main_login">
                <nav className='main-nav' >
                    {/*logo part*/}
                    <a href="Nav">
                        <div className='logo'>
                            <h2>

                                <span>Wishfix</span>store

                            </h2>

                        </div>
                    </a>
                    {/*menu part*/}
                    <div className='menu-link'>
                        <ul >

                            <li>
                                <a href='Register'>Register</a>
                            </li>
                            <li>
                                <a href='Category'>Category</a>
                            </li>
                        </ul>
                    </div>

                </nav>


                <div className="mainloginpage">
                    <div className="loginpage">
                        <div className="heding">
                            <h2>SignIn</h2>
                        </div>
                    </div>
                    <div className="LoginForm">
                        <form onSubmit={this.handleSubmit}>
                            <input type='email' name='email' placeholder='email' required onChange={this.handleChange} />
                            <input type='password' name='pawd' placeholder='password' required onChange={this.handleChange} />
                            <div className="loginbutton">
                                <a href="Category">
                                    Log In
                                </a>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}
export default Login;