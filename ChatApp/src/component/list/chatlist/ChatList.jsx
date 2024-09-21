import { useState } from "react";
import "./chatlist.css"

const ChatList = () => {

    const [addMode, setAddMode] = useState(false)
    return (
        <>
            <div className="chatList">

                <div className="search">
                    <div className="searchbar">
                        <img src="./search.png" />
                        <input type="text" placeholder="search" />
                    </div>

                    <img src={addMode ? "./plus.png" : "./minus.png"} alt="" className="add"
                        onClick={() => { setAddMode((prev) => !prev) }}
                    />

                </div>
                <div className="items">
                   <img src='../avatar.png' />

                   <div className="text"> 
                       <span>henry</span>
                       <p>hello</p>
                   </div>
                   
                </div>

                <div className="items">
                   <img src='../avatar.png' />

                   <div  className="text"> 
                       <span>henry</span>
                       <p>hello</p>
                   </div>
                   
                </div>

                <div className="items">
                   <img src='../avatar.png' />

                   <div  className="text"> 
                       <span>henry</span>
                       <p>hello</p>
                   </div>
                   
                </div>

            </div>



        </>
    )
}

export default ChatList;