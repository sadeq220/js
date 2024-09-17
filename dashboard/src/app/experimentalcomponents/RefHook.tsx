'use client'

import {useRef} from "react";

/**
 * Like state, refs are retained by React between re-renders.
 * However, setting state re-renders a component. Changing a ref does not!
 * You can access the current value of that ref through the "ref.current" property.
 * @constructor
 */
export default function RefHook() {
    const ref = useRef(0);

    return (
        <>
            <h2>Ref Hook experiment!</h2>
            <h3>{ref.current}</h3>
            <button onClick={()=>ref.current+=1}>click me</button>
        </>
    );
}