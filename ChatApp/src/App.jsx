import Detail from "./component/detail/Detail";
import List from "./component/list/List";
import Chat from "./component/chat/Chat";
import "./index.css"

const App=()=>{
    return(
        <>
            <div className="container">

            <List/>
            
            <Chat/>

            <Detail/>
            

            </div>
        </>
    )
}

export default App;