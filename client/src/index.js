import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';


import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers/index';

const store = createStore(
    reducers,
    applyMiddleware(thunk),
    applyMiddleware(logger)
)


render(
    <Provider store={store} >
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
