import React, {Component} from 'react';

class SearchBar extends Component{ //class-based Component

    constructor( props ){
        super(props);
        this.state = { //state: plain js obj
            term : ''
        };
        
    }

    //declare method in es6-syntax
    render() {
        return(
            <div className='search-bar'>
                <input 
                    className='search-bar-input'
                    value = {this.state.term}
                    onChange = { event => this.onInputChange(event.target.value) }
                        //console.log(this.state.term);                     
                />            
            </div>
        );
    }

    onInputChange(term){
        this.setState({term : term});
        this.props.onSearchTermChange(this.state.term);
        // console.log(this.state.term);
    }

}
//export a component
export default SearchBar;