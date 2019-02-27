import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    
    

    render () {
        return (
            <div className="Header-div">
                <div className="Search-form">
                    <input className="Search-form-input" type="text" placeholder="Search form"></input>
                    <button className="Search-form-button">Search</button>
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