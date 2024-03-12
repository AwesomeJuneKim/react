import "./Hello.css";
function Hello(){
    let n= Math.floor(Math.random()*100)+1;
    const st1={
        backgroundColor:"darkgreen",
        color:"white"
    }
    let s='';
    if(n%2==0)s="짝수";
    else s="홀수";

    return(
        <h1>
            <span style={st1}>Hello</span>
            <span style={{display:"inline-flex", margin:"10px"}}>{n}</span>
            {s}
        </h1>
    );
}
export default Hello;