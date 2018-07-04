import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import TodoComponent from './components/Portfolio/PortfolioApi';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<TodoComponent />,document.getElementById("todoElement"));
registerServiceWorker();
