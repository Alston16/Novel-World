import React from 'react';

class HomeNovel extends React.Component {
    redirect = () => {
        window.location.href = "/novel?name=" + this.props.novel_name
    }
    render() {
        var div_style = {
            width: "80%",
            height: "10%",
            padding: "15px",
            margin: "15px",
            textAlign: "center",
            backgroundColor: (this.props.rank===1)?"#FFD700":(this.props.rank===2)?"#C0C0C0":(this.props.rank===3)?"#CD7F32":"#e6abff",
            borderRadius: "10px",
            cursor:"pointer",
            display:"flex",
            justifyContent:"space-between"
        };
        var img_style = {
            width: "60px",
            height: "80px",
            borderRadius: "10px",
        };
        var h4_style = {
            margin: "5px"
        };
        var rating_style = {
            margin: "5px",
            textAlign:"right"
        };
        return (
            <div className={"rank_novel_card"} style={div_style} onClick={this.redirect}>
                <div style={{display:"flex"}}>
                <h4 className={"rank_novel_ranking"} style={h4_style}>{this.props.rank}</h4>
                <img className={"rank_novel_cover"} src={this.props.cover_image.toString('base64')} style={img_style} alt="Novel Cover"/>
                <h4 className={"rank_novel_name"} style={h4_style}>{this.props.novel_name}</h4>
                </div>
                <h4 className={"rank_novel_rating"} style={rating_style}>{this.props.rating}</h4>
            </div>
        );
    }
}
export default HomeNovel;