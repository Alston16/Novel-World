import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import GenreNovel from '../components/GenreNovel';

import axios from 'axios';

var url = require("url")

class GenreNovels extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            novels: [] ,
            genre: ""
        };
    }

    componentDidMount() {
        var q = url.parse(window.location.href, true).query
        this.setState({
            genre: q.genre
        })
        axios.get('http://localhost:8080/novels/genre',{params: {genre: q.genre}})
            .then(response => {
                this.setState({ novels: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <div>
                <NavBar />
                <TabsBar />
                <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
                    {this.state.novels.map((novel, index) => <GenreNovel key={index} novel_name={novel["name"]} cover_image={novel["image"]}/>)}
                </div>
            </div>
        );
    }
}
export default GenreNovels;