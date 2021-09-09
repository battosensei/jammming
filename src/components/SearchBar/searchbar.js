import React from 'react';
import './searchbar.css';



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    handleSearch(e) {
        e.preventDefault();
        console.log('handleSearch');
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value })
    }

    render() {

        return (
            <form className="SearchBar" onClick={this.handleSearch}>
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button onClick={this.handleSearch}>SEARCH</button>
            </form>
        )
    }
}

export default SearchBar;