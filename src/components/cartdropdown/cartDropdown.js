import React from 'react'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cartSelector'
import { withRouter } from 'react-router'

import Button from '../button/button'
import CartItem from '../cartItem/cartItem'
import { toggleCartHideen } from '../../redux/cart/cartAction'

import './cartDropdown.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return(
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <Button onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHideen());
            }} >GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));