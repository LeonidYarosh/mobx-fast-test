import {makeAutoObservable} from 'mobx'

class Counter {
    count = 0
    timer = 100
    constructor() {
        makeAutoObservable(this)
    }

    increment() {
        this.count++
    }

    decrement() {
        this.count--
    }


    get total() {
        return `Count + timer = ${this.count + this.timer}`
    }
}

export const counterStore = new Counter()