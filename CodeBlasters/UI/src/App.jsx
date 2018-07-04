import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Heading from './Title/Heading.jsx';
import Body from './Body/body.jsx'

class App extends React.Component {

    render(){
        return (
            <Grid id="mainWrapper">
                <Heading/>
                <hr/>
                <Body/>
            </Grid>
        );
    }

}
export default App;