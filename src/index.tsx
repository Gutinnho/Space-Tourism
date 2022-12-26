import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes';
import 'normalize.css';
import styles from 'styles/_global.module.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<div className={styles.wrapper}>
			<AppRouter />
		</div>
	</React.StrictMode>
);
