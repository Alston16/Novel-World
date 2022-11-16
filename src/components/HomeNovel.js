import React from 'react';

class HomeNovel extends React.Component {
    redirect = () => {
        window.location.href = "/novel?name=" + this.props.novel_name
    }
    render() {
        var div_style = {
            width: "190px",
            height: "300px",
            padding: "15px",
            margin: "15px",
            textAlign: "center",
            backgroundColor: "Gainsboro",
            borderRadius: "10px",
            cursor:"pointer"
        };
        var img_style = {
            borderRadius: "10px",
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
            <div className={"home_page_novel_card"} style={div_style} onClick={this.redirect}>
                <img className={"home_page_novel_cover"} src={this.props.cover_image} style={img_style} alt="Novel Cover"/>
                <h4 className={"home_page_novel_name"} style={h4_style}>{this.props.novel_name}</h4>
                <p className={"home_page_novel_genre"} style={p_style}>{this.props.genre}</p>
            </div>
        );
    }
}
export default HomeNovel;