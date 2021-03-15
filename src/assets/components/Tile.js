import React from 'react';

function Tile({image,altImage,title,children}){
    if (!image){
        return(
         <section>
            <h2>{title}</h2>
             {children}
         </section>
        );
    } else {
        return (
            <section>
                <img src={image} alt={altImage}/>
            </section>
        );
    }
}

export default Tile;