import React, { useState } from 'react'; 

export default function HelloCard(){
    const [change, setChange] = useState('begin'); 
    
    return(
        <div>
            <h1>Welcome To The App</h1>
            <button>Click here</button>
        </div>
    )
}