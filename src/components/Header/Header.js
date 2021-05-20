import React from 'react'
import "./Header.css"
import logo from "../../Assets/logo.png"
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';

const Header = () => {
    return (
        <div className='header'>
        <div className="header__logo">
            <img src={logo} alt="Google Drive" />
            <span>Drive</span>
        </div>
        <div className="header__searchContainer">
            <div className="header__searchBar">
                <SearchIcon />
                <input type="text" placeholder='Search in Drive' />
                <ExpandMoreIcon />
            </div>
        </div>
        <div className="header__icons">
            <span>
                <HelpOutlineIcon />
                <SettingsIcon />
            </span>
            <AppsIcon />
            <img src="" alt="User"/>
        </div>
    </div>
    )
}

export default Header
