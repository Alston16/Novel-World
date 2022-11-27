import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';

export default function NotFound() {
    return (
        <div>
            <NavBar />
            <TabsBar />
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{textAlign:"center"}}>
                <h1>404</h1>
                <br/>
                <h1>Page Not Found</h1>
                </div>
            </div>
        </div>
    );
}