import React, { Children, ReactElement, ReactNode } from 'react'


interface PLayout{
    children:ReactElement | ReactElement[]
    direction:String
}

export function RFLayout(props:PLayout){
    const direction = ["app-layout",props.direction].join("-") 
    return (
        <div className={"app-layout "+direction}>
            {props.children}
        </div>
    )
}