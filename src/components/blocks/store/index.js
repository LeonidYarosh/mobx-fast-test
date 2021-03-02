import {makeAutoObservable} from 'mobx'
import { findIndex } from "lodash-es";

const defaultState = {
    products: {
        isFetching: false,
        payload: null,
        errorMessage: null,
    },
    availableProducts: null,
    tariffs: {
        isFetching: false,
        payload: null,
        errorMessage: null,
    },
    list: {
        1: {
            selectedProduct: null,
            selectedTariffs: null,
        }
    }
}

class Blocks {
    blocks = {
        ...defaultState
    }
    constructor() {
        makeAutoObservable(this)
    }

    fetchProduct() {
        const products = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ]
        this.blocks.products.isFetching = true
        this.blocks.products.payload = products
        this.blocks.products.isFetching = false
        this.blocks.availableProducts = products
    }

    selectedProduct(selectedItem, name) {
        const {
            list,
            availableProducts
        } = this.blocks
        list[name].selectedProduct = selectedItem
        availableProducts.splice(findIndex(availableProducts, selectedItem),1)
        console.log(availableProducts);
    }


    get list() {
        return this.blocks.list
    }
}

export const blocksStore = new Blocks()