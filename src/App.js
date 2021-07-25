// Libraries
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
// Pages and Components
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shoppage/shoppage';
import Header from './components/header/header';
import SignInSignUp from './pages/signin-signup/SignInSignUp';
import { setCurrentUser } from './redux/user/userActions';
import CheckoutPage from './pages/checkout/checkout';
import Footer from './components/footer/footer';
// Styling
// import './App.css'
import { selectCurrentUser } from './redux/user/userSelector';
import './App.css'


class App extends React.Component {

  unSubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot( snapShot => {
          // console.log(snapShot.data())
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          return console.log('')
        })
      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render(){
    return(
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} />
          <Route excat path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' 
          render={() => this.props.currentUser ? (<Redirect to='/' />) : <SignInSignUp /> } />

        </Switch> 
        <Footer />
      </div>
    </BrowserRouter>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
