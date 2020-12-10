import React from 'react'
import './card-dropdown.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {   cartItems.length ?
                    cartItems.map(item => {
                        return <CartItem key={item.id} item={item} />
                    })
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
                }}>GO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown))
