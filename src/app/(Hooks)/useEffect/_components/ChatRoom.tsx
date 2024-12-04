'use client'
import React, { useEffect, useState } from "react"
import { createConnection } from "./CreateConnection"

type cate = "general" | "travel" | "music"


function ChatRoom({roomId} : {roomId: cate}) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234')
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect();
        return () => {
            connection.disconnect();
        }
    })
    return(
        <>
        <label htmlFor="">
            server URL:{' '}
            <input type="text" className="text-black" value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
        </label>
        <h1>Welcome to the {roomId} room!</h1>
        </>
    )
}

export default function MainChatRoom() {
    
    const [roomId, setRoomId] = useState<cate>('general');
    const [show, setShow] = useState(false);

    function handleselect(e:any) {
        setRoomId(e.target.value)
    }
    return (
        <>
            <div className="gap-2 flex flex-col items-center ">
                <h1 className="text-lg">Connecting to a chat server</h1>
                <label htmlFor="" className="flex flex-row" >
                    Choose the chat room:{' '}
                    <select value={roomId} onChange={handleselect} id="" className="text-black">
                        <option value="general">general</option>
                        <option value="travel">travel</option>
                        <option value="music">music</option>
                    </select>
                </label>
                <button className="border p-2 rounded-lg " onClick={() => setShow(!show)}>{show ? "close chat": "open chat"}</button>
                {show && <hr/>}
                {show && <ChatRoom roomId={roomId} />}
            </div>
        
        
        </>
    );
}