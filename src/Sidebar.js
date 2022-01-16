import React from "react"; 
import './Sidebar.css';
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined, History, Home, LocalFireDepartment, OndemandVideo, Subscriptions, ThumbUpAlt, VideoLibrary, WatchLater } from "@mui/icons-material";
import { Link } from "react-router-dom";

function getPath(path) {
    if (path.charAt(0) !== "/") {
        return  "/" + path;
    }
    return path;
}

function Sidebar (){

    
    return(
    <div className="sidebar">

            <SidebarRow linkto="" selected title="Home" Icon={Home} />
     
   
        
        <SidebarRow linkto="trending" title="Trending" Icon={LocalFireDepartment} />
        <SidebarRow title="Subscriptions" Icon={Subscriptions} />
        <hr />
        <SidebarRow title="Library" Icon={VideoLibrary} />
        <SidebarRow title="History" Icon={History} />
        <SidebarRow title="Your Videos" Icon={OndemandVideo} />
        <SidebarRow title="Watch Later" Icon={WatchLater} />
        <SidebarRow title="Liked Videos" Icon={ThumbUpAlt} />
        <SidebarRow title="Show more" Icon={ExpandMoreOutlined} />

    </div>
    )
}

export default Sidebar;