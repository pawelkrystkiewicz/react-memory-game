import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/app'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import { store } from './store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.unregister()
// reportWebVitals(console.log)
