import { atom, selector } from 'recoil'


const initialState = {
    products: [],

}

export const cartState = atom({
    key: 'cartState',
    default: initialState
})

export const totalPriceSelector = selector({
    key: 'totalPriceSelector',
    get: ({get}) => {
        const cart = get(cartState);
        return cart.products.reduce((sum,product) => {
            return sum + product.price * product.quantity;
        },0);
    }
})

export const totalCountSelector = selector({
    key: 'totalCountSelector',
    get: ({get}) => {
        const cart = get(cartState);
        return cart.products.reduce((sum,product) => {
            return sum + product.quantity;
        },0);
    }
})


