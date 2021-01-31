import React from "react"
import Chat from "./Chat"
import "./Chat.css"


const Chats=()=>{
    return(
        <>
        <div className="chats">

            <Chat
            name="Shubh"
            message="whats up brow..... 🔥 "
            timestamp="40 sec ago"
            profilePic="https://scholarlyoa.com/wp-content/uploads/2020/03/dhanush.jpg"
            
            />
            <Chat
            name="komal"
            message="how r u doing....😄 "
            timestamp="5 min ago"
            profilePic="https://i.pinimg.com/originals/7a/34/ef/7a34ef80f71fb6a6adb661fcf5c0c4fb.jpg"
            
            />
            <Chat
            name="Arjun"
            message="you r fine u r mine ...❤️"
            timestamp="1 hour ago"
            profilePic="https://images.indianexpress.com/2019/11/Vijay-Devarakonda-1200.jpg"
            
            />
            <Chat
            name="Chakuli"
            message="u are going to hell 😍 "
            timestamp="4 hour ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZj6DTdJgLeuK3nmpngeIj811HZJb89v5Iw&usqp=CAU"
            
            />
            <Chat
            name="Ramesh"
            message="whats up u are angree 🥵"
            timestamp=" 6 hour ago"
            profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_XTqKTROPkuxyjoJlmYIymtUMQymicfENA&usqp=CAU"
            
            />

        </div>

        </>
    )
}
export default  Chats;