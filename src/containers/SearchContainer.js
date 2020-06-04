import React, { Component } from 'react'
import SearchForm from '../components/SearchForm.js'
import {connect} from 'react-redux'
import SearchResults from '../components/SearchResults.js'

class SearchContainer extends Component {
    render() {
        return (
            <div>
                <SearchForm />
                <SearchResults />
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
