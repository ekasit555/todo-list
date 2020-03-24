import React, { useState, useEffect, useReducer } from 'react'

const Modal = ({children, ...rest}) => {
    let props = {...rest}

    return (
        <div
            style={{ 
                "display": props.openModal ? "block": "none", 
                "position": "fixed", 
                "zIndex": "1", 
                "left": "0", 
                "top": "0", 
                "width": "100%", 
                "height": "100%", 
                "overflow": "auto", 
                "backgroundColor": "rgba(0,0,0,0.4)" 
            }}
            
        >
            <div
                style={{
                    "backgroundColor":"#fefefe",
                    "margin":"40% auto 0 auto",
                    "padding":"20px",
                    "border":"1px solid #888",
                    "width":"80%"
                }}
            >
                {children}  
            </div>
        </div>
    )
}

export default Modal