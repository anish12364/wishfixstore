import React from 'react';
import Category from "./Pages/Categorys/Category.js";
import Form from './Pages/Registerpage/Form.js';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Login from './Pages/LoginPage/Login.js';
import Products from './Pages//ProductPages/Products.js';
import Homepage from './Pages/Homepage/Homepage.js';
import About from './Pages/About/About.js';
import Navbar from './Components/Navbar/Navbar.js';

function App () {

     return (
        <Router>
         
          <div className='App'>
            <Navbar/>

            <Routes>
            <Route path="/" exact element ={<Homepage />}></Route>
            <Route path="/about" exact element ={<About />}></Route>
            {/* contact
            cart page
            product list page
            product details page
            category page
            privacy policy
            terms and condition
            Login
            Register
            forgot password
            track my order
            my-order */}





            <Route path="/Category" exact element ={<Category />}></Route>
            <Route path="/Register" exact element ={<Form />}></Route>
            <Route path="/:category/:slug" exact element ={<Products/>}></Route>
            <Route path="/Login" exact element ={<Login/>}></Route>
            </Routes>
          </div>
        </Router>
        
     
    );
}                                                                 
  export default App;
  