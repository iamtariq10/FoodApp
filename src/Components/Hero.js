import chef from '../Images/chef.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hero() {

    const notify = () => toast.warn('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });("Thanks for ordering!");
    
return(
<>

<div className='heroFlex'>
<div className='HeroText'>
<h1>Order Food</h1>
<span></span>
<h1 className='redText'>You Love</h1>
<button onClick={notify}>ORDER</button>


</div>
<img className='chefLogo' src={chef} / >



</div>


</>


)    

}

export default Hero;

