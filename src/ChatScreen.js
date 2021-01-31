import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatSreen.css"


const ChatScreen = () => {
    const[input,setInput]=useState("");
    const [messages, setMassages] = useState([
        {
            name: "shubh",
            images: "https://i.pinimg.com/originals/7a/34/ef/7a34ef80f71fb6a6adb661fcf5c0c4fb.jpg",
            message: "hey whats up.. 🥰"
        },
        {
            name: "shubh",
            images: "https://i.pinimg.com/originals/7a/34/ef/7a34ef80f71fb6a6adb661fcf5c0c4fb.jpg",
            message: "what r u thinking "
        },
        {

            message: "am thinking about u... 😄"
        }
    ]);

    const sendmsg=e=>{
        e.preventDefault();
        setMassages([...messages,{message:input}])
        setInput("");
    }


    return (
        <>
            <div className="chatScreen">
                <p className="chatscreen-timespan">YOU MATCHED WITH KOMAL ON 1/2/2021</p>


                {messages.map((message) => (
                    (message.name ? (
                        <div className="chatscreen_msg">
                            <Avatar
                                className="chatScreen_img"
                                alt={message.name}
                                src={message.images}

                            />

                            <p className="chatscreen_text">
                                {message.message}
                            </p>

                        </div>
                    ) : (
                            <div className="chatscreen_msg">
                                <p className="chatscreen_textuser">
                                    {message.message}
                                </p>

                            </div>

                        ))
                ))}

            </div>



            <form className="chatScreen_input">
                <input className="chatscreen_inputfield"
                     type="text"
                     placeholder="Type a message"
                     onChange={e=>setInput(e.target.value)}
                     value={input} />
                <button 
                onClick={sendmsg} type="submit"
                 className="chatscreen_btn">send</button>

            </form>

        </>
    );
}
export default ChatScreen;