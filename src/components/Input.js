import { useState } from 'react';
import db from '../initFirebase'





/**
 * 
 * @returns a div with a text input and a button that stores value in the database
 */

function Input() {
    /**
     * setting up a use state to change the state of the input
     */
    const [input,setInput]= useState('');
    /**
     * takes the input value and stores it in the database
     * and stores the current date and time of thee event
     * at the end it sets the input back to empty string
     * @param {e} 
     *   *
     */
    const sendmessage = (e) =>{
        const messagesRef = db.ref("Message");
        const newMessageRef = messagesRef.push();
        newMessageRef.set({
        Text:input,
        Date: Date().toLocaleString(),})

        setInput("")}



        

    return (
        <div
        style={{
            backgroundColor:'rgba(210,210,10,0.75)',
            margin:'2% 2%',
            verticalAlign:'center',
            
    
            
            }}>
            <input  style={{
                    fontSize:'20px',
                    width:'80%',
                    lineHeight:'3em',
                    borderRadius:'15px',}} 
                    value={input} 
                    /**
                     * using the setinput to synchronize the value of the input with the event
                     */
                    onInput={e => setInput(e.target.value)}/>*


            <button style={{backgroundColor:'rgba(100,100,100,1)',
                            fontSize:'22px',
                            margin:'3%',
                            padding:'10px',
                            borderRadius:'10px',
                            cursor:'pointer',
                            color:'rgba(210,210,10,0.75)'
                            
                            }} 
                            /**
                             * the button executes sendmessage function to store the input value to database and sets input back to empty string
                             */
                            onClick={sendmessage}
                            
                        >
                Send
            </button>
        </div>
    );
    }

export default Input
