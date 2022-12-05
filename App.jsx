import { Routes } from './src/routes'
import { StatusBar } from 'expo-status-bar'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { store, persistor } from './src/store'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar style='light' backgroundColor='#7159c1' />
          <Routes />
        </PersistGate>
      </Provider>
    </>
  )
}
