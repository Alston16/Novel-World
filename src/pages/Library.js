import React from "react";
import axios from 'axios';

import NavBar from '../components/NavBar';
import TabsBar from '../components/TabsBar';
import LibraryNovels from "../components/LibraryNovels";

class Library extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            novels:[]
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/users/library',{params: {username: "Alston16"}})
            .then(response => {
                console.log(response)
                this.setState({
                    novels:response.data
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
                <LibraryNovels novels={this.state.novels}/>
            </div>
        );
    }
}
export default Library;