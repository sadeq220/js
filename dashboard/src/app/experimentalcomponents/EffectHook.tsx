'use client'
import {MutableRefObject, useEffect, useRef, useState} from "react";

/**
 * Effects have a different lifecycle from components.
 * Effects only is executed when its deps changes and also component re-renders.
 * @param userId
 * @constructor
 */
export default function EffectHook({userId}) {
    console.log("effect component re-render!")
    const domNode = useRef(null);
    useEffect(() => {
        //connect to a service
        console.log("effect hook invoked!");
    }, [userId]);
    return (
        <>
            <h2>Effect Hook experiment!</h2>
            <h3>HI</h3>
            <button ref={domNode} className={"border-2"} onClick={()=>changeDisplay(domNode)}>click me</button>
        </>
    );
}
function changeDisplay(domNode){
    domNode.current.style.display="block";
}