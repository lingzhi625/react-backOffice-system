import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
// import getRouter from './router/index';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./store";
import 'babel-polyfill'

// ReactDOM.render(getRouter(), document.getElementById('app'));
function render() {
    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>, document.getElementById('app'));
}
render()
if (module.hot) {
    // 实现热更新
    module.hot.accept();
}
store.subscribe(render);
// ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
