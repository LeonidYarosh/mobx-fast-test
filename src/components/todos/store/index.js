import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: '1', title: 'Сходить в магазин', complete: false},
        {id: '2', title: 'Дела по волейболу', complete: false},
        {id: '3', title: 'Изучить mobx', complete: false},
    ]
    constructor() {
        // deep - нужно для глубокой проверки объекта
        makeAutoObservable(this, {}, {deep: true})
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(el => el.id !== id)
    }

    completeTodo(todo) {
        todo.complete = !todo.complete
    }
}

export const todosStore = new Todo()
