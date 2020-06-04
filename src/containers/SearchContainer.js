import React, { Component } from 'react'
import SearchForm from '../components/SearchForm.js'
import {connect} from 'react-redux'
import SearchResults from '../components/SearchResults.js'

class SearchContainer extends Component {
    displayResults = () => {
        if (this.props.results.text) {
            return <SearchResults results={this.props.results}/>
        }
    }
    
    render() {
        return (
            <div>
                <SearchForm search={this.props.search}/>
                {this.displayResults()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.searchResults
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (text) => dispatch({type: 'SEARCH', text})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
