
import React, { useContext } from "react";
import { AppState } from "./App";

function CompoC() {

    const appData = useContext(AppState)

    return (
        <>
            <div className="compC">
                <h1> Component C</h1>
                <div className="comp">{appData.data}</div>
                <div >Name: {appData.name.name}</div>
                <div className="comp">Age: {appData.name.age}</div>

            </div>
        </>
    )
}
export default CompoC