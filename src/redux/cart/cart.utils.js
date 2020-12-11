export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log(cartItems);
    const existingGartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingGartItem) {
        return cartItems.map(cartItem => {
           return cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        })
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id)
    }

    return cartItems.map(item => item.id === cartItemToRemove.id ? {...item, quantity: item.quantity - 1} : item)
}