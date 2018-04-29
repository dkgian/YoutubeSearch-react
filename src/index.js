import React, {Component} from 'react'
import ReactDom from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
//API key
const API_KEY = 'AIzaSyCT6l0_IRuAZ0YBS-8m-qN9lTdrN3elWn8'


//func-based component (can contains class-based component)
// const App = ()=>{
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     )
// }

class App extends Component { 
    constructor(props){
        super(props);
        this.state = {
            videos        : []  ,
            selectedVideo : null
        }

        this.videoSearch('youtube');
    }

    videoSearch = (term)=>{
        YTSearch( {key: API_KEY, term: term} , videos => {
            this.setState({ 
                videos : videos , 
                selectedVideo : videos[0]
            }) 
            //console.log(this.state);
        })
    }
    render(){
        const videoSearch = _.debounce((term)=>{
            this.videoSearch(term)
        }, 500);

        return (
            <div className='row'>
                <SearchBar onSearchTermChange={ videoSearch }/>
                <div className = 'col-lg-8' >
                    <VideoDetail video  = {this.state.selectedVideo} />
                </div>
                <div className = 'col-lg-4'>
                    <VideoList   
                        onVideoSelect = {
                            (selectedVideo) =>{
                                this.setState({selectedVideo})
                            }              
                        }
                        videos = {this.state.videos}
                    />
                </div>
            </div>
        );
    }
}

//put component into DOM
ReactDom.render( <App/> , document.querySelector(".container") );