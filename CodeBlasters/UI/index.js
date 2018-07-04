import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App.jsx'
import { Provider } from 'mobx-react'
import loginStore from './stores/LoginStore.js'

const stores = {
        loginStore
}

const Root =(
        <Provider {...stores}>
                <App/>
        </Provider>
)

ReactDOM.render(Root, document.getElementById('app'))