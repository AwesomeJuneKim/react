import TailSelect from "../ui/TailSelect"
import TailInput from "../ui/TailInput"
import TailButton from "../ui/TailButton"
import { useState,useEffect,useRef } from "react"
import getxy from './getxy.json'
export default function Frcst() {
    const dRef=useRef();
    const sRef=useRef();
    const [x,setX]=useState();
    const [y,setY]=useState();
    const handleDate=()=>{
        console.log(dRef.current.value)
    }
    const ops=getxy.map(item=>item["1단계"])
    console.log(ops)

    const handleArea=()=>{
        // console.log(sRef.current.value)
        let tm=getxy.filter(item=>item['1단계']===sRef.current.value)
        console.log(tm[0])
        setX(tm[0]["격자 X"]);
        setY(tm[0]["격자 Y"]);
    }
    useEffect(()=>{
        console.log({x})
        console.log({y})
    },[sRef]);

  return (
    <div className="w-11/12 justify-start grid grid-cols-1 md:grid-cols-2 p-2 gap-2">
        <div>
            <TailInput type="date"
                        inputRef={dRef}
                        ph="날짜선택" 
                        handleChange={handleDate}/>
        </div>
        <div>
            <TailSelect ops={ops}
                        selRef={sRef}
                        handleLocation={handleArea}
                        opDefault="---지역선택---"/>
                        </div>
        <div>
            <TailButton caption="초단기예보"
                        color="blue"/>
        </div>
        <div>
            <TailButton caption="단기예보"
                        color="blue"/>
                        </div>
    </div>
  )
}