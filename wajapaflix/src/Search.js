/* jshint esversion: 9 */
import React, {useState,useEffect} from 'react';
import axios from './axios';
import requests from './Requests';

// Issue with the input; the input is immutable.
class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            results:{},
            loading:false,
            message: ''
        };
        this.cancel ='';
            /* this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this); */
    }   
    fetchSearchResults(query){
        const searchUrl= requests.fetchNetflixOriginals;
        if(this.cancel){
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios.get(searchUrl,{
            cancelToken: this.cancel.token
        })
        .then(res=>{
           // const resultNotFound = 
            console.warn(res.data);
        })
        .catch(error=>{
            if (axios.isCancel(error)|| error){
                this.setState({
                    loading: false,
                    message: 'failed to fetch data'
                })
            }
        })
    }

    handleChange(event) {
        const query =  event.target.value;
        this.setState({value: query, loading:true ,message:''},()=>{
            this.fetchSearchResults(query);
        });
      }
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
/*      handleChange = ( event ) => {
        const query = event.target.value;
        this.setState(state:{query}); */
    render(){
        return(
            <form className="searchBar" onSubmit={this.handleSubmit}>
            <label className="search-label" htmlFor="searchInput">
                <input
                    type="text"
                    name = {this.state.value}
                    value= {this.state.value}
                    placeholder="search..."
                    id="searchInput"
                    onChange={this.handleChange}
                    onBlur = {this.handleChange}
                />
                <i className="fas fa-search" aria-hidden="true"></i>
            </label>
            </form>
        )
    }
}

export default Search; 
