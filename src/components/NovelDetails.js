import React from 'react';

class NovelDetails extends React.Component {
    render() {
        var cover_img_style = {
            margin: "40px",
            width: "360px",
            height: "480px",
        };
        var novel_details_style = {
            marginTop: "40px",
            height: "480px",
        };
        var rating = this.props.rating
        var button_style = {
            margin: "30px",
            padding: "15px",
            paddingRight: "30px",
            paddingLeft: "30px",
            borderRadius: "45px",
            backgroundColor: "cyan"
        }
        var genre_style = {
            marginBottom: "20px",
            backgroundColor: "#99FFFF",
            width: "max-content",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "50px",
        };
        return (
            <div>
                <div style={{ display: "flex" }}>
                    <img src={this.props.cover_image} style={cover_img_style} alt="Novel Cover"/>
                    <div style={novel_details_style}>
                        <h1>{this.props.novel_name}</h1>
                        <h4>{this.props.author}</h4>
                        <p style={genre_style}>{this.props.genre}</p>
                        <div>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 1.0) ? "yellow" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 2.0) ? "yellow" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 3.0) ? "yellow" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 4.0) ? "yellow" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating === 5.0) ? "yellow" : "grey"} />
                            </svg>
                            <svg width="30" height="30">
                                <text x="0" y="15" fill="black">{rating}</text>
                            </svg>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ margin: "15px" }}>
                                <h2>Chapters</h2>
                                <h2>{this.props.chapters}</h2>
                            </div>
                            <div style={{ margin: "15px" }}>
                                <h2>Browse</h2>
                                <h2>{this.props.views}</h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "30px" }}>
                            <button style={button_style}>Read</button>
                            <button style={button_style}>Add to Library</button>
                        </div>
                    </div>
                </div>
                <h1 style={{ marginLeft: "40px" }}>Synopsis</h1>
                <h3 style={{ marginLeft: "40px" }}>{this.props.synopsis}</h3>
            </div>
        );
    }
}

export default NovelDetails;