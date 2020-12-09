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