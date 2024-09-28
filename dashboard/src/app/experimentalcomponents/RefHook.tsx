'use client'

import {MutableRefObject, useRef} from "react";

const colors = ["red","green","blue","purple","yellow"];

/**
 * Like state, refs are retained by React between re-renders.
 * However, setting state re-renders a component. Changing a ref does not!
 * You can access the current value of that ref through the "ref.current" property.
 * @constructor
 */
export default function RefHook() {
    const ref = useRef<number>(0);
    const domNode = useRef<HTMLHeadingElement>(null);//access to the DOM elements managed by React

    return (
        <>
            <h2 ref={domNode}>Ref Hook experiment!</h2>
            <h3>{ref.current}</h3>
            <button onClick={()=>handleClick(ref,domNode)}>click me</button>
        </>
    );
}
function handleClick(ref:MutableRefObject<number>,domNode:MutableRefObject<HTMLHeadingElement>){
    ref.current +=1;
    domNode.current.style.color=colors[ref.current%5];
}