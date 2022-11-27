import React from 'react';
import axios from 'axios';

class NovelDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lib_novel: true
        };
    }
    genre_redirect = (event) => {
        window.location.href = "/genre?genre=" + this.props.genre
    }
    read_redirect = (event) => {
        window.open(this.props.link, '_blank');
    }
    add_to_library = (event) => {
        axios.post('http://localhost:8080/users/library', { name: this.props.novel_name, username: "Alston16" })
            .then(response => {
                console.log("Novel added to library")
            })
            .catch((error) => {
                console.log(error);
            })
            window.location.reload();
    }
    remove_from_library = (event) => {
        axios.delete('http://localhost:8080/users/library', { params: { name: this.props.novel_name, username: "Alston16" } })
            .then(response => {
                console.log("Novel added to library")
            })
            .catch((error) => {
                console.log(error);
            })
            window.location.reload();
    }
    componentDidMount() {
        axios.get('http://localhost:8080/users/library', { params: { username: "Alston16" } })
            .then(response => {
                console.log(response)
                this.setState({
                    lib_novel: response.data.includes(this.props.novel_name)
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        var cover_img_style = {
            margin: "40px",
            width: "360px",
            height: "480px",
            border: "1px solid"
        };
        var novel_details_style = {
            marginTop: "40px",
            height: "480px",
            textAlign: "center"
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
            cursor: "pointer"
        };
        return (
            <div>
                <div style={{ display: "flex" , flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    <img src={this.props.cover_image.toString('base64')} style={cover_img_style} alt="Novel Cover" />
                    <div style={novel_details_style}>
                        <h1>{this.props.novel_name}</h1>
                        <h4>{this.props.author}</h4>
                        <p style={genre_style} onClick={this.genre_redirect}>{this.props.genre}</p>
                        <div>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 1.0) ? "#bac910" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 2.0) ? "#bac910" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 3.0) ? "#bac910" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating >= 4.0) ? "#bac910" : "grey"} />
                            </svg>
                            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,1 4,18 19,6 1,6 16,18" fill={(rating === 5.0) ? "#bac910" : "grey"} />
                            </svg>
                            <svg width="30" height="30">
                                <text x="0" y="15" fill="black">{rating}</text>
                            </svg>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <div>
                                <h2>Chapters</h2>
                                <h2>{this.props.chapters}</h2>
                            </div>
                            <div>
                                <h2>Browse</h2>
                                <h2>{this.props.views}</h2>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-evenly" ,marginTop: "30px" }}>
                            <button className='novel_button' style={button_style} onClick={this.read_redirect}>Read</button>
                            <button className='novel_button' style={button_style} onClick={(this.state.lib_novel) ? this.remove_from_library : this.add_to_library}>{(this.state.lib_novel) ? "Remove from Library" : "Add to Library"}</button>
                        </div>
                    </div>
                </div>
                <h1 style={{ marginLeft: "40px",fontFamily:"'Aero_03', sans-serif",textShadow:"1px 1px black",marginBottom:"20px" }}>Synopsis</h1>
                <h3 style={{ marginLeft: "40px",fontFamily:"'Aero_03', sans-serif",marginRight:"40px",fontSize:"150%" }}>{this.props.synopsis}</h3>
            </div>
        );
    }
}

export default NovelDetails;