'use client'
import {MutableRefObject, ReactDOM, ReactNode, Suspense, useEffect, useRef, useState} from "react";

interface effectProps {
    userId:number;
}
/**
 * Effects have a different lifecycle from components.
 * Effects only is executed when its deps changes and also component re-renders.
 * @param userId
 * @constructor
 */
export default function EffectHook({userId}: effectProps) {
    console.log("effect component re-render!")
    let x:HTMLElement ;
    const domNode = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        //connect to a service
        console.log("effect hook invoked!");
    }, [userId]);
    return (
        <Suspense>
            <h2>Effect Hook experiment!</h2>
            <h3>HI</h3>
            <button ref={domNode} className={"border-2"} onClick={()=>changeDisplay(domNode)}>click me</button>
        </Suspense>
    );
}

function changeDisplay(domNode: MutableRefObject<HTMLButtonElement>) {
    if (domNode.current)
        domNode.current.style.display = "block";
}