import ColorPicker from "./ColorPicker";
import React from "react"

export default function ColorPicker1(){
    return(
        <ColorPicker value="red" onChange={(value)=>console.log(value)}  />
    )
}