import React from 'react'
import {Link} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect,IndexRoute} from 'react-router-dom';
// import {Provider} from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers';
import Header from  './components/common/header';
import Footer from './components/common/footer';
import Home from './components/home'
import Law from './components/law'

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

