
import React, { useEffect , useState, useRef} from "react";
import db from '../initFirebase'
import Message from './Message'


/**
 * component where the msgs will be displayes
 */
function Window() {
    /**
     * use state to set initial value and set the msglist state
     */
    const [messageList, setMessageList] = useState();
/**
 * useEffect hook to iterate over the objects in the database and pussing them into an array messageList[]
 */
    useEffect(()=>{
        const messageRef= db.ref('Message');
        messageRef.on('value',(snapshot) => {
            const messages= snapshot.val();
            const messageList=[]
            
            for (let message in messages){
                messageList.push(messages[message])
            }
            console.log(messageList);
            setMessageList(messageList);
        });
        },[]);
    
    
        const messageListEndRef = useRef(null)
        /**
         * a function that automatically scrolls down to bottim to get the messageListEndRef in view
         */
        const scrollToBottom = () => {
            messageListEndRef.current?.scrollIntoView({ behavior: "smooth" })
            }
/** 
 * use effect that launches scrollToBottom function whenever messageList changes
 */
  useEffect(() => {
    scrollToBottom()
  }, [messageList]);

    return (
        /**
         * a styled div containing a condition that checks if array of object has any messages 
         * and iterates over each msg and sends it as a prop to Message conponent 
         * and displayed the result(styled message)
         */
        <div style={{width:'80%',
                     height:'300px',
                     backgroundColor:'white',
                     margin:'10% auto',
                     position:'relative',
                     borderRadius:'15px',
                     display:'flex',
                     flexFlow:'column',
                     flexWrap:'nowrap',
                     overflow:'scroll'
                     }}>

            {messageList ? messageList.map((message,index) => <Message message={message} key={index} />):''}
            <div ref={messageListEndRef} />
        </div>
    )
}

export default Window
