import { useState } from "react";
import "./chat.css"

import EmojiPicker from "emoji-picker-react";

const Chat = () => {

    const [open, setopen] = useState(false)
    const [text, setText] = useState("")

    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji)
        setopen(false);
    }

    return (
        <>
            <div className="Chat">

                <div className="top ">

                    <div className="userimformation">
                        <img src="../avatar.png" alt=" " />
                        <div className="text">
                            <span>Jhon</span>
                            <p>lorem</p>
                        </div>

                    </div>

                    <div className="icons">
                        <img src="./phone.png" alt=""></img>
                        <img src="./video.png" alt=""></img>
                        <img src="./info.png" alt=""></img>
                    </div>

                </div>
                <div className="middle">

                <div className="message">
                <img src="./avatar.png" alt=""/>
                <div className="texts">

                   <p>
                   The & symbol acts as a placeholder for the parent selector. This means that wherever you use &, it gets replaced with the parent selector.
                   </p>
                   <span>
                    1 min ago
                   </span>

                </div>

                </div>

                <div className="message own">
                <div className="texts">

                   <p>
                   The & symbol acts as a placeholder for the parent selector. This means that wherever you use &, it gets replaced with the parent selector.
                   </p>
                   <span>
                    1 min ago
                   </span>

                </div>

                </div>
                <div className="message">
                <img src="./avatar.png" alt=""/>
                <div className="texts">

                   <p>
                   The & symbol acts as a placeholder for the parent selector. This means that wherever you use &, it gets replaced with the parent selector.
                   </p>
                   <span>
                    1 min ago
                   </span>

                </div>

                </div>
                <div className="message own">
                <div className="texts">

                   <p>
                   The & symbol acts as a placeholder for the parent selector. This means that wherever you use &, it gets replaced with the parent selector.
                   </p>
                   <span>
                    1 min ago
                   </span>

                </div>

                </div>
                <div className="message">
                <img src="./avatar.png" alt=""/>
                <div className="texts">

                   <p>
                   The & symbol acts as a placeholder for the parent selector. This means that wherever you use &, it gets replaced with the parent selector.
                   </p>
                   <span>
                    1 min ago
                   </span>

                </div>

                </div>

                <div className="message own">
                
                <div className="texts">
                <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"/>
                   <p>
                   The & symbol acts as a placeholder for the parent selector. This means that wherever you use &, it gets replaced with the parent selector.
                   </p>
                   <span>
                    1 min ago
                   </span>

                </div>

                </div>
                

                </div>
                 {/* // middle */}
                
                <div className="bottom ">

                    <div className="icons">
                        <img src="./img.png" alt="" />
                        <img src="./camera.png" alt="" />
                        <img src="./mic.png" alt="" />


                    </div>
                    <input type="text" placeholder="enter the text"
                        value={text}
                        onChange={e => { setText(e.target.value) }} />


                    <div className="emoji">


                        <img src="./emoji.png" alt="" onClick={() => {
                            setopen((prev) => { return !prev })
                        }} />
                        <div className="picker">
                            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                        </div>

                    </div>
                    <button className="sendButton">send</button>


                </div>

            </div>
        </>
    )
}


export default Chat;