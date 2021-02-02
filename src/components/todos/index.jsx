import React from "react";
import {observer} from "mobx-react";
import {todosStore} from "./store";

export const Todo = observer(() => {

    return (
        <div>
            {todosStore.todos.map(el =>
                <div className="todo" key={el.id}>
                    <input
                        type="checkbox"
                        checked={el.complete}
                        onChange={() => todosStore.completeTodo(el)}
                    />
                    {el.title}
                    <button onClick={() => todosStore.removeTodo(el.id)}>X</button>
                </div>
            )}
        </div>
    )
})
