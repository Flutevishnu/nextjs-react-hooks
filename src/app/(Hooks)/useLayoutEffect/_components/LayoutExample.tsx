'use client'
import { cn } from "@/app/lib/utils";
import { useState, useRef, useLayoutEffect, useEffect } from "react";

export default function LayoutExample() {
    const [boxwidth, setBoxWidth] = useState(0);
    const boxRef = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
        if (boxRef.current) {
            const {height} = boxRef.current.getBoundingClientRect();
            setBoxWidth(height * 2)
        }
    }, [boxRef])
    // useEffect(()=>{
    //     if (boxRef.current) {
    //         const {height} = boxRef.current.getBoundingClientRect();
    //         setBoxWidth(height * 2)
    //     }
    // })
    return(
        <div ref={boxRef} className={cn('h-[100px] transition-all ease-in-out text-center pt-8')} 
        style={{width: `${boxwidth}px`}}>
            Resized Box
        </div>
    )
}