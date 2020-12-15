import React from 'react'
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../card-dropdown/card-dropdown'
import {createStructuredSelector} from 'reselect'
import {selectCardHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selector'

const Header = ({currentUser, hidden}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo'/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser
        ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        )
        : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser, hidden: selectCardHidden})

export default connect(mapStateToProps)(Header)