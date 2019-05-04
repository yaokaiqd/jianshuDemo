import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './page/Home'
import Detail from './page/Detail/loadable'
import Login from './page/login'

const app = (
  <Provider store={store}>
      <Router>
        <Fragment>
          <App></App>
          {/*<Route path={'/'} exact render={() => (<div>hello home</div>)}></Route>*/}
          <Route path={'/'} exact component={Home}></Route>
          <Route path={'/detail/:id'} component={Detail}></Route>
          <Route path={'/login'} component={Login}></Route>
        </Fragment>
      </Router>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));