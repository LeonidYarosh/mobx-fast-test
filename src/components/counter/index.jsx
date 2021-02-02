import React from 'react'


import './styles.css'
import {counterStore} from "./store";
import {observer} from "mobx-react";


export const Counter = observer(() => {

    return (
        <div className="counter">
            {counterStore.total}
            <div className="btns">
                <button className="btn" onClick={() => counterStore.increment()}>+</button>
                <button className="btn" onClick={() => counterStore.decrement()}>-</button>
            </div>
        </div>
    )
})
