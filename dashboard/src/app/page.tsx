'use client'

import {useState} from "react";
import RefHook from "@/app/experimentalcomponents/RefHook";
import EffectHook from "@/app/experimentalcomponents/EffectHook";

export default function Home() {
  const [v,setv] = useState(0);
  const [effect, setEffect] = useState(0);
  return (
      <>
    <h2>Hello World!</h2>
      <h3>{v}</h3>
        <button onClick={()=>setv(v+1)}>click me</button>
        <RefHook />
        <EffectHook userId={effect}/>
        <button onClick={()=>setEffect(effect+1)}>update effect component props</button>
        </>
  );
}
