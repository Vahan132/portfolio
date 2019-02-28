import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    

    handleClick = () => {
        fetch("https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=af51884ebf5dbcb62e97871ac7b6b800")
        .then(function(response) {
            return response.json()
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson))
        })
      };

      //https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=af51884ebf5dbcb62e97871ac7b6b800
    

    render () {
        return (
            <div className="Header-div">
                <div className="Search-form">
                    <input className="Search-form-input" type="text" placeholder="Search form"></input>
                    <button className="Search-form-button" onClick={this.handleClick}>Search</button>
                </div>  
                <div className="Dialog-list">
                    <span>Home</span>
                    <span>Catalogue</span>
                    <span>Company</span>
                    <span>Contact</span>    
                </div>  
            </div>
        )
    }
}

export default Header;