import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import HomeNovels from '../components/HomeNovels';
// import Carou from '../components/Carousel';

export default function Home() {
    return (
        <div>
            <NavBar />
            <TabsBar />
            {/* <Carou /> */}
            <HomeNovels/>
        </div>
    );
}