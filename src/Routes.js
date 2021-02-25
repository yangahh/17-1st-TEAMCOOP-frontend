import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ProductList from './Pages/ProductList/ProductList';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Nav from './Components/Nav/Nav';
import Mypage from './Pages/MyPage/Mypage';
import Review from './Pages/Review/Review';
import Cart from './Pages/Cart/Cart';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/productlist" component={ProductList} />
          <Route exact path="/productdetail/:id" component={ProductDetail} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/product/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
