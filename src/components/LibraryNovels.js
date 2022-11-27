import React from 'react';
import LibraryNovel from './LibraryNovel';

class LibraryNovels extends React.Component {
    render() {
        return (
            <div className='library_novels' >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                    {this.props.novels.map((novel, index) => <LibraryNovel key={index} novel_name={novel} />)}
                </div>
            </div>
        );
    }
}
export default LibraryNovels;

