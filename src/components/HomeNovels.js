import React from 'react';
import HomeNovel from './HomeNovel';

import axios from 'axios';

class HomeNovels extends React.Component {
    constructor(props) {
        super(props);

        this.state = { novels: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/novels/')
            .then(response => {
                this.setState({ novels: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className='home_novels'>
                <h2 style={{marginTop:"2%",marginLeft:"3%"}}>Recommended Novels</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {this.state.novels.slice(0,10).map((novel, index) => <HomeNovel key={index} novel_name={novel["name"]} cover_image={novel["image"]} genre={novel["genre"]} />)}
                </div>
            </div>
        );
    }
}
export default HomeNovels;

