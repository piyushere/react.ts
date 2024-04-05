import React from "react";
import Child from "./child";

export const Parent = () => {
    const [ parentState, setParentState ] = React.useState(0);
    return (
        <>
            <div className="border-red-400 border p-3">
                <h1>I am a parent component: {parentState}</h1>
                <button className="p-4 bg-purple-500 " onClick={() => {
                    setParentState(state => state + 1);
                }}>parent state</button>
            </div>
            <Child />
        </>
    )
}