import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS files import
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserDataProvider } from './Context/UserDataContext';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// <React.StrictMode>
	<UserDataProvider>
		<App />
	</UserDataProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
