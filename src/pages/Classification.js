import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import Genres from "../components/Genres";

export default function Classification() {
    return (
        <div>
            <NavBar />
            <TabsBar />
            <Genres />
        </div>
    );
}