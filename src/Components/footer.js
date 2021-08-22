import facebook from '../Images/facebook.png'
import insta from '../Images/insta.png'
import linked from '../Images/linked.png'
import twitter from '../Images/twitter.png'


function Footer() {    


return(


<>

<div className='footerFlex'>
    <div className='FooterCol'>
    <h3>Company Name</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellat odio minima nihil possimus beatae asperiores fugiat porro, ad cumque consequatur, id repellendus nisi. Ab beatae nulla reiciendis tenetur quis.</p>


    </div>

    <div className='FooterCol'>
    <h3>PRODUCTS</h3>
    <p>Pizza S-M-L</p>
    <p>Burgers (All Flavors)</p>
    <p>Fries S-M-L</p>
    <p>Pasta Special Flavours</p>


    </div>

    <div className='FooterCol'>
    <h3>Locations</h3>
    <p>Lahore</p>
    <p>Faisalabad</p>
    <p>Karachi</p>
    <p>Islamabad</p>
    <p>Sialkot</p>


    </div>

    <div className='FooterCol'>
    <h3>Social Links</h3>
    <div className='SocialIcons'>

    <a href='https://www.facebook.com/'><img src={facebook}></img></a>   
    <a href='https://www.instagram.com/'><img src={insta}></img></a>
    <a href='https://www.linkedin.com/'><img src={linked}></img></a>
    <a href='https://www.twitter.com/'><img src={twitter}></img></a>
    


    </div>


    </div>



</div>


</>



)



}



export default Footer;