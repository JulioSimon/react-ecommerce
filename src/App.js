import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Pages
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSingUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// Components
import Header from "./components/header/header.component";

// Authentication
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {

    // Properties
    unsubscribeFromAuth = null;

    // Constructor
    constructor() {
        super();

        this.state = {
            currentUser: null,
        };
    }

    // Life cicle methods
    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({
                currentUser: user,
            });
            console.log(user);
        });
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    // Rendering
    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignInAndSingUpPage} />
                </Switch>
            </div>
        );
    }
}

export default App;
