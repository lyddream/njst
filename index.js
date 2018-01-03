import React from 'react';
import { render } from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';

import { Root } from './src/containers';
import { Routing, history } from './src/routing';
import { store } from './src/redux/store';

const renderRoot = Root => {
    let syncedHistory = syncHistoryWithStore(history, store);
    render(
        <Root
            key={Math.random()}
            routes={Routing}
            history={syncedHistory}
            store = {store}
        />,
        document.getElementById('root')
    );
};

renderRoot(Root);