'use client'
import { useRef } from "react";
export default function Form() {

    const inputRef = useRef<HTMLInputElement|null>(null);

    function handleclick() {
        inputRef.current?.focus();
    }

    return(
        <div className="gap-2 flex">
            <input type="text" className="text-black" ref={inputRef} />
            <div className="px-2">
            <button className="p-2 border rounded-lg " onClick={handleclick}>Focus the input box</button>
            </div>
            
        </div>
    )
}