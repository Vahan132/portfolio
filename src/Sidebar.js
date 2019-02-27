import React, {Component} from 'react';
import './Sidebar.css'

class Sidebar extends Component {


    render () {
        return (
            <div className="Sidebar-div">
                <h3 className="Sidebar-title">Select Category</h3>
                <ul className="Sidebar-list">
                    <li>First Category</li>
                    <li>Second Category</li>
                    <li>Third Category</li>
                    <li>Fourth Category</li>
                    <li>Fifth Category</li>
                    <li>Sixth Category</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;