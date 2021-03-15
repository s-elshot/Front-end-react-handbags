import React from 'react';

// create button function with properties disabled & item.Give eventhandler with click-event,
// which displays message: console.log(item) to the console and give id: button.
function Button({item, disabled}){
    return(
        <button id="button" onClick={()=>console.log({item})} disabled={disabled}>
            {item}
        </button>
    );
}

export default Button;