import React from 'react'
import {Avatar} from '@material-ui/core';
import './SidebarChat.css'

function SidebarChat() {
    return (
            <div className="sidebar_chat">
                <Avatar className="chat_avatar" />
                <from className="form_content">
                    <div>
                        <h2>Name One</h2>
                        <p>last seen....</p>
                    </div>
                    <div><h3>{new Date().toLocaleDateString()}</h3></div>
                </from>
            </div>
    )
}

export default SidebarChat
