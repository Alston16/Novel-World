import React from "react";

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import RankNovel from '../components/RankNovel';

import axios from 'axios';

class Ranking extends React.Component {
    constructor(props) {
        super(props);

        this.state = { novels: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/novels/ranking')
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
                    {this.state.novels.map((novel, index) => <RankNovel key={index} novel_name={novel["name"]} cover_image={novel["image"]} rating={novel["rating"]} rank={index+1}/>)}
                </div>
            </div>
        );
    }
}
export default Ranking;