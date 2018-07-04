import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobStatusInfo from './JobStatusInfo';
import JobPositions from './JobPositions';
import FileUpload from './FileUpload';
import StatusSlider from './StatusSlider'
import registerServiceWorker from './registerServiceWorker';
import 'react-rangeslider/lib/index.css'

var root = (
    <div>
        <JobStatusInfo />
        <br />
        <JobPositions />
        <br />
        <FileUpload />
        <br />
        <StatusSlider />
    |</div>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
