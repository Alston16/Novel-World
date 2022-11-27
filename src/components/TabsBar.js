import React from 'react';

export default function TabsBar() {
    const div_style = {
        display: "flex",
        // padding: "10px",
        backgroundColor:"#52639e",

    }
    const a_style = {
        cursor: 'pointer',
        padding: "10px",
        fontSize: "20px",
        overflow:"hidden",
        width:"33%",
        color: "black",
        textDecoration: "none",
        textAlign:"center"
    }
    return (
        <div style={div_style}>
            <a href="/ranking" className={"redirectinglink"} style={a_style}>Ranking</a>
            <a href="/library" className={"redirectinglink"} style={a_style}>Library</a>
            <a href="/classification" className={"redirectinglink"} style={a_style}>Classification</a>
        </div>
    );
}