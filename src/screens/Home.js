/* eslint-disable no-eval */
import React,{useState} from 'react'

function Home() {
    const [val,setVal] = useState();
    const [change,setChange] = useState(0);
    const changeHandle=()=>{
        setChange(val);
    }
  return (
    <div style={{margin:"150px 0 0 0"}}>
        <input type={"text"} style={{width:"70%",margin:"0 100px 0 150px",padding:"8px",borderRadius:"8px"}} onChange={(e)=>setVal(e.target.value)} />
        <button style={{background:"limegreen",border:"none",color:"white",fontSize:"1.5rem",borderRadius:"8px",padding:"8px"}} onClick={changeHandle}>Submit</button>
        <h1 style={{textAlign:"center"}}>{eval(change)}</h1>
    </div>
  )
}

export default Home;