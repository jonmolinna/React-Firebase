import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img
                        className="header__logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                        alt=""
                    />
                </Link> 
            </div>

            <div className="header__input">
                <input 
                    onChange={e => setInputSearch(e.target.value)} 
                    value={inputSearch} 
                    placeholder="Search" 
                    type="text"
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__innputButton" />
                </Link>
            </div>
            
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar 
                    alt="Remy Sharp"
                    src="https://avatars3.githubusercontent.com/u/54208914?s=460&amp;u=425aa8d5d2421828268f07206f9299d83ec20149&amp;v=4"
                />
            </div>
            
        </div>
    )
}

export default Header;