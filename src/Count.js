import {useState} from "react"
function Count(){
    var [count, setcount]=useState(0)
    function increment(){
        setcount(count+1)
    }
    function descrement(){
        setcount(count-1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <button onClick={increment}>Inc</button>
            <button onClick={descrement}>Dec</button>
        </div>
    )
}
export default Count