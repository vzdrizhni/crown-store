import React from 'react'
import './card-dropdown.scss'
import CustomButton from '../custom-button/custom-button.component'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
