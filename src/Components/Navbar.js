import React from "react";


import logo from '../Images/logo4.png'
function Navbar() {
    


return(

<>

<head className="head-flex">
<h2 className='logoHeading'>FoodStreet</h2>


<img  className='logo' src={logo} />

<ul className='ul'>

    <li > <a> Home </a></li>
    <li><a href='#footer'>  About </a></li>
    <li><a> Services </a></li>
   
    <li><a> Sign In </a></li>
    
     <li><a href='#Menu'> Menu/Order</a></li>
    <li ><a> Sign Up </a></li>
    


</ul>

</head>


</>


)




}


export default Navbar;