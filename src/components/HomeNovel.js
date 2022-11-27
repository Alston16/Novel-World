import React from 'react';

class HomeNovel extends React.Component {
    redirect = () => {
        window.location.href = "/novel?name=" + this.props.novel_name
    }
    genre_redirect = (event) => {        
        window.location.href = "/genre?genre=" + this.props.genre
        event.stopPropagation();
    }
    render() {
        var div_style = {
            width: "230px",
            height: "360px",
            padding: "15px",
            margin: "15px",
            textAlign: "center",
            backgroundColor: "#e6abff",
            borderRadius: "10px",
            cursor:"pointer"
        };
        var img_style = {
            borderRadius: "10px",
            height: "240px",
            width: "180px"
        };
        var con_style={
            height: "64.98px",
            width:"190px",
            overflow:"hidden"
        };
        var h4_style = {
            margin: "5px"
        };
        var p_style = {
            margin: "0px",
            backgroundColor: "#99FFFF",
            width: "max-content",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "50px",
        };
        return (
            <div className={"novel_card"} style={div_style} onClick={this.redirect}>
                <img className={"novel_cover"} src={this.props.cover_image.toString('base64')} style={img_style} alt="Novel Cover"/>
                <div className={"novel_name_container"} style={con_style}>
                <h4 className={"novel_name"} style={h4_style}>{this.props.novel_name}</h4>
                </div>
                <p className={"novel_genre"} style={p_style} onClick={this.genre_redirect}>{this.props.genre}</p>
            </div>
        );
    }
}
export default HomeNovel;