import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './src/root'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'



import {store, persistor} from './src/store/store'



ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
                <Root/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

