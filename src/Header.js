import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Apps, Search, VideoCall, Notifications, SearchOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
    const [inputSearch, setInputSearch] = useState('')
    return (

        <div className="header">
            <div className='header_left' >
                <MenuIcon />
                <Link to={`/`}><img 
                className="header-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/9/9e/YouTube_Logo_%282013-2017%29.svg" 
                alt=""
                
                /></Link>
                
                
            </div>
            <div className="header_input">
                <input onChange={e => setInputSearch(e.target.value) } value={inputSearch} placeholder="Search" type="text"/>
                    <Link to={`/search/${inputSearch}`}>
                        <SearchOutlined className="header_inputButton"/>
                    </Link>
            </div>
            <div className ="header_icons" >
                <VideoCall className='header_icon'/>
                <Apps className='header_icon'/>
                <Notifications className='header_icon'/>

                <Avatar alt="Default User"
                src="https://nomorsiapa.com/images/v/th/id/OIP.i0xgxMY8FX-DWBqJITqqDQHaHa?w=168&h=180&c=7&r=0&o=5&pid=1.7"/>
            </div>
        </div>
    )
}

export default Header;
