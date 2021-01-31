import React from "react";
import Avatar from "@material-ui/core/Avatar"
import { NavLink } from "react-router-dom";

const Chat = ({ name, message, profilePic, timestamp }) => {
    return (
        <>
        <NavLink to={`/chats/${name}`}>
            <div className="chat">
                <Avatar className="chat-img" src={profilePic} />

                <div className="chat_details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>

                <p className="chat_timestamp">{timestamp}</p>
            </div >
            
            </NavLink>

        </>
    )
}
export default Chat;
