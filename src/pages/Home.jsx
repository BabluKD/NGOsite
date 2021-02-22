import React from 'react'
import MySlider from '../components/MySlider';
import WhoVR from '../components/WhoVR';
import BannerHelp from '../components/BannerHelp';
import ChooseUs from '../components/ChooseUs';
import OurCauses from '../components/OurCauses';
import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';

const Home  = () => {
    return (
        <>
            <MySlider />
            <WhoVR />
            <BannerHelp />
            <OurCauses />
            <ChooseUs />
            <OurTeam />
            <Footer />
        </>
    )
}

export default Home;