import React from 'react'
import './Sidebar.css'
import { Avatar, Icon } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
function Siderbar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <IconButton >
                    <SearchIcon  />
                </IconButton>
                <input type="text" name="search" placeholder="search here" />
            </div>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            
        </div>
    )
}

export default Siderbar
