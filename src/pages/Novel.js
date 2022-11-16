import React from "react";
import axios from 'axios';

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import NovelDetails from "../components/NovelDetails";

var url = require("url")

class Novel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            author: "",
            genre: "",
            rating: 0.0,
            chapters: 0,
            views: 0,
            synopsis: ""
        };
    }
    componentDidMount() {
        var q = url.parse(window.location.href, true).query
        this.setState({
            name: q.name
        })
        axios.get('http://localhost:8080/novels/novel',{params: {name: q.name}})
            .then(response => {
                this.setState({
                    author: response.data.author,
                    genre: response.data.genre,
                    rating: response.data.rating,
                    chapters: response.data.chapters,
                    views: response.data.views,
                    synopsis: response.data.synopsis
                })
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
                <NovelDetails novel_name={this.state.name} author={this.state.author} genre={this.state.genre} rating={this.state.rating} synopsis={this.state.synopsis} chapters={this.state.chapters} views={this.state.views} />
            </div>
        );
    }

}
export default Novel;