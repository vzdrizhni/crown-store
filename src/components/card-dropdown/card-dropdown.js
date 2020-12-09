import React from 'react'
import './card-dropdown.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(item => {
                        return <CartItem key={item.id} item={item} />
                    })
                }
            </div>
            <CustomButton>GO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({cartItems: cartItems})

export default connect(mapStateToProps)(CartDropdown)
