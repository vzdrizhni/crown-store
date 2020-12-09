export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingGartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    if (existingGartItem) {
        return cartItems.map(cartItem => {
           return cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        })
    }

    return [...cartItems, {quantity: 1}]
}