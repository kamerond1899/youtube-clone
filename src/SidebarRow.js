import { Update } from '@mui/icons-material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './SidebarRow.css'



function SidebarRow({ selected, title, Icon, linkto }) {
    
    let localSelected = (title == "Home" && (window.location.pathname == "/") || (title == "Trending" && (window.location.pathname == "/trending") ? true : false));

    let activeStyle = {
        textDecoration: "underline"
      };
      
    return (
        <NavLink to={`/${linkto}`} exact activeClassName="active"
      >
        <div className= {"sidebarRow"}>
            <Icon className="sidebarRow_icon"/>
            <h2 className="sidebarRow_title">{title}</h2>
        </div>
        </NavLink>
    )
}

export default SidebarRow;
