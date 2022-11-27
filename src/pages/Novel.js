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
            image:"",
            author: "",
            genre: "",
            rating: 0.0,
            chapters: 0,
            views: 0,
            synopsis: "",
            link:""
        };
    }
    componentDidMount() {
        var q = url.parse(window.location.href, true).query
        this.setState({
            name: q.name
        })
        axios.get('http://localhost:8080/novels/novel',{params: {name: q.name}})
            .then(response => {
                console.log(response)
                if(response.data===null)
                {
                    window.location.href="/notfound"
                }
                this.setState({
                    author: response.data.author,
                    genre: response.data.genre,
                    rating: response.data.rating,
                    chapters: response.data.chapters,
                    views: response.data.views,
                    synopsis: response.data.synopsis,
                    image:response.data.image,
                    link:response.data.link
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
                <NovelDetails novel_name={this.state.name} author={this.state.author} cover_image={this.state.image} genre={this.state.genre} rating={this.state.rating} synopsis={this.state.synopsis} chapters={this.state.chapters} views={this.state.views} link={this.state.link}/>
            </div>
        );
    }

}
export default Novel;