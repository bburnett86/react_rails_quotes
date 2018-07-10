import React, { Component } from 'react'
import axios from 'axios'
import Quote from './Quote'

class QuotesContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            quotes: [],
            searchVal: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({searchVal: event.target.value});
    }

    handleSubmit = () => {
        var id = this.state.searchVal
        console.log(id)
        axios.get(`http://localhost:3001/api/v1/quotes/${id}/search.json`)
            .then(response=>{
                //Update our state with the pulled quote information.
                this.setState({quotes: response.data});
            })
        .catch(error=>{
            console.error(error);
            this.setState({fireRedirect: true})
        });
    }


    gamesFilter = () =>{
        axios.get(`http://localhost:3001/api/v1/quotes/games.json`)
            .then(response =>{
                this.setState({quotes: response.data})
            })
        .catch(error => console.log(error))
    }

    moviesFilter = () =>{
        axios.get(`http://localhost:3001/api/v1/quotes/movies.json`)
            .then(response =>{
                this.setState({quotes: response.data})
            })
        .catch(error => console.log(error))
    }

    noFilter = () =>{
        this.allQuotes()
    }

    allQuotes(){
        axios.get(`http://localhost:3001/api/v1/quotes.json`)
            .then(response =>{
                this.setState({quotes: response.data})
            })
        .catch(error => console.log(error))
    }


    componentDidMount() {
        this.allQuotes()
    }

    render() {
        return ( 
            <div>
                <div>
                    <div>
                        <input type = "textarea" className="searchResults" onChange={this.handleChange} placeholder = "Search Quotes..."></input>
                        <button className="searchButton" onClick={this.handleSubmit}>
                            Search
                        </button>
                    </div>
                    <div>
                        <button className="gamesFilter"
                            onClick={this.gamesFilter}>
                            Games only
                        </button>
                        <button className="noFilter"
                            onClick={this.noFilter}>
                            All Quotes
                        </button>
                        <button className="moviesFilter"
                            onClick={this.moviesFilter}>
                            Movies only
                        </button>
                    </div>
                </div>
                {this.state.quotes.map((quote) => {
                    return(
                        <Quote quote = {quote} key = {quote.id}/>
                    )
                })}
            </div>
        )
    }
}

export default QuotesContainer
