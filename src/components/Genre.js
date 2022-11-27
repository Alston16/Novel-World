import React from 'react';

class Genre extends React.Component {
    redirect = () => {
        window.location.href = "/genre?genre=" + this.props.genre
    }
    render() {
        var p_style = {
            margin: "15px",
            backgroundColor: "#99FFFF",
            width: "max-content",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "50px",
            cursor:"pointer",
        };
        return (
            <div onClick={this.redirect}>
                <p className={"novel_genre"} style={p_style}>{this.props.genre}</p>
            </div>
        );
    }
}
export default Genre;