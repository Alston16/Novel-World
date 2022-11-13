import React from 'react';

export default function TabsBar() {
    const div_style={
        display:"flex",
        padding:"10px"
    }
    const a_style={
        cursor: 'pointer',
        marginLeft:"20px",
        marginRight:"20px"
    }
    return (
        <div style={div_style}>
            <a href="/ranking" style={a_style}>Ranking</a>
            <a href="/library" style={a_style}>Library</a>
            <a href="/classification" style={a_style}>Classification</a>
        </div>
    );
}