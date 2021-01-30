import React from 'react'


import './styles.css'
import {counterStore} from "./store";


export const Counter = () => {

    return (
        <div className="counter">
            {`Counter: ${counterStore.count}`}
            <div className="btns">
                <button className="btn">+</button>
                <button className="btn">-</button>
            </div>
        </div>
    )
}
