import React from "react";

export default function Button({children, ...props}){
    return(
         <button className='bg-stone-700 hover:bg-stone-500 text-white font-bold py-2 px-4 rounded mt-2 mb-6' {...props}>
                {children}
         </button>
    )
}