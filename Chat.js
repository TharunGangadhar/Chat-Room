import React from 'react'
import './Chat.css';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CallIcon from '@material-ui/icons/Call';
import {Avatar , IconButton } from '@material-ui/core';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SendIcon from '@material-ui/icons/Send';

function ChatSent(){
    return (<div>
        <p className="chat_info">
            <p className="single_chat">
                <h3>Name</h3>
                <p>last message</p>
            </p>
            <p className="period">{new Date().toLocaleDateString()}</p>
        </p>
    </div>);
}
function ChatRecieve(){

    return (
    <div>
        <p className="chat_info chat_recieve">
            <p className="single_chat">
                <h3>Name</h3>
                <p>last message</p>
            </p>
            <p className="period">{new Date().toLocaleDateString()}</p>
        </p>
    </div>);

}

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerLeft">
                    <Avatar classNmae="chat_avatar" />
                    <div className="chat_headerLeftName">
                        <h3>Active Name</h3>
                        <p>last seen chat</p>
                    </div>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />       
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
                <div className="chat_body">
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                    <ChatSent />
                    <ChatRecieve />
                                                                 
                </div>
                <div className="chat_send">
                    <IconButton>
                        <EmojiEmotionsIcon  />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <form className="send_content">
                        <input type="text" placeholder="Type here" />
                        <IconButton className="sendIcon">
                            <SendIcon  />
                        </IconButton>
                    </form>
                </div>
            </div>
    )
}

export default Chat
