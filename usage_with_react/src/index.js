import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './components/App'

// reduxのStoreの作成
const store = createStore(rootReducer)


// Reactに連携させるReduxのStoreを渡すのがProvider、 こうすることで、ReactとReduxが連携される。
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)