'use client'

import {useState} from "react";

export default function Home() {
  const [v,setv] = useState(0);

  return (
      <>
    <h2>Hello World!</h2>
      <h3>{v}</h3>
        <button onClick={()=>setv(v+1)}>click me</button>
        </>
  );
}
