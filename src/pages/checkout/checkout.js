import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import {selectCartItems, selectCartItemsTotal} from '../../redux/cart/cart.selectors';

import './checkout.scss';

const Checkout = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => (
                <CheckoutItem cartItem={item} key={item.id}/>
            ))
            }
            <div className='total'>TOTAL: ${total}</div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout)
