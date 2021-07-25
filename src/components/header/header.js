import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' // It is a higher order component
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.util' 
import CartIcon from '../carticon/cartIcon'
import { selectCartHidden } from '../../redux/cart/cartSelector'
import { selectCurrentUser } from '../../redux/user/userSelector'
import CartDropdown from '../cartdropdown/cartDropdown'
import './header.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
const Header = ({ currentUser, hidden }) => {
    return(
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop' >
                    SHOP
                </Link>
                <Link className='option' to='/shop/mens'>
                    MENS
                </Link>
                <Link className='option' to='/shop/womens'>
                    WOMENS
                </Link>
                {
                    currentUser
                    ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link to='/signin' ><div className='option' >SIGN IN</div></Link>
                }
                <CartIcon />
            </div>
            { hidden ? null : <CartDropdown /> }
        </div>
    )
}

// It will automatically pass top level state into the subsequent selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

// const mapStateToProps = (state) => {
//     return {
//         currentUser,
//         hidden
//     }
// }

export default  connect(mapStateToProps)(Header);