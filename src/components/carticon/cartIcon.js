import React from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg.svg'
import { connect } from 'react-redux'
import { toggleCartHideen } from '../../redux/cart/cartAction'

import './cartIcon.scss'
import { selectCartItemsCount } from '../../redux/cart/cartSelector'

const CartIcon = ({ toggleCartHideen, itemCount }) => {
    return(
        <div className='cart-icon' onClick={toggleCartHideen}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHideen: () => dispatch(toggleCartHideen())
    }
}

const mapStateToProps = (state) => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);