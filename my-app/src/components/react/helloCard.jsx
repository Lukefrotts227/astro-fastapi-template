import React, { useState } from 'react'; 

export default function HelloCard(){
    const [change, setChange] = useState(false); 

    const doChange = () =>{
        if(change === false){
            setChange(true); 
        }else{
            setChange(false);; 
        }
    }

    
    return(
        <div class="flex flex-col items-center justify-center text-center bg-gradient-to-tr from-slate-500 to-slate-700 p-4 shadow-2xl rounded-md">
            <h1 class="text-xl">Welcome To The App</h1>
            <button onClick={doChange} class="bg-blue-200 p-2 m-3 rounded-full hover:bg-blue-400">Click here</button>
            {change && <h1 class="text-md font-bold text-black">This is a react component</h1>}
        </div>
    )
}