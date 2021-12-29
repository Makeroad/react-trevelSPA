import React ,{useState}from 'react'
import Sidbar from'../components/Sidebar';
import Navbar from'../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import Service from '../components/Service';
import { homeObjeOne, homeObjeThree, homeObjeTwo } from '../components/infoSection/Data';
import Footer from '../components/Footer';
const Home=()=> {
    const [isOpen, setIsOpen]= useState
    (false);

    const toggle=()=>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidbar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjeOne}/>
            <InfoSection {...homeObjeTwo}/>
            <Service />
            <InfoSection {...homeObjeThree}/>
            <Footer/>
        </>
    )
}

export default Home;
