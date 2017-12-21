import React from 'react'
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import Header from  './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home';
import Law from './components/law';
import '../public/js/vendor/hamburgers/hamburgers.min.css'
import './css/main.css';
//
// const createStoreWithMiddleware = compose(
//     applyMiddleware(reduxThunk),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
// )(createStore);
// const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
        <BrowserRouter>
            <div>
                <main>
                    <Header/>
                    <Switch>
                        {/*<Route path="/ico" component={Ico}/>*/}
                        {/*<Route path="/team" component={Team}/>*/}
                        <Route path="/law" component={Law}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                    <Footer/>
                </main>
            </div>
        </BrowserRouter>
    ,document.querySelector('.wrapper')
);

