import './App.css';
import React from 'react';
import Navbar  from './Components/Navbar';
import Hero from './Components/Hero';
import HeroUnderline from './Components/HeroUnderline';
import ShowCard from './Components/Resturants/ShowCards'
import Headliner from './Components/CardHeadliner';
import Footer from './Components/footer';
import 'react-toastify/dist/ReactToastify.css';
import Copyright from './Components/copyright';
import { ToastContainer, toast } from 'react-toastify';




function App() {






 
  return (
   <>
    
    <Navbar/>
    <Hero />
    <HeroUnderline />
    <Headliner />
    <ShowCard />
    <Footer />
    <Copyright/>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
    




   </>
  );
}

export default App;
